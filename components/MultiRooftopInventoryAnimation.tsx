'use client';

import React from 'react';
import { motion } from 'motion/react';

export function MultiRooftopInventoryAnimation() {
  return (
    <div className="w-full bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-3 sm:p-4 select-none overflow-hidden transition-all duration-300 hover:border-slate-300">
      <div className="relative w-full aspect-[2/1] bg-white rounded-xl sm:rounded-2xl border border-slate-200/70 overflow-hidden flex items-center justify-center">
        {/* ── Pure Vector Animated Figure Diagram (2 Warehouses Connected to iPad in Hands) ── */}
        <svg
          viewBox="0 0 680 340"
          className="w-full h-full object-contain"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Subtle Matrix Dot Grid */}
            <pattern id="dotMatrix" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#e2e8f0" />
            </pattern>

            {/* Orange Gradients */}
            <linearGradient id="orgMain" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>

            <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>

            <linearGradient id="wallLight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>

            <linearGradient id="wallShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            <linearGradient id="screenBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Glowing filter */}
            <filter id="glowOrange" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Soft Shadow Filters */}
            <filter id="bldgShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.06" />
            </filter>
            <filter id="ipadShadow" x="-25%" y="-25%" width="150%" height="150%">
              <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.16" />
            </filter>
          </defs>

          {/* Canvas Background with Matrix Grid */}
          <rect width="680" height="340" fill="#ffffff" />
          <rect width="680" height="340" fill="url(#dotMatrix)" opacity="0.75" />

          {/* ══════════════════════════════════════════════════════════════
              ANIMATED SUPPLY CHAIN FLOW CONDUITS (PURE VECTOR MOTION)
             ══════════════════════════════════════════════════════════════ */}
          {/* Left Flow Conduit: Warehouse 1 (145, 105) -> iPad (305, 195) */}
          <path
            d="M 145,105 C 195,150 245,180 305,195"
            fill="none"
            stroke="#ffedd5"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 145,105 C 195,150 245,180 305,195"
            fill="none"
            stroke="#ea580c"
            strokeWidth="2"
            strokeDasharray="6,6"
            strokeLinecap="round"
          />

          {/* Animated Flow Packets (Left -> Center) */}
          <motion.circle
            r="4.5"
            fill="#ea580c"
            filter="url(#glowOrange)"
            animate={{
              cx: [145, 185, 240, 305],
              cy: [105, 138, 172, 195],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1.25, 1, 0.8]
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="3.5"
            fill="#fb923c"
            animate={{
              cx: [145, 185, 240, 305],
              cy: [105, 138, 172, 195],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          />

          {/* Right Flow Conduit: Warehouse 2 (535, 105) -> iPad (375, 195) */}
          <path
            d="M 535,105 C 485,150 435,180 375,195"
            fill="none"
            stroke="#ffedd5"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 535,105 C 485,150 435,180 375,195"
            fill="none"
            stroke="#ea580c"
            strokeWidth="2"
            strokeDasharray="6,6"
            strokeLinecap="round"
          />

          {/* Animated Flow Packets (Right -> Center) */}
          <motion.circle
            r="4.5"
            fill="#ea580c"
            filter="url(#glowOrange)"
            animate={{
              cx: [535, 495, 440, 375],
              cy: [105, 138, 172, 195],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1.25, 1, 0.8]
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="3.5"
            fill="#fb923c"
            animate={{
              cx: [535, 495, 440, 375],
              cy: [105, 138, 172, 195],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          />

          {/* ══════════════════════════════════════════════════════════════
              WAREHOUSE 1 (LEFT ISOMETRIC BUILDING)
             ══════════════════════════════════════════════════════════════ */}
          <g transform="translate(75, 45)" filter="url(#bldgShadow)">
            {/* Ground Base Footprint */}
            <polygon points="10,105 65,75 125,105 70,135" fill="#f1f5f9" />

            {/* Left Wall Facet */}
            <polygon points="15,85 65,60 65,110 15,135" fill="url(#wallLight)" stroke="#cbd5e1" strokeWidth="1" />
            {/* Right Wall Facet */}
            <polygon points="65,60 115,85 115,135 65,110" fill="url(#wallShade)" stroke="#cbd5e1" strokeWidth="1" />
            {/* Orange Front Triangular Gable */}
            <polygon points="15,55 40,40 65,60 15,85" fill="url(#orgMain)" />
            {/* Orange Corrugated Pitch Roof */}
            <polygon points="40,40 90,65 115,85 65,60" fill="url(#roofGrad)" />

            {/* Orange Loading Bay Shutter */}
            <polygon points="30,90 50,80 50,120 30,130" fill="#ea580c" />
            <line x1="30" y1="98" x2="50" y2="88" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
            <line x1="30" y1="106" x2="50" y2="96" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
            <line x1="30" y1="114" x2="50" y2="104" stroke="#ffffff" strokeWidth="1" opacity="0.6" />

            {/* Pallet Cargo Boxes */}
            <g transform="translate(75, 108)">
              <polygon points="0,0 9,-5 18,0 9,5" fill="#fdba74" />
              <polygon points="0,0 9,5 9,13 0,8" fill="#fb923c" />
              <polygon points="9,5 18,0 18,8 9,13" fill="#ea580c" />
            </g>

            {/* Animated Roof Beacon Radar Waves */}
            <g transform="translate(65, 40)">
              <circle cx="0" cy="0" r="4.5" fill="#ea580c" filter="url(#glowOrange)" />
              <motion.circle
                cx="0"
                cy="0"
                r="12"
                fill="none"
                stroke="#ea580c"
                strokeWidth="1.5"
                animate={{ scale: [0.6, 1.8, 0.6], opacity: [0.9, 0, 0.9] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.circle
                cx="0"
                cy="0"
                r="18"
                fill="none"
                stroke="#fb923c"
                strokeWidth="1"
                animate={{ scale: [0.5, 1.6, 0.5], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
              />
            </g>
          </g>

          {/* ══════════════════════════════════════════════════════════════
              WAREHOUSE 2 (RIGHT ISOMETRIC BUILDING)
             ══════════════════════════════════════════════════════════════ */}
          <g transform="translate(465, 45)" filter="url(#bldgShadow)">
            {/* Ground Base Footprint */}
            <polygon points="10,105 65,75 125,105 70,135" fill="#f1f5f9" />

            {/* Left Wall Facet */}
            <polygon points="15,85 65,60 65,110 15,135" fill="url(#wallShade)" stroke="#cbd5e1" strokeWidth="1" />
            {/* Right Wall Facet */}
            <polygon points="65,60 115,85 115,135 65,110" fill="url(#wallLight)" stroke="#cbd5e1" strokeWidth="1" />
            {/* Orange Front Triangular Gable */}
            <polygon points="65,60 90,40 115,85 65,110" fill="url(#orgMain)" />
            {/* Orange Corrugated Pitch Roof */}
            <polygon points="40,65 65,40 115,85 90,110" fill="url(#roofGrad)" />

            {/* Orange Loading Bay Shutter */}
            <polygon points="80,90 100,80 100,120 80,130" fill="#ea580c" />
            <line x1="80" y1="98" x2="100" y2="88" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
            <line x1="80" y1="106" x2="100" y2="96" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
            <line x1="80" y1="114" x2="100" y2="104" stroke="#ffffff" strokeWidth="1" opacity="0.6" />

            {/* Pallet Cargo Boxes */}
            <g transform="translate(35, 108)">
              <polygon points="0,0 9,-5 18,0 9,5" fill="#fdba74" />
              <polygon points="0,0 9,5 9,13 0,8" fill="#fb923c" />
              <polygon points="9,5 18,0 18,8 9,13" fill="#ea580c" />
            </g>

            {/* Animated Roof Beacon Radar Waves */}
            <g transform="translate(65, 40)">
              <circle cx="0" cy="0" r="4.5" fill="#ea580c" filter="url(#glowOrange)" />
              <motion.circle
                cx="0"
                cy="0"
                r="12"
                fill="none"
                stroke="#ea580c"
                strokeWidth="1.5"
                animate={{ scale: [0.6, 1.8, 0.6], opacity: [0.9, 0, 0.9] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              />
              <motion.circle
                cx="0"
                cy="0"
                r="18"
                fill="none"
                stroke="#fb923c"
                strokeWidth="1"
                animate={{ scale: [0.5, 1.6, 0.5], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
              />
            </g>
          </g>

          {/* ══════════════════════════════════════════════════════════════
              CENTER FOREGROUND: PERSON'S HANDS HOLDING IPAD
             ══════════════════════════════════════════════════════════════ */}
          <g transform="translate(230, 135)" filter="url(#ipadShadow)">
            {/* Left Hand Holding Left Edge */}
            <g transform="translate(0, 40)">
              <polygon points="-35,110 5,60 32,74 -8,124" fill="#0f172a" />
              <polygon points="5,60 14,54 22,68 12,74" fill="#ffffff" />
              <path d="M 12,50 Q 26,45 28,64 Q 24,84 10,78 Z" fill="#fed7aa" />
              <ellipse cx="20" cy="62" rx="5" ry="10" fill="#fed7aa" />
            </g>

            {/* Right Hand Holding Right Edge */}
            <g transform="translate(220, 40)">
              <polygon points="35,110 -5,60 -32,74 8,124" fill="#0f172a" />
              <polygon points="-5,60 -14,54 -22,68 -12,74" fill="#ffffff" />
              <path d="M -12,50 Q -26,45 -28,64 Q -24,84 -10,78 Z" fill="#fed7aa" />
              <ellipse cx="-20" cy="62" rx="5" ry="10" fill="#fed7aa" />
            </g>

            {/* ── IPAD HARDWARE BEZEL ── */}
            <rect
              x="20"
              y="10"
              width="180"
              height="130"
              rx="14"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="3.5"
            />
            {/* Camera sensor */}
            <circle cx="110" cy="15" r="2" fill="#475569" />

            {/* ── IPAD SCREEN WITH LIVE PURE GRAPHICAL NETWORK TOPOLOGY ── */}
            <rect
              x="27"
              y="22"
              width="166"
              height="106"
              rx="8"
              fill="url(#screenBg)"
            />

            {/* Status Bar Indicators */}
            <g transform="translate(36, 30)">
              <circle cx="6" cy="4" r="2.5" fill="#ea580c" />
              <circle cx="14" cy="4" r="1.5" fill="#fb923c" />
              <circle cx="20" cy="4" r="1.5" fill="#fdba74" />
              <motion.circle 
                cx="142" 
                cy="4" 
                r="2" 
                fill="#22c55e"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </g>

            {/* Screen Content: Dual Location Hub Graphic Cards */}
            <g transform="translate(36, 42)">
              {/* Hub 1 (Left) */}
              <rect x="0" y="0" width="68" height="38" rx="5" fill="#1e293b" stroke="#ea580c" strokeWidth="1" />
              {/* Animated Donut Gauge Ring */}
              <circle cx="16" cy="19" r="9" fill="none" stroke="#334155" strokeWidth="3" />
              <motion.circle
                cx="16"
                cy="19"
                r="9"
                fill="none"
                stroke="#ea580c"
                strokeWidth="3"
                strokeDasharray="60"
                animate={{ strokeDashoffset: [40, 15, 40] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <rect x="32" y="11" width="26" height="3" rx="1.5" fill="#fed7aa" />
              <rect x="32" y="18" width="18" height="3" rx="1.5" fill="#fb923c" />
              <rect x="32" y="25" width="22" height="3" rx="1.5" fill="#ea580c" />

              {/* Hub 2 (Right) */}
              <rect x="80" y="0" width="68" height="38" rx="5" fill="#1e293b" stroke="#ea580c" strokeWidth="1" />
              {/* Animated Donut Gauge Ring */}
              <circle cx="96" cy="19" r="9" fill="none" stroke="#334155" strokeWidth="3" />
              <motion.circle
                cx="96"
                cy="19"
                r="9"
                fill="none"
                stroke="#fb923c"
                strokeWidth="3"
                strokeDasharray="60"
                animate={{ strokeDashoffset: [45, 20, 45] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <rect x="112" y="11" width="26" height="3" rx="1.5" fill="#fed7aa" />
              <rect x="112" y="18" width="20" height="3" rx="1.5" fill="#fb923c" />
              <rect x="112" y="25" width="24" height="3" rx="1.5" fill="#ea580c" />
            </g>

            {/* Screen Bottom: Live Interactive Wave Signal Equalizer */}
            <g transform="translate(36, 88)">
              <rect x="0" y="0" width="148" height="26" rx="5" fill="#1e293b" />

              {/* Left & Right Hub Node Beacons */}
              <circle cx="12" cy="13" r="3.5" fill="#ea580c" />
              <circle cx="136" cy="13" r="3.5" fill="#ea580c" />

              {/* Dynamic Equalizer Motion Bars */}
              <g transform="translate(26, 13)">
                <motion.rect
                  x="0" y="-6" width="3" height="12" rx="1.5" fill="#fdba74"
                  animate={{ height: [12, 6, 16, 12], y: [-6, -3, -8, -6] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                <motion.rect
                  x="10" y="-10" width="3" height="20" rx="1.5" fill="#fb923c"
                  animate={{ height: [20, 10, 18, 20], y: [-10, -5, -9, -10] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <motion.rect
                  x="20" y="-5" width="3" height="10" rx="1.5" fill="#ea580c"
                  animate={{ height: [10, 18, 8, 10], y: [-5, -9, -4, -5] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                <motion.rect
                  x="30" y="-8" width="3" height="16" rx="1.5" fill="#f97316"
                  animate={{ height: [16, 8, 20, 16], y: [-8, -4, -10, -8] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.rect
                  x="40" y="-11" width="3" height="22" rx="1.5" fill="#ea580c"
                  animate={{ height: [22, 12, 20, 22], y: [-11, -6, -10, -11] }}
                  transition={{ duration: 2.1, repeat: Infinity }}
                />
                <motion.rect
                  x="50" y="-6" width="3" height="12" rx="1.5" fill="#fb923c"
                  animate={{ height: [12, 20, 10, 12], y: [-6, -10, -5, -6] }}
                  transition={{ duration: 1.7, repeat: Infinity }}
                />
                <motion.rect
                  x="60" y="-9" width="3" height="18" rx="1.5" fill="#fdba74"
                  animate={{ height: [18, 10, 14, 18], y: [-9, -5, -7, -9] }}
                  transition={{ duration: 1.9, repeat: Infinity }}
                />
                <motion.rect
                  x="70" y="-5" width="3" height="10" rx="1.5" fill="#f97316"
                  animate={{ height: [10, 16, 6, 10], y: [-5, -8, -3, -5] }}
                  transition={{ duration: 1.3, repeat: Infinity }}
                />
                <motion.rect
                  x="80" y="-10" width="3" height="20" rx="1.5" fill="#ea580c"
                  animate={{ height: [20, 10, 16, 20], y: [-10, -5, -8, -10] }}
                  transition={{ duration: 1.75, repeat: Infinity }}
                />
                <motion.rect
                  x="90" y="-6" width="3" height="12" rx="1.5" fill="#fb923c"
                  animate={{ height: [12, 18, 8, 12], y: [-6, -9, -4, -6] }}
                  transition={{ duration: 1.55, repeat: Infinity }}
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
