'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  CheckCircle2, 
  Building, 
  Mail, 
  User, 
  Phone, 
  ChevronRight, 
  MapPin, 
  BarChart3, 
  Boxes, 
  Globe,
  Sparkles,
  Headphones,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const MODULES = [
  { slug: 'enterprise-erp', label: 'Enterprise ERP' },
  { slug: 'sales-crm', label: 'Sales CRM' },
  { slug: 'digital-retail', label: 'Digital Retail' },
  { slug: 'ai-solutions', label: 'AI Solutions & Autonomous Ops' },
  { slug: 'service-bay', label: 'Service Bay' },
  { slug: 'dms', label: 'DMS (Dealer Management System)' },
  { slug: 'custom', label: 'Custom Enterprise Integration' },
];

const formSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  companyName: z.string().min(2, 'Dealership / Group name is required'),
  websiteUrl: z.string().url('Invalid website URL').or(z.literal('')),
  location: z.string().min(2, 'Location is required'),
  fleetSize: z.string().min(1, 'Inventory size is required'),
  currentErp: z.string().min(2, 'Current DMS/ERP is required'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactUsClientPage() {
  const searchParams = useSearchParams();
  const preSelectedModule = searchParams.get('module') || '';
  
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedModules, setSelectedModules] = useState<string[]>(
    preSelectedModule ? [preSelectedModule] : []
  );
  const [submitError, setSubmitError] = useState('');
  const [customDetails, setCustomDetails] = useState('');

  const toggleModule = (slug: string) => {
    if (slug === 'all') {
      setSelectedModules(prev => 
        prev.length === MODULES.length ? [] : MODULES.map(m => m.slug)
      );
      return;
    }
    setSelectedModules(prev => 
      prev.includes(slug) 
        ? prev.filter(m => m !== slug) 
        : [...prev, slug]
    );
  };

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, touchedFields }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'all'
  });

  const onSubmit = async (data: FormData) => {
    if (step < 3) {
      await handleNextStep();
      return;
    }
    
    setLoading(true);
    setSubmitError('');
    
    try {
      const res = await fetch('/api/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          modules: selectedModules.length > 0 
            ? selectedModules.map(s => MODULES.find(m => m.slug === s)?.label || s) 
            : ['All Solutions'],
          customDetails: selectedModules.includes('custom') ? customDetails : data.message || '',
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err) {
      void err;
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) {
      fieldsToValidate = ['fullName', 'email', 'phone'];
    } else if (step === 2) {
      fieldsToValidate = ['companyName', 'websiteUrl', 'location', 'fleetSize', 'currentErp'];
    }
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 pt-32 pb-32">
        <div className="w-full max-w-3xl">
          
          {/* Header Info Banner */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">Direct Engineering</div>
                <div className="text-[11px] text-gray-400">Speak with core architects</div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">Rapid Deployment</div>
                <div className="text-[11px] text-gray-400">Zero-downtime migration</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">Enterprise SLA</div>
                <div className="text-[11px] text-gray-400">99.99% uptime guaranteed</div>
              </div>
            </div>
          </div>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 p-6 sm:p-12 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-purple-600" />
                    Contact &amp; Deployment Request
                  </div>
                  <div className="text-xs font-bold text-gray-400">Step {step} of 3</div>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight leading-tight">
                  {step === 1 ? 'Contact Details' : step === 2 ? 'Dealership Profile' : 'Select Desired Solutions'}
                </h1>
                <p className="text-gray-500 font-medium mt-3 text-sm sm:text-base">
                  {step === 1 
                    ? 'Tell us who you are and where we can reach your leadership team.' 
                    : step === 2 
                    ? 'Help us understand your dealership footprint and legacy software setup.'
                    : 'Choose the solutions you want to activate or evaluate.'}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* STEP 1: Personal Info */}
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key="step-1" 
                    className="space-y-5"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                      <div className="relative">
                        <User className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.fullName ? 'text-red-400' : touchedFields.fullName && !errors.fullName ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('fullName')}
                          type="text" 
                          placeholder="e.g. Marcus Vance"
                          className={`w-full h-14 sm:h-16 bg-gray-50 border rounded-2xl px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
                            errors.fullName 
                              ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' 
                              : touchedFields.fullName && !errors.fullName
                              ? 'border-green-300 focus:ring-green-500/10 focus:border-green-500 bg-green-50/30'
                              : 'border-gray-100 focus:ring-purple-500/5 focus:border-purple-500'
                          }`}
                        />
                        {touchedFields.fullName && !errors.fullName && (
                          <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.fullName && <p className="text-xs text-red-500 font-medium ml-2">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Executive Email</label>
                      <div className="relative">
                        <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.email ? 'text-red-400' : touchedFields.email && !errors.email ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('email')}
                          type="email" 
                          placeholder="marcus@automotivegroup.com"
                          className={`w-full h-14 sm:h-16 bg-gray-50 border rounded-2xl px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
                            errors.email 
                              ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' 
                              : touchedFields.email && !errors.email
                              ? 'border-green-300 focus:ring-green-500/10 focus:border-green-500 bg-green-50/30'
                              : 'border-gray-100 focus:ring-purple-500/5 focus:border-purple-500'
                          }`}
                        />
                        {touchedFields.email && !errors.email && (
                          <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.email && <p className="text-xs text-red-500 font-medium ml-2">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Direct Phone Number</label>
                      <div className="relative">
                        <Phone className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.phone ? 'text-red-400' : touchedFields.phone && !errors.phone ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('phone')}
                          type="tel" 
                          placeholder="+1 (555) 019-2834"
                          className={`w-full h-14 sm:h-16 bg-gray-50 border rounded-2xl px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
                            errors.phone 
                              ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' 
                              : touchedFields.phone && !errors.phone
                              ? 'border-green-300 focus:ring-green-500/10 focus:border-green-500 bg-green-50/30'
                              : 'border-gray-100 focus:ring-purple-500/5 focus:border-purple-500'
                          }`}
                        />
                        {touchedFields.phone && !errors.phone && (
                          <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.phone && <p className="text-xs text-red-500 font-medium ml-2">{errors.phone.message}</p>}
                    </div>

                    <Button 
                      type="button" 
                      onClick={handleNextStep}
                      className="w-full h-14 sm:h-16 bg-black hover:bg-gray-800 text-white rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-2 group transition-all mt-4"
                    >
                      Next: Dealership Profile <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                )}

                {/* STEP 2: Dealership Info */}
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key="step-2" 
                    className="space-y-5"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Dealership / Group Name</label>
                      <div className="relative">
                        <Building className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.companyName ? 'text-red-400' : touchedFields.companyName && !errors.companyName ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('companyName')}
                          type="text" 
                          placeholder="Summit Automotive Group"
                          className={`w-full h-14 sm:h-16 bg-gray-50 border rounded-2xl px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
                            errors.companyName 
                              ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' 
                              : touchedFields.companyName && !errors.companyName
                              ? 'border-green-300 focus:ring-green-500/10 focus:border-green-500 bg-green-50/30'
                              : 'border-gray-100 focus:ring-purple-500/5 focus:border-purple-500'
                          }`}
                        />
                        {touchedFields.companyName && !errors.companyName && (
                          <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.companyName && <p className="text-xs text-red-500 font-medium ml-2">{errors.companyName.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Website URL</label>
                      <div className="relative">
                        <Globe className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.websiteUrl ? 'text-red-400' : touchedFields.websiteUrl && !errors.websiteUrl ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('websiteUrl')}
                          type="url" 
                          placeholder="https://www.summitautogroup.com"
                          className={`w-full h-14 sm:h-16 bg-gray-50 border rounded-2xl px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
                            errors.websiteUrl 
                              ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' 
                              : touchedFields.websiteUrl && !errors.websiteUrl
                              ? 'border-green-300 focus:ring-green-500/10 focus:border-green-500 bg-green-50/30'
                              : 'border-gray-100 focus:ring-purple-500/5 focus:border-purple-500'
                          }`}
                        />
                        {touchedFields.websiteUrl && !errors.websiteUrl && (
                          <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.websiteUrl && <p className="text-xs text-red-500 font-medium ml-2">{errors.websiteUrl.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Headquarters Location</label>
                        <div className="relative">
                          <MapPin className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.location ? 'text-red-400' : touchedFields.location && !errors.location ? 'text-green-500' : 'text-gray-400'}`} />
                          <input 
                            {...register('location')}
                            type="text" 
                            placeholder="Dallas, TX"
                            className={`w-full h-14 sm:h-16 bg-gray-50 border rounded-2xl px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
                              errors.location 
                                ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' 
                                : touchedFields.location && !errors.location
                                ? 'border-green-300 focus:ring-green-500/10 focus:border-green-500 bg-green-50/30'
                                : 'border-gray-100 focus:ring-purple-500/5 focus:border-purple-500'
                            }`}
                          />
                          {touchedFields.location && !errors.location && (
                            <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          )}
                        </div>
                        {errors.location && <p className="text-xs text-red-500 font-medium ml-2">{errors.location.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Total Rooftops / Fleet</label>
                        <div className="relative">
                          <Boxes className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.fleetSize ? 'text-red-400' : touchedFields.fleetSize && !errors.fleetSize ? 'text-green-500' : 'text-gray-400'}`} />
                          <input 
                            {...register('fleetSize')}
                            type="text" 
                            placeholder="4 Rooftops (450+ Units)"
                            className={`w-full h-14 sm:h-16 bg-gray-50 border rounded-2xl px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
                              errors.fleetSize 
                                ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' 
                                : touchedFields.fleetSize && !errors.fleetSize
                                ? 'border-green-300 focus:ring-green-500/10 focus:border-green-500 bg-green-50/30'
                                : 'border-gray-100 focus:ring-purple-500/5 focus:border-purple-500'
                            }`}
                          />
                          {touchedFields.fleetSize && !errors.fleetSize && (
                            <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          )}
                        </div>
                        {errors.fleetSize && <p className="text-xs text-red-500 font-medium ml-2">{errors.fleetSize.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Current DMS / CRM Platform</label>
                      <div className="relative">
                        <BarChart3 className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.currentErp ? 'text-red-400' : touchedFields.currentErp && !errors.currentErp ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('currentErp')}
                          type="text" 
                          placeholder="CDK Global, Reynolds &amp; Reynolds, Dealertrack, etc."
                          className={`w-full h-14 sm:h-16 bg-gray-50 border rounded-2xl px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
                            errors.currentErp 
                              ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' 
                              : touchedFields.currentErp && !errors.currentErp
                              ? 'border-green-300 focus:ring-green-500/10 focus:border-green-500 bg-green-50/30'
                              : 'border-gray-100 focus:ring-purple-500/5 focus:border-purple-500'
                          }`}
                        />
                        {touchedFields.currentErp && !errors.currentErp && (
                          <CheckCircle2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.currentErp && <p className="text-xs text-red-500 font-medium ml-2">{errors.currentErp.message}</p>}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={prevStep}
                        className="h-14 sm:h-16 rounded-2xl px-6 sm:px-8 font-bold text-gray-500 border-gray-200"
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={handleNextStep}
                        className="flex-1 h-14 sm:h-16 bg-black hover:bg-gray-800 text-white rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-2 transition-all"
                      >
                        Next: Select Solutions <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Module Selection */}
                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key="step-3" 
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Select Solutions to Activate</label>
                      
                      {/* Select All */}
                      <button
                        type="button"
                        onClick={() => toggleModule('all')}
                        className={`w-full p-4 rounded-2xl border text-left text-sm font-bold transition-all ${
                          selectedModules.length === MODULES.length
                            ? 'border-purple-500 bg-purple-50 text-purple-900 ring-2 ring-purple-300'
                            : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-purple-200'
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          <span>Full Platform Suite (All 6 Solutions)</span>
                          {selectedModules.length === MODULES.length && <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />}
                        </span>
                      </button>

                      {/* 6 Solutions Selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {MODULES.map((mod) => (
                          <button
                            key={mod.slug}
                            type="button"
                            onClick={() => toggleModule(mod.slug)}
                            className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all ${
                              selectedModules.includes(mod.slug)
                                ? 'border-purple-300 bg-purple-50 text-purple-800 ring-2 ring-purple-200'
                                : 'border-gray-100 bg-gray-50 text-gray-700 hover:border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            <span className="flex items-center justify-between">
                              <span>{mod.label}</span>
                              {selectedModules.includes(mod.slug) && <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Optional Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Additional Notes / Custom Requirements (Optional)</label>
                      <textarea
                        value={customDetails}
                        onChange={(e) => setCustomDetails(e.target.value)}
                        placeholder="Tell us about specific dealer group requirements, timeline, OEM brands, or migration dates..."
                        rows={4}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/5 focus:border-purple-500 transition-all text-gray-900 font-semibold text-sm resize-none"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={prevStep}
                        className="h-14 sm:h-16 rounded-2xl px-6 sm:px-8 font-bold text-gray-500 border-gray-200"
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="flex-1 h-14 sm:h-16 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(147,51,234,0.3)] disabled:opacity-50"
                      >
                        {loading ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          'Submit Contact Request'
                        )}
                      </Button>
                    </div>
                    {submitError && (
                      <p className="text-sm text-red-500 font-medium text-center">{submitError}</p>
                    )}
                  </motion.div>
                )}
              </form>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] p-10 sm:p-20 text-center shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-gray-100"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-sans font-bold text-gray-900 mb-4">Contact Request Received</h2>
              <p className="text-gray-500 text-base sm:text-lg font-medium max-w-md mx-auto mb-10 leading-relaxed">
                Thank you for reaching out. Our engineering and solutions team will review your dealership parameters and contact you within 24 hours.
              </p>
              <Link href="/">
                <Button className="h-14 bg-black hover:bg-gray-800 text-white rounded-xl px-10 font-bold">
                  Return to Home
                </Button>
              </Link>
            </motion.div>
          )}

          <p className="text-center mt-10 text-gray-400 text-xs font-medium">
            &copy; 2026 DMSPilot. Enterprise Operating System for Modern Automotive Retail.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
