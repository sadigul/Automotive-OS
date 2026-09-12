'use client';

import React from 'react';

export function HeroBackgroundFigures() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      
      {/* 1. Subtle High-Tech Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 
            'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)',
        }}
      />

      {/* 2. Ambient Soft Glowing Atmospheric Blobs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-indigo-400/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-gradient-to-bl from-blue-400/15 via-cyan-400/10 to-transparent rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite_1s]" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-emerald-400/15 to-teal-400/10 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite_2s]" />

      {/* 3. FIGURE 1: 3D Isometric Wireframe Cube & Telemetry Vectors (Top-Right) */}
      <div className="absolute top-12 sm:top-16 right-4 sm:right-12 md:right-24 lg:right-32 w-48 sm:w-64 h-48 sm:h-64 opacity-25 sm:opacity-40 animate-[float_14s_ease-in-out_infinite]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-indigo-600 animate-[spin_60s_linear_infinite]" fill="none">
          {/* Outer Isometric Hexagon Frame */}
          <polygon 
            points="100,20 170,60 170,140 100,180 30,140 30,60" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeDasharray="6 4"
          />
          {/* Inner 3D Cube Axes */}
          <line x1="100" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="170" y2="140" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="30" y2="140" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Secondary Nested Wireframe */}
          <polygon 
            points="100,50 145,75 145,125 100,150 55,125 55,75" 
            stroke="#8B5CF6" 
            strokeWidth="1" 
            opacity="0.8"
          />
          
          {/* Glowing Vertex Nodes */}
          <circle cx="100" cy="20" r="3.5" fill="#6366F1" className="animate-ping origin-center" style={{ animationDuration: '3s' }} />
          <circle cx="170" cy="60" r="3" fill="#8B5CF6" />
          <circle cx="170" cy="140" r="3" fill="#6366F1" />
          <circle cx="100" cy="180" r="3.5" fill="#3B82F6" />
          <circle cx="30" cy="140" r="3" fill="#6366F1" />
          <circle cx="30" cy="60" r="3" fill="#8B5CF6" />
          <circle cx="100" cy="100" r="4.5" fill="#6366F1" />
        </svg>
      </div>

      {/* 4. FIGURE 2: Concentric Radar Scanning Orbit & Telemetry Rings (Top-Left) */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 md:left-20 lg:left-28 w-44 sm:w-60 h-44 sm:h-60 opacity-20 sm:opacity-35 animate-[floatReverse_16s_ease-in-out_infinite]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-blue-600" fill="none">
          {/* Static Reference Rings */}
          <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" className="animate-[spin_40s_linear_infinite]" />
          <circle cx="100" cy="100" r="35" stroke="#38BDF8" strokeWidth="1.5" opacity="0.8" />
          <circle cx="100" cy="100" r="8" fill="#2563EB" opacity="0.9" />

          {/* Crosshairs & Scanning Angles */}
          <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          
          {/* Orbiting Telemetry Dot */}
          <g className="animate-[spin_12s_linear_infinite] origin-center">
            <circle cx="100" cy="15" r="4" fill="#0EA5E9" />
            <circle cx="100" cy="15" r="8" stroke="#0EA5E9" strokeWidth="1" opacity="0.5" />
          </g>

          <g className="animate-[spin_20s_linear_infinite_reverse] origin-center">
            <circle cx="160" cy="100" r="3" fill="#6366F1" />
          </g>
        </svg>
      </div>

      {/* 5. FIGURE 3: Connected Automotive Hexagonal Node Matrix (Mid-Left) */}
      <div className="absolute top-[48%] -left-8 sm:left-6 md:left-14 w-40 sm:w-52 h-40 sm:h-52 opacity-20 sm:opacity-30 animate-[float_18s_ease-in-out_infinite_2s]">
        <svg viewBox="0 0 160 160" className="w-full h-full text-emerald-600" fill="none">
          {/* Connected Hex Node Paths */}
          <path 
            d="M40,30 L80,10 L120,30 L120,70 L80,90 L40,70 Z" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            strokeDasharray="5 3"
          />
          <path 
            d="M80,90 L120,110 L120,150 L80,170 L40,150 L40,110 Z" 
            stroke="#10B981" 
            strokeWidth="1.2" 
            opacity="0.6"
          />
          <line x1="80" y1="90" x2="80" y2="130" stroke="currentColor" strokeWidth="1" />
          <line x1="120" y1="70" x2="150" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

          {/* Glowing Pulse Nodes */}
          <circle cx="80" cy="10" r="3.5" fill="#059669" />
          <circle cx="120" cy="30" r="3" fill="#10B981" />
          <circle cx="80" cy="90" r="4" fill="#34D399" className="animate-pulse" />
          <circle cx="40" cy="70" r="3" fill="#059669" />
          <circle cx="120" cy="110" r="3.5" fill="#10B981" />
        </svg>
      </div>

      {/* 6. FIGURE 4: Geometric Icosahedron / Faceted Wireframe Star (Mid-Right) */}
      <div className="absolute top-[52%] -right-6 sm:right-8 md:right-16 w-44 sm:w-56 h-44 sm:h-56 opacity-20 sm:opacity-35 animate-[floatReverse_20s_ease-in-out_infinite_1s]">
        <svg viewBox="0 0 180 180" className="w-full h-full text-purple-600 animate-[spin_70s_linear_infinite_reverse]" fill="none">
          {/* Faceted Triangular Mesh */}
          <polygon points="90,15 155,55 155,125 90,165 25,125 25,55" stroke="currentColor" strokeWidth="1" />
          <polygon points="90,45 130,70 130,110 90,135 50,110 50,70" stroke="#A855F7" strokeWidth="1.2" strokeDasharray="4 3" />
          
          <line x1="90" y1="15" x2="90" y2="45" stroke="currentColor" strokeWidth="1" />
          <line x1="155" y1="55" x2="130" y2="70" stroke="currentColor" strokeWidth="1" />
          <line x1="155" y1="125" x2="130" y2="110" stroke="currentColor" strokeWidth="1" />
          <line x1="90" y1="165" x2="90" y2="135" stroke="currentColor" strokeWidth="1" />
          <line x1="25" y1="125" x2="50" y2="110" stroke="currentColor" strokeWidth="1" />
          <line x1="25" y1="55" x2="50" y2="70" stroke="currentColor" strokeWidth="1" />

          {/* Star Diagonal Connectors */}
          <line x1="90" y1="45" x2="90" y2="135" stroke="#C084FC" strokeWidth="0.8" opacity="0.7" />
          <line x1="50" y1="70" x2="130" y2="110" stroke="#C084FC" strokeWidth="0.8" opacity="0.7" />
          <line x1="50" y1="110" x2="130" y2="70" stroke="#C084FC" strokeWidth="0.8" opacity="0.7" />

          {/* Central Core */}
          <circle cx="90" cy="90" r="4" fill="#9333EA" />
          <circle cx="90" cy="90" r="9" stroke="#A855F7" strokeWidth="1" opacity="0.6" className="animate-ping" style={{ animationDuration: '4s' }} />
        </svg>
      </div>

      {/* 7. FIGURE 5: Dynamic Automotive Pulse Waveform & Diagnostics Stream (Bottom Center) */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl h-28 opacity-15 sm:opacity-25">
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none" className="w-full h-full text-indigo-500" fill="none">
          {/* Oscillating Telemetry Wave */}
          <path 
            d="M0,60 L200,60 L250,60 L270,30 L290,90 L310,20 L330,85 L350,55 L370,65 L390,60 L600,60 L620,40 L640,80 L660,60 L800,60 L820,35 L840,75 L860,60 L1000,60" 
            stroke="url(#pulseGradient)" 
            strokeWidth="2" 
            strokeDasharray="6 4"
          />
          {/* Smooth Background Wave */}
          <path 
            d="M0,70 Q 250,40 500,70 T 1000,70" 
            stroke="#6366F1" 
            strokeWidth="1" 
            opacity="0.4"
          />
          <defs>
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>
  );
}
