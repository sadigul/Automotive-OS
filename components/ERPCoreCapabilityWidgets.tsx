'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  ArrowRightLeft, 
  CheckCircle2, 
  DollarSign, 
  ShieldCheck, 
  Car, 
  Wrench, 
  Camera, 
  BadgeAlert, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Clock,
  Lock,
  Eye,
  EyeOff,
  Check,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED GLOBAL MOTION CONSTANTS & UTILITIES
   Motion Language: cubic-bezier(0.16, 1, 0.3, 1), ~450–600ms transitions
   ═══════════════════════════════════════════════════════════════════════════ */
export const EASING = [0.16, 1, 0.3, 1] as const;

/**
 * Shared Animated Number Ticker component.
 * Smoothly interpolates numeric values on change with easeOutCubic.
 * Respects prefers-reduced-motion.
 */
export function AnimatedNumber({ 
  value, 
  prefix = '', 
  suffix = '', 
  decimals = 0 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const shouldReduceMotion = useReducedMotion();
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      prevValueRef.current = value;
      return;
    }

    const start = prevValueRef.current;
    const end = value;
    prevValueRef.current = value;

    if (start === end) return;

    const duration = 500;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * ease;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(end);
      }
    };

    const frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [value, shouldReduceMotion]);

  return (
    <span>
      {prefix}
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}


import { MultiRooftopInventoryAnimation } from './MultiRooftopInventoryAnimation';

/* ═══════════════════════════════════════════════════════════════════════════
   01 — MULTI-ROOFTOP INVENTORY VISIBILITY
   Pure Vector Animated Figure Diagram:
   Two warehouses connected to an iPad held by a person's hands in orange theme.
   ═══════════════════════════════════════════════════════════════════════════ */
export function MultiRooftopInventoryWidget() {
  return <MultiRooftopInventoryAnimation />;
}


/* ═══════════════════════════════════════════════════════════════════════════
   02 — VEHICLE LIFECYCLE TRACKING
   Story beat: Reconditioning pipeline (Trade-In -> Recon -> Detail -> Front Line -> Sold).
   - Progress marker travels across stage dividers dwelling at each stage.
   - Day count ticks up smoothly as marker travels.
   - At "Front Line" the marker glows/widens to mark the milestone.
   - Stat chips fade in only once the marker passes them.
   ═══════════════════════════════════════════════════════════════════════════ */
export function VehicleLifecycleWidget() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<number>(3); // 0 to 4

  const stages = [
    { label: 'Trade-In', days: 0.0, icon: Car },
    { label: 'Recon ($420)', days: 1.2, icon: Wrench },
    { label: 'Detail & Photo', days: 1.8, icon: Camera },
    { label: 'Front Line', days: 2.4, icon: CheckCircle2, milestone: true },
    { label: 'Sold & CIT', days: 18.0, icon: DollarSign },
  ];

  useEffect(() => {
    if (shouldReduceMotion) {
      setActiveStage(3);
      return;
    }

    const interval = setInterval(() => {
      // Loop sequence
      setActiveStage(0);
      const t1 = setTimeout(() => setActiveStage(1), 1000);
      const t2 = setTimeout(() => setActiveStage(2), 2000);
      const t3 = setTimeout(() => setActiveStage(3), 3200);
      const t4 = setTimeout(() => setActiveStage(4), 4500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }, 8500); // 8.5s total loop (~3.5s hold on resolved)

    // Initial sequence
    const initT1 = setTimeout(() => setActiveStage(1), 1000);
    const initT2 = setTimeout(() => setActiveStage(2), 2000);
    const initT3 = setTimeout(() => setActiveStage(3), 3200);
    const initT4 = setTimeout(() => setActiveStage(4), 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(initT1);
      clearTimeout(initT2);
      clearTimeout(initT3);
      clearTimeout(initT4);
    };
  }, [shouldReduceMotion]);

  const currentDays = stages[activeStage]?.days ?? 2.4;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-6 font-sans text-xs transition-all duration-300 hover:border-slate-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
        <div>
          <div className="font-bold text-slate-950 text-sm">Active Reconditioning Pipeline</div>
          <div className="text-slate-400 text-[11px] mt-0.5">2026 Audi RS6 Avant &bull; VIN ...4012</div>
        </div>
        <span className="text-[11px] font-bold text-slate-900 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-slate-500" />
          <span>Pipeline: <AnimatedNumber value={currentDays} decimals={1} prefix="Day " /></span>
        </span>
      </div>

      {/* 5-Stage Pipeline Cards with Progress Tracking */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-4">
        {stages.map((s, idx) => {
          const isCurrent = activeStage === idx;
          const isPassed = activeStage >= idx;

          return (
            <motion.div
              key={idx}
              animate={{
                scale: isCurrent && s.milestone ? [1, 1.06, 1] : 1,
                borderColor: isCurrent ? '#0f172a' : isPassed ? '#a7f3d0' : '#e2e8f0',
              }}
              transition={{ duration: 0.5, ease: EASING }}
              className={`p-2 sm:p-2.5 rounded-xl text-center border transition-all duration-400 ${
                isCurrent
                  ? s.milestone
                    ? 'bg-slate-950 text-white  ring-2 ring-emerald-400/60'
                    : 'bg-slate-950 text-white '
                  : isPassed
                  ? 'bg-emerald-50/70 text-emerald-950 border-emerald-200/70'
                  : 'bg-[#f8fafc] text-slate-400 border-slate-200/60'
              }`}
            >
              <div className="flex justify-center mb-1">
                <s.icon className={`w-3.5 h-3.5 ${
                  isCurrent ? 'text-emerald-400' : isPassed ? 'text-emerald-600' : 'text-slate-400'
                }`} />
              </div>
              <div className="font-bold text-[9px] sm:text-[10px] leading-tight truncate">{s.label}</div>
              <div className={`text-[9px] mt-0.5 ${
                isCurrent ? 'text-slate-300' : isPassed ? 'text-emerald-700 font-semibold' : 'text-slate-400'
              }`}>
                Day {s.days}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Track Line */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full mb-4 overflow-hidden">
        <motion.div
          animate={{
            width: `${((activeStage + 1) / stages.length) * 100}%`,
          }}
          transition={{ duration: 0.6, ease: EASING }}
          className="h-full bg-slate-950 rounded-full"
        />
      </div>

      {/* Stat Chips (Fade in ONLY when marker passes them) */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <motion.span
          animate={{ opacity: activeStage >= 2 ? 1 : 0.25 }}
          transition={{ duration: 0.4 }}
          className="font-medium text-slate-600 flex items-center gap-1"
        >
          <CheckCircle2 className={`w-3.5 h-3.5 ${activeStage >= 2 ? 'text-emerald-600' : 'text-slate-300'}`} />
          Zero reconditioning black holes
        </motion.span>

        <motion.span
          animate={{ opacity: activeStage >= 3 ? 1 : 0.25 }}
          transition={{ duration: 0.4 }}
          className="font-bold text-emerald-600 flex items-center gap-1"
        >
          <TrendingUp className={`w-3.5 h-3.5 ${activeStage >= 3 ? 'text-emerald-600' : 'text-slate-300'}`} />
          +4.2 Days Faster Turn
        </motion.span>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   03 — OPERATIONS DASHBOARD
   Story beat: The action list is triaged live, mirroring morning GM routine.
   - Anchor: "3 Urgent" counter ticks down from 3 to 2 in sync.
   - RO #4092 in Bay 4 gets an "Advisor pinged" confirmation and dims.
   - Remaining rows stay static and legible.
   - Quietly resets after hold.
   ═══════════════════════════════════════════════════════════════════════════ */
export function GMOpsDashboardWidget() {
  const shouldReduceMotion = useReducedMotion();
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsResolved(true);
      return;
    }

    const interval = setInterval(() => {
      // Start in unresolved state
      setIsResolved(false);
      // Resolve action at 2.2s
      const t = setTimeout(() => setIsResolved(true), 2200);

      return () => clearTimeout(t);
    }, 7000); // 7s loop (~3.5s hold)

    const initialT = setTimeout(() => setIsResolved(true), 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(initialT);
    };
  }, [shouldReduceMotion]);

  const urgentCount = isResolved ? 2 : 3;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-6 font-sans text-xs transition-all duration-300 hover:border-slate-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">
            <BadgeAlert className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-slate-950 text-sm">GM Action Items Today</span>
        </div>

        {/* Anchor: Live Ticking Urgent Counter */}
        <motion.span
          animate={{
            backgroundColor: isResolved ? '#f8fafc' : '#fff1f2',
            color: isResolved ? '#475569' : '#be123c',
            borderColor: isResolved ? '#e2e8f0' : '#fecdd3',
          }}
          transition={{ duration: 0.5, ease: EASING }}
          className="text-[11px] font-black px-2.5 py-1 rounded-full border flex items-center gap-1.5"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isResolved ? 'bg-slate-400' : 'bg-rose-500 animate-ping'}`} />
          <AnimatedNumber value={urgentCount} suffix=" Urgent" />
        </motion.span>
      </div>

      {/* Action List Items */}
      <div className="space-y-2.5">
        {/* Row 1: The Resolving RO in Bay 4 */}
        <motion.div
          animate={{
            backgroundColor: isResolved ? '#f8fafc' : '#ffffff',
            borderColor: isResolved ? '#e2e8f0' : '#f59e0b',
            opacity: isResolved ? 0.75 : 1,
          }}
          transition={{ duration: 0.5, ease: EASING }}
          className="p-3.5 border rounded-xl flex items-center justify-between transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
              isResolved ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
            }`} />
            <div className="min-w-0">
              <div className="font-bold text-slate-950 text-xs sm:text-sm truncate">
                Service RO #4092 &gt;48 Hours in Bay 4
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                {isResolved ? 'Advisor notified &bull; Customer authorized via SMS' : 'Awaiting customer OEM turbo approval'}
              </div>
            </div>
          </div>

          <motion.div
            animate={{ scale: isResolved ? [0.95, 1.05, 1] : 1 }}
            transition={{ duration: 0.4, ease: EASING }}
            className="shrink-0 ml-2"
          >
            {isResolved ? (
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                <Check className="w-3 h-3" /> Advisor Pinged
              </span>
            ) : (
              <span className="text-xs font-bold text-slate-950 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1">
                Ping Advisor <ArrowRight className="w-3 h-3" />
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Row 2: Lender Wire Pending (Static & Legible) */}
        <div className="p-3.5 bg-[#f8fafc] border border-slate-200/80 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold text-slate-950 text-xs sm:text-sm truncate">2 Contracts Awaiting Lender Wire</div>
              <div className="text-[11px] text-slate-500 mt-0.5 truncate">Chase Auto &bull; $84,200 &bull; Stips Cleared</div>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shrink-0 ml-2">
            Review
          </span>
        </div>

        {/* Row 3: Dealer Trade Auth (Static & Legible) */}
        <div className="p-3.5 bg-[#f8fafc] border border-slate-200/80 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold text-slate-950 text-xs sm:text-sm truncate">Dealer Trade Release Required</div>
              <div className="text-[11px] text-slate-500 mt-0.5 truncate">Metro Lexus &bull; 2026 Porsche Macan GTS</div>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shrink-0 ml-2">
            Authorize
          </span>
        </div>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   04 — VENDOR & FLOOR PLAN MANAGEMENT
   Story beat: Utilization moving against a real ceiling + live countdown commit.
   - Credit bars (NextGear $8.0M, Ally $16.5M) fill from current to higher and back.
   - Percentage & dollar labels tick in exact sync.
   - "$14.2M Available" recalculates live proving math.
   - Curtailment chip slides out: "4 Units" ticks down to "3 Units" then resets.
   ═══════════════════════════════════════════════════════════════════════════ */
export function FloorPlanWidget() {
  const shouldReduceMotion = useReducedMotion();
  // Phase: 0 = baseline ($14.2M avail, 4 units), 1 = drawdown ($13.6M avail, 3 units)
  const [isDrawdown, setIsDrawdown] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsDrawdown(false);
      return;
    }

    const interval = setInterval(() => {
      setIsDrawdown(true);
      const t = setTimeout(() => setIsDrawdown(false), 3500);
      return () => clearTimeout(t);
    }, 7500); // 7.5s loop

    const initialT = setTimeout(() => setIsDrawdown(true), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialT);
    };
  }, [shouldReduceMotion]);

  // NextGear line ($8.0M max): Baseline $4.2M (52.5%) -> Drawdown $4.8M (60.0%)
  const nextGearUsed = isDrawdown ? 4.8 : 4.2;
  const nextGearPct = isDrawdown ? 60.0 : 52.5;

  // Ally line ($16.5M max): Baseline $6.1M (37.0%) -> Drawdown $6.8M (41.2%)
  const allyUsed = isDrawdown ? 6.8 : 6.1;
  const allyPct = isDrawdown ? 41.2 : 37.0;

  // Available Headroom: Baseline $14.2M -> Drawdown $13.6M
  const availableCredit = isDrawdown ? 13.6 : 14.2;

  // Curtailment units: Baseline 4 units -> 3 units (as one is reassigned off batch)
  const curtailmentUnits = isDrawdown ? 3 : 4;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-6 font-sans text-xs transition-all duration-300 hover:border-slate-300">
      {/* Header with Live Available Credit Math */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
            <DollarSign className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-slate-950 text-sm">Floor Plan Lines &amp; Curtailments</span>
        </div>

        {/* Live Available Headroom Ticker */}
        <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          <AnimatedNumber value={availableCredit} decimals={1} prefix="$" suffix="M Available" />
        </span>
      </div>

      {/* Credit-Line Utilization Bars */}
      <div className="space-y-3.5 mb-4">
        {/* NextGear Capital */}
        <div className="p-3 bg-[#f8fafc] rounded-xl border border-slate-200/60">
          <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
            <span>NextGear Capital Credit Line ($8.0M)</span>
            <span className="font-black text-slate-950">
              <AnimatedNumber value={nextGearUsed} decimals={1} prefix="$" suffix="M Used (" />
              <AnimatedNumber value={nextGearPct} decimals={1} suffix="%)" />
            </span>
          </div>
          <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${nextGearPct}%` }}
              transition={{ duration: 0.6, ease: EASING }}
              className="bg-slate-950 h-full rounded-full" 
            />
          </div>
        </div>

        {/* Ally Financial */}
        <div className="p-3 bg-[#f8fafc] rounded-xl border border-slate-200/60">
          <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
            <span>Ally Financial Commercial Line ($16.5M)</span>
            <span className="font-black text-slate-950">
              <AnimatedNumber value={allyUsed} decimals={1} prefix="$" suffix="M Used (" />
              <AnimatedNumber value={allyPct} decimals={1} suffix="%)" />
            </span>
          </div>
          <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${allyPct}%` }}
              transition={{ duration: 0.6, ease: EASING }}
              className="bg-slate-950 h-full rounded-full" 
            />
          </div>
        </div>
      </div>

      {/* Next Scheduled Curtailment with Animated VIN Chip */}
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-600 font-medium">Next Scheduled Curtailment:</span>
          <span className="text-slate-950 font-bold">12 Days</span>
        </div>

        <div className="flex items-center gap-2">
          <AnimatePresence mode="popLayout">
            {isDrawdown && (
              <motion.span
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.9 }}
                transition={{ duration: 0.4, ease: EASING }}
                className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md"
              >
                VIN #8821 Reassigned &bull; Payoff Cleared
              </motion.span>
            )}
          </AnimatePresence>

          <span className="font-black text-slate-950 px-2.5 py-1 rounded-lg bg-white border border-slate-200">
            <AnimatedNumber value={curtailmentUnits} suffix=" Units" />
          </span>
        </div>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   05 — ROLE-BASED ACCESS
   Story beat: The same data, gated differently — user-triggered toggle matrix.
   - Interactive role switcher pills: Dealer Principal, GM, Controller, Sales Manager.
   - Sample deal record blurs / redacts sensitive margins depending on role.
   - Static SOC 2 Type II badge (never animated).
   ═══════════════════════════════════════════════════════════════════════════ */
export function RoleBasedAccessWidget() {
  const [activeRole, setActiveRole] = useState<'owner' | 'gm' | 'controller' | 'sales'>('sales');

  const permissions = {
    owner: {
      title: 'Dealer Principal / Owner',
      level: 'Super-Admin Access',
      canSeeFrontGross: true,
      canSeeBackEndPack: true,
      canSeeGroupNet: true,
    },
    gm: {
      title: 'General Manager',
      level: 'Store Operations',
      canSeeFrontGross: true,
      canSeeBackEndPack: false,
      canSeeGroupNet: false,
    },
    controller: {
      title: 'Corporate Controller',
      level: 'Financial Authority',
      canSeeFrontGross: true,
      canSeeBackEndPack: true,
      canSeeGroupNet: true,
    },
    sales: {
      title: 'Sales & Desking Manager',
      level: 'Front-End Desking',
      canSeeFrontGross: false,
      canSeeBackEndPack: false,
      canSeeGroupNet: false,
    },
  };

  const curr = permissions[activeRole];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-6 font-sans text-xs transition-all duration-300 hover:border-slate-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-slate-950 text-sm">Role-Based Security Matrix</span>
        </div>

        {/* Static Trust Mark Badge */}
        <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 select-none">
          SOC 2 Type II
        </span>
      </div>

      {/* User-Triggered Role Switcher Pills */}
      <div className="flex gap-1 mb-3.5 bg-slate-100 p-1 rounded-xl">
        {[
          { id: 'owner', label: 'Dealer Principal' },
          { id: 'gm', label: 'GM' },
          { id: 'controller', label: 'Controller' },
          { id: 'sales', label: 'Sales Manager' },
        ].map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setActiveRole(r.id as any)}
            className={`flex-1 py-1.5 px-2 rounded-lg font-bold text-[10px] sm:text-[11px] transition-all cursor-pointer truncate ${
              activeRole === r.id
                ? 'bg-slate-950 text-white '
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Live Sample Deal Record with Role-Gated Redaction */}
      <div className="p-3.5 bg-[#f8fafc] border border-slate-200/80 rounded-xl space-y-2.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
          <div>
            <span className="font-black text-slate-950 text-xs sm:text-sm">2026 Lexus LX600 Luxury</span>
            <span className="text-[10px] text-slate-400 ml-1.5 font-mono">(VIN ...4402)</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
            {curr.level}
          </span>
        </div>

        {/* Data Fields with Instant Redaction / Reveal */}
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          {/* Sale Price (Visible to All) */}
          <div className="p-2 bg-white rounded-lg border border-slate-200/60">
            <div className="text-slate-400 text-[10px]">Contract Sale Price</div>
            <div className="font-black text-slate-950 mt-0.5">$134,800</div>
          </div>

          {/* Front Gross (Gated) */}
          <div className="p-2 bg-white rounded-lg border border-slate-200/60 relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-[10px]">
              <span>Front Gross Margin</span>
              {!curr.canSeeFrontGross && <Lock className="w-2.5 h-2.5 text-slate-400" />}
            </div>
            <div className="mt-0.5 font-black">
              {curr.canSeeFrontGross ? (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-emerald-600"
                >
                  +$6,840
                </motion.span>
              ) : (
                <span className="inline-block px-1.5 py-0.2 bg-slate-200/80 text-slate-400 blur-[3px] select-none rounded">
                  $6,840
                </span>
              )}
            </div>
          </div>

          {/* Pack & Holdback (Gated) */}
          <div className="p-2 bg-white rounded-lg border border-slate-200/60 relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-[10px]">
              <span>Pack &amp; Holdback</span>
              {!curr.canSeeBackEndPack && <Lock className="w-2.5 h-2.5 text-slate-400" />}
            </div>
            <div className="mt-0.5 font-black">
              {curr.canSeeBackEndPack ? (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-950"
                >
                  $4,250 Pack
                </motion.span>
              ) : (
                <span className="inline-block px-1.5 py-0.2 bg-slate-200/80 text-slate-400 blur-[3px] select-none rounded">
                  $4,250
                </span>
              )}
            </div>
          </div>

          {/* Group Consolidated Net (Gated to DP & Controller) */}
          <div className="p-2 bg-white rounded-lg border border-slate-200/60 relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-[10px]">
              <span>Net Consolidated</span>
              {!curr.canSeeGroupNet && <Lock className="w-2.5 h-2.5 text-slate-400" />}
            </div>
            <div className="mt-0.5 font-black">
              {curr.canSeeGroupNet ? (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-emerald-700"
                >
                  +$11,090 Net
                </motion.span>
              ) : (
                <span className="inline-block px-1.5 py-0.2 bg-slate-200/80 text-slate-400 blur-[3px] select-none rounded">
                  $11,090
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
