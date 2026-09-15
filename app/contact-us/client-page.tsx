'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getContactContext, type ContactContext } from '@/lib/contact-context';
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  User, 
  Mail, 
  Building, 
  Phone,
  Layers,
  ChevronDown
} from 'lucide-react';

const ROOFTOP_OPTIONS = [
  '1 Rooftop (Single store)',
  '2–5 Rooftops',
  '6–15 Rooftops',
  '16–30 Rooftops',
  '30+ Rooftops / Enterprise Group',
  'Commercial Fleet / OEM',
];

const formSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid work email'),
  phone: z.string().optional(),
  companyName: z.string().min(2, 'Please enter your company name'),
  rooftops: z.string().min(1, 'Please select number of rooftops'),
  message: z.string().min(5, 'Please enter your message'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactUsClientPage() {
  const searchParams = useSearchParams();

  const moduleParam = searchParams.get('module');
  const sectorParam = searchParams.get('sector');
  const modeParam = searchParams.get('mode');
  const solutionParam = searchParams.get('solution');
  const fromParam = searchParams.get('from');

  const [context, setContext] = useState<ContactContext>(() =>
    getContactContext({
      module: moduleParam,
      sector: sectorParam,
      mode: modeParam,
      solution: solutionParam,
      from: fromParam,
    })
  );

  useEffect(() => {
    setContext(
      getContactContext({
        module: moduleParam,
        sector: sectorParam,
        mode: modeParam,
        solution: solutionParam,
        from: fromParam,
      })
    );
  }, [moduleParam, sectorParam, modeParam, solutionParam, fromParam]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      rooftops: ROOFTOP_OPTIONS[0],
      message: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          fleetSize: data.rooftops,
          rooftops: data.rooftops,
          sourceType: context.sourceType,
          sourceTitle: context.title,
          sourceSlug: context.slug,
          subject: `${context.title} Inquiry`,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans antialiased">
      <Header />

      <main className="flex-1 w-full pt-28 sm:pt-32 pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation back to previous solution screen or sector suite (only if referring) */}
          {context.sourceType !== 'general' && (
            <div className="w-full mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link 
                href={context.backUrl}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-4 h-4 text-slate-700 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <span>{context.backLabel}</span>
              </Link>

              <span className="text-xs text-slate-500 font-medium">
                Inquiring about: <strong className="text-slate-900 font-bold">{context.title}</strong>
              </span>
            </div>
          )}

          {/* The Refined "Let's talk" Card — Exact topbar width */}
          <div className="w-full bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)]">
            {!submitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                
                {/* Left Side: Editorial Typography & Context Focus */}
                <div className="lg:col-span-5">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                    Let’s talk
                  </h1>

                  <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
                    {context.sourceType !== 'general' 
                      ? `Have questions about ${context.title}? Send us a message and our solutions team will review your operation.`
                      : 'Tell us about your dealership or automotive group. Our solutions team will review your operation and connect with you directly.'}
                  </p>

                  {context.sourceType !== 'general' && (
                    <div className="mt-6 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          Active Inquiry Focus
                        </span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {context.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-normal">
                        {context.tagline}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Professional Form */}
                <div className="lg:col-span-7">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    
                    {/* Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input 
                            {...register('fullName')}
                            type="text"
                            className="w-full h-12 bg-white border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 rounded-xl pl-11 pr-4 text-sm font-medium text-slate-900 transition-all outline-none"
                          />
                        </div>
                        {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName.message}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input 
                            {...register('email')}
                            type="email"
                            className="w-full h-12 bg-white border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 rounded-xl pl-11 pr-4 text-sm font-medium text-slate-900 transition-all outline-none"
                          />
                        </div>
                        {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                      </div>
                    </div>

                    {/* Company Name & Number of Rooftops */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input 
                            {...register('companyName')}
                            type="text"
                            className="w-full h-12 bg-white border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 rounded-xl pl-11 pr-4 text-sm font-medium text-slate-900 transition-all outline-none"
                          />
                        </div>
                        {errors.companyName && <p className="text-xs text-red-500 font-medium">{errors.companyName.message}</p>}
                      </div>

                      {/* Number of Rooftops */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Number of Rooftops <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <select 
                            {...register('rooftops')}
                            className="w-full h-12 bg-white border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 rounded-xl pl-11 pr-10 text-sm font-medium text-slate-900 transition-all cursor-pointer appearance-none outline-none"
                          >
                            {ROOFTOP_OPTIONS.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                        {errors.rooftops && <p className="text-xs text-red-500 font-medium">{errors.rooftops.message}</p>}
                      </div>
                    </div>

                    {/* Phone (Optional) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Phone Number (Optional)</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input 
                          {...register('phone')}
                          type="tel"
                          className="w-full h-12 bg-white border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 rounded-xl pl-11 pr-4 text-sm font-medium text-slate-900 transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Message (Clean empty textarea) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        {...register('message')}
                        rows={4}
                        className="w-full bg-white border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 rounded-xl p-4 text-sm font-medium text-slate-900 transition-all outline-none resize-none"
                      />
                      {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
                    </div>

                    {submitError && (
                      <p className="text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg text-center font-medium">
                        {submitError}
                      </p>
                    )}

                    {/* Refined Send Button */}
                    <div className="pt-2">
                      <button 
                        type="submit"
                        disabled={loading}
                        className="relative group overflow-hidden w-full h-12 rounded-full bg-slate-950 text-white text-sm font-bold border-2 border-slate-950 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer disabled:opacity-60 shadow-xs"
                      >
                        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-slate-950">
                          {loading ? 'Sending...' : 'Send Message'}
                          <ArrowRight className="w-4 h-4 text-white group-hover:text-slate-950 transition-all duration-300 group-hover:translate-x-1" />
                        </span>
                      </button>
                    </div>

                  </form>
                </div>

              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2">Message Sent!</h2>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-8">
                  Thank you! We received your message regarding <strong className="text-slate-900">{context.title}</strong>. Our solutions team will get back to you shortly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  {context.sourceType !== 'general' && (
                    <Link href={context.backUrl} className="w-full sm:w-auto">
                      <button 
                        type="button"
                        className="w-full sm:w-auto h-11 px-6 rounded-full bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>{context.backLabel}</span>
                      </button>
                    </Link>
                  )}

                  <Link href="/" className="w-full sm:w-auto">
                    <button 
                      type="button"
                      className="w-full sm:w-auto h-11 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                    >
                      Back to Home
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
