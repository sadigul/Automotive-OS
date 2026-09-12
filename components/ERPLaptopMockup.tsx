'use client';

import React, { useRef, useEffect, useState } from 'react';
import { EnterpriseERPSnapshot } from './EnterpriseERPSnapshot';

interface ERPLaptopMockupProps {
  children?: React.ReactNode;
}

export function ERPLaptopMockup({ children }: ERPLaptopMockupProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.835);

  useEffect(() => {
    if (!screenRef.current) return;
    const updateScale = () => {
      if (screenRef.current) {
        const screenWidth = screenRef.current.clientWidth;
        // Base viewport designed for 16:10 Liquid Retina Display (1240px x 800px)
        const baseWidth = 1240;
        setScale(screenWidth / baseWidth);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(screenRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── EXPANDED CINEMATIC LAPTOP MOCKUP VIEW (Full Section Width) ── */}
      <div
        className="relative w-full max-w-7xl mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#070714] shadow-2xl border border-slate-800/80 select-none group"
      >
        {/* ── High-Res Pristine MacBook Pro Studio Base Image ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/laptop-mockup.png"
          alt="DMSPilot ERP running on MacBook Pro"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
          loading="eager"
        />

        {/* ── Screen Display Area (100% Edge-to-Edge Fit Inside MacBook Bezel) ── */}
        <div 
          ref={screenRef}
          className="absolute z-10 overflow-hidden bg-[#0b0f19] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{
            left: '23.02%',
            top: '15.56%',
            width: '53.96%',
            height: '61.85%',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            borderBottomLeftRadius: '2px',
            borderBottomRightRadius: '2px',
          }}
        >
          {/* Edge-to-Edge 100% Scaled Fullscreen Application */}
          <div 
            className="origin-top-left"
            style={{
              width: '1240px',
              height: '800px',
              transform: `scale(${scale})`,
            }}
          >
            {children || <EnterpriseERPSnapshot />}
          </div>

          {/* Apple MacBook Camera Notch */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 z-30 bg-[#0a0a0c] rounded-b-md flex items-center justify-center shadow-md pointer-events-none"
            style={{
              width: '10.5%',
              height: '2.5%',
              minWidth: '70px',
              minHeight: '13px',
            }}
          >
            {/* Camera Lens */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#181824] border border-slate-700/50 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-cyan-900/80" />
            </div>
          </div>

          {/* Apple Liquid Retina Display Inner Bezel Depth Shadow */}
          <div 
            className="absolute inset-0 pointer-events-none rounded-[inherit]"
            style={{
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.45), inset 0 0 1px rgba(0,0,0,0.6), inset 0 0 8px rgba(0,0,0,0.15)',
            }}
          />

          {/* Physical Screen Glass Glare Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
