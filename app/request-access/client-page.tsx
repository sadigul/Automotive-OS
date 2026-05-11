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
  Globe
} from 'lucide-react';

const MODULES = [
  { slug: 'service-parts', label: 'Service Parts' },
  { slug: 'fixed-ops', label: 'Enterprise ERP' },
  { slug: 'erp-finance', label: 'ERP & Finance' },
  { slug: 'sales-crm', label: 'Sales CRM' },
  { slug: 'desking-fi', label: 'Desking & F&I' },
  { slug: 'accounting', label: 'Accounting' },
  { slug: 'comm-center', label: 'Comm-Center' },
  { slug: 'inventory', label: 'Inventory Intel' },
  { slug: 'stagg-portal', label: 'Stagg Portal' },
  { slug: 'custom', label: 'Custom Solution' },
];

const formSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  companyName: z.string().min(2, 'Company name is required'),
  websiteUrl: z.string().url('Invalid website URL').or(z.literal('')),
  location: z.string().min(2, 'Location is required'),
  fleetSize: z.string().min(1, 'Fleet size is required'),
  currentErp: z.string().min(2, 'Current ERP/CRM is required')
});

type FormData = z.infer<typeof formSchema>;

export default function RequestAccessClientPage() {
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
            : ['All Modules'],
          customDetails: selectedModules.includes('custom') ? customDetails : '',
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
      
      {/* Crumble Navigation */}
      <div className="pt-32 pb-6">
        <div className="max-w-6xl mx-auto px-8 flex items-center gap-2 text-sm font-bold">
          <Link href="/" className="text-gray-400 hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-300" />
          <span className="text-gray-900 font-black">Request Access</span>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 pb-32">
        <div className="w-full max-w-2xl">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[3rem] border border-gray-100 p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    DMSPilot Onboarding
                  </div>
                  <div className="text-xs font-bold text-gray-400">Step {step} of 3</div>
                </div>
                <h1 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight leading-tight">
                  {step === 1 ? 'Personal Identity' : step === 2 ? 'Dealership Metadata' : 'Select Solutions'}
                </h1>
                <p className="text-gray-500 font-medium mt-4">
                  {step === 1 
                    ? 'Enter the credentials you wish to use for the ecosystem.' 
                    : step === 2 
                    ? 'Help us understand your operation to optimize your instance.'
                    : 'Choose the solutions you need for your dealership.'}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key="step-1" 
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                      <div className="relative">
                        <User className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.fullName ? 'text-red-400' : touchedFields.fullName && !errors.fullName ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('fullName')}
                          type="text" 
                          placeholder="Arthur Morgan"
                          className={`w-full h-16 bg-gray-50 border rounded-[1.25rem] px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
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
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                      <div className="relative">
                        <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.email ? 'text-red-400' : touchedFields.email && !errors.email ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('email')}
                          type="email" 
                          placeholder="arthur@dealership.com"
                          className={`w-full h-16 bg-gray-50 border rounded-[1.25rem] px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
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
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Direct Phone</label>
                      <div className="relative">
                        <Phone className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.phone ? 'text-red-400' : touchedFields.phone && !errors.phone ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('phone')}
                          type="tel" 
                          placeholder="+1 (555) 000-0000"
                          className={`w-full h-16 bg-gray-50 border rounded-[1.25rem] px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
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
                      className="w-full h-16 bg-black hover:bg-gray-800 text-white rounded-[1.25rem] text-lg font-bold flex items-center justify-center gap-2 group transition-all"
                    >
                      Next: Dealership Info <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key="step-2" 
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Company Name</label>
                      <div className="relative">
                        <Building className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.companyName ? 'text-red-400' : touchedFields.companyName && !errors.companyName ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('companyName')}
                          type="text" 
                          placeholder="Premier Motors Inc."
                          className={`w-full h-16 bg-gray-50 border rounded-[1.25rem] px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
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
                          placeholder="https://www.premiermotors.com"
                          className={`w-full h-16 bg-gray-50 border rounded-[1.25rem] px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
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

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Location</label>
                        <div className="relative">
                          <MapPin className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.location ? 'text-red-400' : touchedFields.location && !errors.location ? 'text-green-500' : 'text-gray-400'}`} />
                          <input 
                            {...register('location')}
                            type="text" 
                            placeholder="NY, USA"
                            className={`w-full h-16 bg-gray-50 border rounded-[1.25rem] px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
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
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Fleet Size</label>
                        <div className="relative">
                          <Boxes className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.fleetSize ? 'text-red-400' : touchedFields.fleetSize && !errors.fleetSize ? 'text-green-500' : 'text-gray-400'}`} />
                          <input 
                            {...register('fleetSize')}
                            type="text" 
                            placeholder="50+ Cars"
                            className={`w-full h-16 bg-gray-50 border rounded-[1.25rem] px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
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
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Current ERP/CRM</label>
                      <div className="relative">
                        <BarChart3 className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.currentErp ? 'text-red-400' : touchedFields.currentErp && !errors.currentErp ? 'text-green-500' : 'text-gray-400'}`} />
                        <input 
                          {...register('currentErp')}
                          type="text" 
                          placeholder="CDK, Reynolds, or Custom"
                          className={`w-full h-16 bg-gray-50 border rounded-[1.25rem] px-14 focus:outline-none focus:ring-4 transition-all text-gray-900 font-semibold ${
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

                    <div className="flex gap-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={prevStep}
                        className="h-16 rounded-[1.25rem] px-8 font-bold text-gray-500 border-gray-100"
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={handleNextStep}
                        className="flex-1 h-16 bg-black hover:bg-gray-800 text-white rounded-[1.25rem] text-lg font-bold flex items-center justify-center gap-2 transition-all"
                      >
                        Next: Select Solutions <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key="step-3" 
                    className="space-y-6"
                  >
                    {/* Module Selection */}
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Select Solutions for Your Dealership</label>
                      <p className="text-xs text-gray-400 ml-1">Pick the solutions you need, or select all for full platform access.</p>
                      
                      {/* Select All Button */}
                      <button
                        type="button"
                        onClick={() => toggleModule('all')}
                        className={`w-full p-4 rounded-xl border text-left text-sm font-bold transition-all ${
                          selectedModules.length === MODULES.length
                            ? 'border-purple-400 bg-purple-100 text-purple-800 ring-2 ring-purple-300'
                            : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-purple-200 hover:bg-purple-50/50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {selectedModules.length === MODULES.length && <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />}
                          Select All Solutions
                        </span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        {MODULES.map((mod) => (
                          <button
                            key={mod.slug}
                            type="button"
                            onClick={() => toggleModule(mod.slug)}
                            className={`p-3 rounded-xl border text-left text-sm font-semibold transition-all ${
                              selectedModules.includes(mod.slug)
                                ? 'border-purple-300 bg-purple-50 text-purple-700 ring-2 ring-purple-200'
                                : 'border-gray-100 bg-gray-50 text-gray-700 hover:border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {selectedModules.includes(mod.slug) && <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />}
                              {mod.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Solution Details */}
                    {selectedModules.includes('custom') && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Custom Solution Requirements</label>
                        <p className="text-xs text-gray-400 ml-1">Describe what you need — integrations, workflows, features, or any specific requirements.</p>
                        <textarea
                          value={customDetails}
                          onChange={(e) => setCustomDetails(e.target.value)}
                          placeholder="e.g. We need a custom integration with our existing inventory provider, automated VIN decoding, custom reporting dashboards for our 12 rooftops..."
                          rows={5}
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/5 focus:border-purple-500 transition-all text-gray-900 font-semibold text-sm resize-none"
                        />
                      </motion.div>
                    )}

                    <div className="flex gap-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={prevStep}
                        className="h-16 rounded-[1.25rem] px-8 font-bold text-gray-500 border-gray-100"
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="flex-1 h-16 bg-purple-600 hover:bg-purple-700 text-white rounded-[1.25rem] text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(147,51,234,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          'Complete Application'
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
              className="bg-white rounded-[3rem] p-12 md:p-24 text-center shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-gray-100"
            >
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 mb-6">Request Transmitted</h2>
              <p className="text-gray-500 text-lg font-medium max-w-sm mx-auto mb-12 leading-relaxed">
                Your dealership profile and documents have been submitted to our engineering council. We will reach out within 24 hours to begin your system architecting.
              </p>
              <Link href="/">
                <Button className="h-14 bg-black hover:bg-gray-800 text-white rounded-xl px-10 font-bold">
                  Return to Dashboard
                </Button>
              </Link>
            </motion.div>
          )}

          <p className="text-center mt-12 text-gray-400 text-sm font-medium">
            © 2026 DMSPilot. Standardized Engineering for the Automotive Industry.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
