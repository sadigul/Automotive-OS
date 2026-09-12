'use client';

import React from 'react';

interface ClientLogo {
  name: string;
  colorHex: string;
  renderLogo: () => React.ReactNode;
}

const clientLogos: ClientLogo[] = [
  /* 1. GOLD TOUCH DEALER SUPPLY (Official Vector SVG from goldtouchdealersupply.com) */
  {
    name: 'Gold Touch Dealer Supply',
    colorHex: '#D97706',
    renderLogo: () => (
      <div className="flex items-center">
        <svg className="h-12 sm:h-14 md:h-16 w-auto max-w-[200px] sm:max-w-[230px]" viewBox="0 0 150 75.5" fill="none">
          <path d="M140.37,32.14l-.16.4h.02c.25-.31.41-.4.66-.41l1.85-.05c.69-.02.87.29.52,1.01l-.95,1.97c-.22.46-.3.69-.33.87l-1.68.05c.14-.18.29-.42.51-.88l1.02-2.11c.1-.21.07-.28-.12-.27l-1.28.04c-.2,0-.3.08-.39.29l-1.02,2.11c-.22.46-.3.69-.34.87l-1.68.05c.14-.18.29-.41.51-.88l1.02-2.13c.22-.46.3-.69.33-.87l1.51-.04Z" fill="currentColor"/>
          <path d="M145.93,32.59c-.2,0-.3.08-.39.29l-1.01,2.1c-.1.21-.07.28.12.27l2.03-.06c.13,0,.3-.02.5-.06l-.44.66-3.13.09c-.69.02-.87-.29-.52-1.01l.87-1.8c.35-.72.83-1.05,1.52-1.07l3.13-.09-.2.66c-.17-.03-.32-.04-.45-.04l-2.03.06Z" fill="currentColor"/>
          <path d="M147.85,35.77l.52-1.09,1.63-.04-.52,1.09-1.63.04Z" fill="currentColor"/>
          <path d="M134.36,29.49l-.59.9c.35-.13.75-.16,1.02-.16l.86-.02c-.05.24-.14.46-.25.69l-1.83,3.8c-.1.19-.2.37-.35.56l-.87.02c-.27,0-.66,0-.89-.11l-.43.89,5.41-.06.59-.9c-.29.04-.7.07-.97.08l-.86.02c.05-.24.14-.46.25-.69l1.83-3.8c.1-.19.2-.37.35-.56l.87-.02c.27,0,.66,0,.89.11l.28-.89-5.32.15Z" fill="currentColor"/>
          <path d="M32.15,37.86l1.2.6,2.32-7.01-27.49.24-5.15,7.6,3.29-1.14c1.16-.4,2.67-.61,4.51-.63l2.61-.02L3.93,56.31c-.62,1.23-1.24,2.3-2.28,3.51l-1.65,1.93,13.26-.12.15-.97c.18-1.21.7-2.34,1.22-3.38l10.03-19.87,3.8-.03c2.21-.02,3.23.25,3.69.49Z" fill="#F59E0B" className="transition-colors group-hover:fill-[#D97706]"/>
          <path d="M57.63,40.34c-.72-1.16-2.14-1.71-4.34-1.69l-14.98.13c-4.12.04-7.13,2.05-9.2,6.15l-4.78,9.47c-.77,1.52-1.67,3.74-.63,5.41.46.74,1.2,1.23,2.26,1.48.59.14,1.29.21,2.08.2l14.98-.13c4.12-.04,7.13-2.05,9.2-6.15l4.78-9.47c.77-1.52,1.67-3.74.63-5.41ZM47.23,44.21l-5.46,10.82c-.43.85-.63.85-1.1.85l-6.56.06,5.46-10.82c.43-.85.63-.85,1.1-.85l6.56-.06Z" fill="#F59E0B" className="transition-colors group-hover:fill-[#D97706]"/>
          <path d="M89.84,38.33l-11.27.1-.2.9c-.15.71-.48,1.79-1.76,4.32l-5.61,11.12c-.43.85-.63.85-1.1.85l-6.28.05,8.68-17.2-11.27.1-.2.9c-.15.71-.49,1.79-1.77,4.32l-5.22,10.34c-.77,1.52-1.67,3.74-.63,5.41.46.74,1.2,1.23,2.26,1.48.59.14,1.29.21,2.08.2l9.83-.09c.38,0,.73-.04,1.05-.11l-.04.1,10.67-.09.2-.9c.15-.72.49-1.79,1.77-4.32l8.83-17.5Z" fill="#F59E0B" className="transition-colors group-hover:fill-[#D97706]"/>
          <path d="M105.58,55.07c-.96.17-1.84.26-2.47.27l-10.28.09,5.46-10.82c.43-.85.62-.85,1.1-.85l10.8-.09c.63,0,1.38.07,2.17.22l1,.19,1.91-5.96-18.23.16c-4.12.04-7.13,2.05-9.2,6.15l-4.78,9.47c-.77,1.52-1.67,3.74-.64,5.41.46.74,1.2,1.23,2.26,1.48.59.14,1.29.21,2.08.2l17.23-.15,4.29-6.24-2.7.47Z" fill="#F59E0B" className="transition-colors group-hover:fill-[#D97706]"/>
          <path d="M142.18,39.6c-.72-1.16-2.14-1.71-4.34-1.69l-9.74.08c-.18,0-.34.01-.51.03l3.74-7.41-11.27.1-.2.9c-.15.71-.48,1.79-1.76,4.32l-9.38,18.59c-1.29,2.55-2.04,3.63-2.66,4.41l-1.5,1.89,12.25-.11.2-.9c.15-.71.48-1.79,1.76-4.32l5.61-11.12c.43-.85.63-.85,1.1-.85l6.28-.05-5.5,10.9c-1.29,2.55-2.04,3.63-2.66,4.41l-1.5,1.89,12.25-.11.2-.9c.15-.71.48-1.79,1.76-4.32l5.22-10.34c.77-1.52,1.67-3.74.63-5.41Z" fill="#F59E0B" className="transition-colors group-hover:fill-[#D97706]"/>
          <path d="M34.58,31.46l-1.39,4.21c-1.09-.55-2.93-.62-4.22-.61l-4.5.04-10.34,20.5c-.64,1.26-1.14,2.43-1.33,3.73l-9.74.08c1.12-1.31,1.8-2.48,2.44-3.74l10.34-20.5-4.5.04c-1.29.01-3.21.11-4.88.69l2.86-4.22,25.27-.22Z" fill="currentColor"/>
          <path d="M28.57,59.19c-3.68.03-4.57-1.65-2.66-5.43l4.78-9.47c1.91-3.78,4.51-5.49,8.18-5.52l14.98-.13c3.68-.03,4.57,1.65,2.66,5.43l-4.78,9.47c-1.91,3.78-4.51,5.49-8.18,5.52l-14.98.13ZM41.22,55.88c1.06,0,1.58-.4,2.12-1.49l5.57-11.03c.55-1.09.42-1.47-.63-1.46l-7.08.06c-1.06,0-1.58.4-2.12,1.49l-5.57,11.03c-.55,1.09-.42,1.47.63,1.46l7.08-.06Z" fill="currentColor"/>
          <path d="M70.77,58.82l.87-2.08h-.09c-1.36,1.61-2.2,2.1-3.53,2.11l-9.83.09c-3.68.03-4.57-1.65-2.66-5.42l5.22-10.34c1.23-2.43,1.66-3.65,1.86-4.6l8.45-.07-7.93,15.72c-.55,1.09-.42,1.47.63,1.46l6.8-.06c1.06,0,1.58-.4,2.12-1.49l5.61-11.12c1.23-2.43,1.66-3.65,1.86-4.6l8.46-.07-7.98,15.81c-1.23,2.43-1.66,3.65-1.86,4.6l-8,.07Z" fill="currentColor"/>
          <path d="M100.08,41.43c-1.06,0-1.58.4-2.12,1.49l-5.57,11.03c-.55,1.09-.42,1.47.63,1.46l10.8-.09c.69,0,1.61-.1,2.66-.28l-2.4,3.48-16.63.14c-3.68.03-4.57-1.65-2.66-5.43l4.78-9.47c1.91-3.78,4.51-5.49,8.18-5.52l16.63-.14-1.11,3.47c-.88-.17-1.71-.24-2.4-.24l-10.8.09Z" fill="currentColor"/>
          <path d="M125.37,39.54h.09c.72-.7,1.59-1.53,3.06-1.54l9.74-.08c3.68-.03,4.57,1.65,2.66,5.42l-5.22,10.34c-1.23,2.43-1.66,3.65-1.86,4.6l-8.91.08c.76-.96,1.56-2.18,2.78-4.61l5.61-11.12c.55-1.09.42-1.47-.63-1.46l-6.8.06c-1.06,0-1.58.4-2.12,1.49l-5.61,11.12c-1.23,2.43-1.66,3.65-1.86,4.6l-8.91.08c.76-.96,1.56-2.18,2.78-4.61l9.38-18.59c1.23-2.43,1.66-3.65,1.86-4.6l8.45-.07-4.49,8.9Z" fill="currentColor"/>
          <path d="M18.07,65.15h2.84c1.57,0,2.42.21,3.1.8.79.68,1.21,1.75,1.21,3.13,0,1.75-.65,3.49-1.72,4.67-1.06,1.15-2.12,1.48-4.61,1.48h-2.96l2.15-10.09ZM19.28,73.97c1.71,0,2.5-.27,3.21-1.13.79-.95,1.27-2.33,1.27-3.63,0-.88-.23-1.62-.65-2.1-.42-.51-1.01-.7-2.19-.7h-1.68l-1.6,7.56h1.65Z" fill="currentColor"/>
          <path d="M34.19,66.4h-4.89l-.62,2.9h4.84l-.26,1.26h-4.84l-.73,3.42h5.41l-.26,1.26h-6.87l2.15-10.09h6.32l-.27,1.26Z" fill="currentColor"/>
          <path d="M36.87,72.41l-1.48,2.83h-1.57l5.52-10.09h1.66l1.59,10.09h-1.39l-.41-2.83h-3.92ZM39.95,66.5l-2.46,4.73h3.13l-.67-4.73Z" fill="currentColor"/>
          <path d="M45.31,73.98h5.22l-.26,1.26h-6.67l2.15-10.09h1.44l-1.88,8.83Z" fill="currentColor"/>
          <path d="M59.95,66.4h-4.89l-.62,2.9h4.84l-.26,1.26h-4.84l-.73,3.42h5.41l-.26,1.26h-6.87l2.15-10.09h6.32l-.27,1.26Z" fill="currentColor"/>
          <path d="M61.69,75.24h-1.44l2.15-10.09h3.61c1.16,0,1.84.17,2.36.56.54.42.86,1.18.86,2.06,0,1.45-.71,2.3-2.25,2.66.95.21,1.24.62,1.24,1.75,0,.3,0,.35-.02.5l-.06.83c-.02.21-.02.23-.02.64,0,.51.06.71.32,1.09h-1.68c-.09-.29-.11-.45-.11-.74,0-.21.01-.59.05-.98l.06-.7c.01-.17.01-.33.01-.48,0-1.03-.5-1.42-1.8-1.42h-2.37l-.92,4.33ZM64.95,69.66c1.09,0,1.71-.12,2.16-.41.44-.27.7-.8.7-1.39,0-1-.54-1.45-1.75-1.45h-2.5l-.7,3.25h2.09Z" fill="currentColor"/>
          <path d="M81.51,67.84c-.08-1.09-.85-1.69-2.15-1.69s-2.12.62-2.12,1.51c0,.62.33,1,1.25,1.41l1.75.79c1.5.67,2.03,1.32,2.03,2.51,0,.8-.32,1.56-.91,2.12-.71.7-1.65,1.01-2.96,1.01-1.63,0-2.84-.54-3.43-1.53-.27-.45-.36-.91-.38-1.81h1.38v.23c0,1.16.92,1.86,2.46,1.86,1.39,0,2.36-.7,2.36-1.69,0-.65-.36-1.04-1.42-1.51l-1.51-.67c-1.47-.65-2.12-1.44-2.12-2.54,0-1.71,1.5-2.93,3.58-2.93,2.21,0,3.55,1.1,3.6,2.95h-1.42Z" fill="currentColor"/>
          <path d="M93.13,65.15l-1.32,6.25c-.36,1.71-.64,2.3-1.33,2.98-.74.73-1.77,1.12-2.9,1.12-2.04,0-3.45-1.13-3.45-2.77,0-.29.11-1.09.18-1.5l1.3-6.08h1.44l-1.27,6c-.17.73-.21,1.04-.21,1.33,0,1.04.85,1.75,2.12,1.75.82,0,1.53-.32,1.97-.88.36-.48.47-.79.76-2.13l1.29-6.08h1.44Z" fill="currentColor"/>
          <path d="M94.81,75.24h-1.44l2.15-10.09h3.27c1,0,1.69.26,2.25.8.53.51.8,1.21.8,2.03,0,.88-.32,1.71-.89,2.28-.62.64-1.48.95-2.62.95h-2.66l-.86,4.02ZM98.01,69.96c.95,0,1.38-.12,1.8-.53.35-.35.54-.83.54-1.38s-.18-.97-.51-1.26c-.32-.29-.68-.39-1.38-.39h-1.78l-.76,3.55h2.09Z" fill="currentColor"/>
          <path d="M103.26,75.24h-1.44l2.15-10.09h3.27c1,0,1.69.26,2.25.8.53.51.8,1.21.8,2.03,0,.88-.32,1.71-.89,2.28-.62.64-1.48.95-2.62.95h-2.66l-.86,4.02ZM106.47,69.96c.95,0,1.38-.12,1.8-.53.35-.35.54-.83.54-1.38s-.18-.97-.51-1.26c-.32-.29-.68-.39-1.38-.39h-1.78l-.76,3.55h2.09Z" fill="currentColor"/>
          <path d="M111.99,73.98h5.22l-.26,1.26h-6.67l2.15-10.09h1.44l-1.88,8.83Z" fill="currentColor"/>
          <path d="M120.85,75.24h-1.44l.83-3.89-2.27-6.2h1.63l1.57,4.93,3.3-4.93h1.77l-4.61,6.4-.79,3.69Z" fill="currentColor"/>
        </svg>
      </div>
    ),
  },

  /* 2. CARMAX (Official Blue Bold Wordmark with Gold Underline) */
  {
    name: 'CarMax',
    colorHex: '#0033A0',
    renderLogo: () => (
      <div className="flex flex-col items-start leading-none py-1">
        <span className="font-black text-2xl sm:text-3xl md:text-[32px] tracking-tight text-slate-900 group-hover:text-[#0033A0] transition-colors">
          CARMAX
        </span>
        <div className="w-full h-1 bg-[#FFD100] rounded-full mt-1" />
      </div>
    ),
  },

  /* 3. LITHIA MOTORS (Official Diamond Crest & Wordmark) */
  {
    name: 'Lithia Motors',
    colorHex: '#003B71',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg className="w-9 h-9 sm:w-11 sm:h-11 text-[#003B71]" viewBox="0 0 28 28" fill="currentColor">
          <polygon points="14,2 26,14 14,26 2,14" opacity="0.9" />
          <polygon points="14,7 21,14 14,21 7,14" fill="#FFFFFF" />
          <circle cx="14" cy="14" r="3.5" fill="#003B71" />
        </svg>
        <span className="font-extrabold text-xl sm:text-2xl md:text-[26px] tracking-wider text-slate-900 group-hover:text-[#003B71] transition-colors whitespace-nowrap">
          LITHIA MOTORS
        </span>
      </div>
    ),
  },

  /* 4. PENSKE AUTOMOTIVE (Official Racing Stripes & Logotype) */
  {
    name: 'Penske Automotive',
    colorHex: '#E31837',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <div className="w-10 h-2.5 bg-[#E31837] rounded-sm mb-1" />
          <div className="w-10 h-2 bg-[#0C2340] rounded-sm" />
        </div>
        <span className="font-black italic text-2xl sm:text-3xl md:text-[32px] tracking-tight text-slate-900 group-hover:text-[#0C2340] transition-colors">
          PENSKE
        </span>
      </div>
    ),
  },

  /* 5. VALVOLINE (Official V Chevron & Typography) */
  {
    name: 'Valvoline',
    colorHex: '#003A70',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 32 32" fill="none">
          <path d="M4 6L16 26L28 6H21L16 17L11 6H4Z" fill="#003A70" />
          <path d="M16 17L20 8H26L16 26V17Z" fill="#E4002B" />
        </svg>
        <span className="font-black text-2xl sm:text-3xl md:text-[30px] tracking-tight text-slate-900 group-hover:text-[#003A70] transition-colors">
          Valvoline<span className="text-[#E4002B]">™</span>
        </span>
      </div>
    ),
  },

  /* 6. AUTOZONE (Official SpeedPass Logotype) */
  {
    name: 'AutoZone',
    colorHex: '#D52B1E',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="px-3.5 py-1 rounded bg-[#D52B1E] flex items-center justify-center shadow-sm">
          <span className="text-[#FFC72C] font-black italic text-lg sm:text-xl tracking-tighter">AZ</span>
        </div>
        <span className="font-black italic text-2xl sm:text-3xl md:text-[30px] tracking-tight text-slate-900 group-hover:text-[#D52B1E] transition-colors">
          AutoZone
        </span>
      </div>
    ),
  },

  /* 7. HENDRICK AUTOMOTIVE (Official Winged H Emblem) */
  {
    name: 'Hendrick Automotive',
    colorHex: '#CC0000',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#CC0000] flex items-center justify-center text-white font-black text-lg tracking-tight shadow-sm">
          <span>H</span>
        </div>
        <span className="font-black text-xl sm:text-2xl md:text-[25px] tracking-tight text-slate-900 group-hover:text-[#CC0000] transition-colors whitespace-nowrap">
          HENDRICK AUTO
        </span>
      </div>
    ),
  },

  /* 8. SONIC AUTOMOTIVE (Official Concentric Emblem & Wordmark) */
  {
    name: 'Sonic Automotive',
    colorHex: '#0077C8',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#0077C8]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
        <span className="font-black text-2xl sm:text-3xl md:text-[30px] tracking-tight text-slate-900 group-hover:text-[#0077C8] transition-colors">
          sonic<span className="font-bold text-slate-400 group-hover:text-[#0077C8]/70 text-lg sm:text-xl ml-1">auto</span>
        </span>
      </div>
    ),
  },

  /* 9. GROUP 1 AUTOMOTIVE (Official G1 Green & Navy Badge) */
  {
    name: 'Group 1 Automotive',
    colorHex: '#002D62',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#002D62] flex items-center justify-center text-white font-black text-base shadow-sm">
          <span className="text-[#00A859] mr-0.5 font-bold text-lg">G</span>
          <span className="text-lg">1</span>
        </div>
        <span className="font-black text-xl sm:text-2xl md:text-[25px] tracking-tight text-slate-900 group-hover:text-[#002D62] transition-colors whitespace-nowrap">
          GROUP 1 AUTO
        </span>
      </div>
    ),
  },

  /* 10. MIDAS (Official Golden Wordmark Block) */
  {
    name: 'Midas',
    colorHex: '#FFA300',
    renderLogo: () => (
      <div className="px-5 sm:px-6 py-2 rounded-xl bg-[#FFA300] text-black font-black text-xl sm:text-2xl md:text-[26px] tracking-wider shadow-sm">
        MIDAS
      </div>
    ),
  },

  /* 11. FIRESTONE (Official Red Shield & Signature Script) */
  {
    name: 'Firestone',
    colorHex: '#D50000',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg className="w-9 h-9 sm:w-11 sm:h-11 text-[#D50000]" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 2L2 8V18C2 24 14 27 14 27C14 27 26 24 26 18V8L14 2Z" fill="#D50000" />
          <text x="14" y="19" fill="#FFFFFF" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">F</text>
        </svg>
        <span className="font-serif italic font-black text-2xl sm:text-3xl md:text-[32px] text-slate-900 group-hover:text-[#D50000] transition-colors">
          Firestone
        </span>
      </div>
    ),
  },

  /* 12. O'REILLY AUTO PARTS (Official Shamrock & Typography) */
  {
    name: "O'Reilly Auto Parts",
    colorHex: '#007A3D',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#007A3D] flex items-center justify-center text-white font-black text-xl shadow-sm">
          <span>☘</span>
        </div>
        <span className="font-black italic text-2xl sm:text-3xl md:text-[28px] tracking-tight text-slate-900 group-hover:text-[#007A3D] transition-colors whitespace-nowrap">
          O&apos;Reilly
        </span>
      </div>
    ),
  },

  /* 13. PEP BOYS (Official Red & Yellow Brand Badge) */
  {
    name: 'Pep Boys',
    colorHex: '#D0021B',
    renderLogo: () => (
      <div className="px-5 sm:px-6 py-2 rounded-xl bg-[#D0021B] text-[#FFC20E] font-black text-lg sm:text-xl md:text-[22px] uppercase tracking-wider shadow-sm border border-[#FFC20E]/40">
        PEP BOYS
      </div>
    ),
  },

  /* 14. ADVANCE AUTO PARTS (Official Chevron & Wordmark) */
  {
    name: 'Advance Auto Parts',
    colorHex: '#D0202F',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#D0202F] flex items-center justify-center text-[#FFCC00] font-black text-lg shadow-sm">
          <span>▲</span>
        </div>
        <span className="font-black text-xl sm:text-2xl md:text-[26px] text-slate-900 group-hover:text-[#D0202F] transition-colors whitespace-nowrap">
          Advance Auto
        </span>
      </div>
    ),
  },

  /* 15. CARVANA (Official Coin Roundel & Bold Typography) */
  {
    name: 'Carvana',
    colorHex: '#00A3E0',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#00A3E0] flex items-center justify-center text-white font-bold text-base shadow-sm">
          <span>◎</span>
        </div>
        <span className="font-black text-2xl sm:text-3xl md:text-[30px] tracking-wider text-slate-900 group-hover:text-[#00A3E0] transition-colors">
          CARVANA
        </span>
      </div>
    ),
  },
];

export function ClientLogosMarquee() {
  // Double the logos for seamless continuous right-to-left marquee
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full mt-14 sm:mt-18 lg:mt-22 overflow-hidden select-none">
      
      {/* Section Header Label */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
          Developed Operating Systems & Supply Infrastructure For
        </p>
      </div>

      {/* Marquee Outer Container with Edge Fades */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left Gradient Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right Gradient Edge Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Marquee Track (Moving Smoothly Right to Left - Borderless & Large Logos) */}
        <div className="flex gap-12 sm:gap-16 md:gap-20 w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] will-change-transform items-center">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group relative flex items-center justify-center py-2 transition-all duration-300 cursor-pointer shrink-0"
            >
              {/* Pure Large Logo Area: Borderless, grayscale/monochrome by default, full authentic brand colors on hover */}
              <div className="shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                {client.renderLogo()}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
