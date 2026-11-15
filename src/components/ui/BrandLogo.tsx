import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function BrandLogo({ className = "", size = 36, showText = true }: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 font-sans ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logo-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
          <linearGradient id="logo-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
          <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hexagonal Armor Frame */}
        <polygon
          points="32,4 56,18 56,46 32,60 8,46 8,18"
          stroke="url(#logo-metal)"
          strokeWidth="2.5"
          fill="#0F172A"
        />

        {/* Optical Sensor Target Grid */}
        <polygon
          points="32,12 49,22 49,42 32,52 15,42 15,22"
          stroke="rgba(20, 184, 166, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          fill="none"
        />

        {/* High-Purity Core Crystal */}
        <polygon
          points="32,18 44,25 44,39 32,46 20,39 20,25"
          fill="url(#logo-teal)"
          filter="url(#logo-glow)"
        />

        {/* Spectroscopic Alignment Guides */}
        <line x1="32" y1="4" x2="32" y2="18" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="46" x2="20" y2="39" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" />
        <line x1="56" y1="46" x2="44" y2="39" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" />

        {/* Atomic Center Node */}
        <circle cx="32" cy="32" r="3" fill="#FFFFFF" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              TerraSort
            </span>
            <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider uppercase rounded bg-teal-500/10 dark:bg-teal-400/15 text-teal-600 dark:text-teal-400 border border-teal-500/30">
              AI
            </span>
          </div>
          <span className="text-[9px] font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400">
            Refinery Intelligence
          </span>
        </div>
      )}
    </div>
  );
}
