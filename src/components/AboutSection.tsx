"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Globe2,
  Atom,
  Recycle,
  Layers,
  Sparkles,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      data-alias="about-us"
      className="py-24 relative bg-slate-900 text-slate-100 overflow-hidden border-t border-slate-800"
    >
      {/* Background glow element */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
            <Recycle className="w-3.5 h-3.5" />
            <span>Mission & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering the Closed-Loop Mineral Economy
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            TerraSort AI exists to solve the critical mineral bottleneck. By replacing carbon-intensive pyrometallurgical smelting and toxic acid leaching with deterministic edge spectroscopy and pneumatic deflection, we turn discarded electronic scrap and battery black mass into pure, high-grade commodity reserves.
          </p>
        </div>

        {/* 3 Core Impact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl metallic-card border border-slate-700/80 bg-slate-950/70">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 mb-4">
              <Atom className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Clean Physical Separation
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero chemical solvents, zero toxic hydrometallurgical effluents, and zero open-pit excavation. We isolate elemental minerals in dry mechanical phases via sub-millisecond photon resonance and compressed air deflection.
            </p>
          </div>

          <div className="p-6 rounded-2xl metallic-card border border-slate-700/80 bg-slate-950/70">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Domestic Supply Chain Resilience
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Over 80% of critical battery minerals are refined overseas. TerraSort AI enables regional recycling facilities to transform urban scrap into sovereign reserves of battery-grade Lithium, Cobalt, and rare-earth Neodymium.
            </p>
          </div>

          <div className="p-6 rounded-2xl metallic-card border border-slate-700/80 bg-slate-950/70">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Automated Digital Battery Passports
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every deflected particle is cryptographically stamped with elemental purity, timestamped provenance, and lifecycle carbon metrics, enabling turnkey compliance with EU Battery Regulation (EU) 2023/1542.
            </p>
          </div>
        </div>

        {/* Dedicated Single Founder Presentation */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400">
              Executive Leadership
            </span>
          </div>

          <div className="rounded-2xl metallic-card border border-teal-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-[#070B14] p-8 sm:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Founder Photo / Avatar Placeholder */}
              <div className="flex-shrink-0 text-center">
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-teal-400/80 shadow-glow bg-slate-800 flex items-center justify-center">
                  <Image
                    src="/founder.jpg"
                    alt="Donald - Founder & CEO"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-teal-500 text-slate-950 shadow-sm z-10">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider block">
                    Chief Executive Officer
                  </span>
                </div>
              </div>

              {/* Founder Bio */}
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Donald
                  </h3>
                  <p className="text-sm font-mono text-teal-400 mt-0.5">
                    Founder & CEO • TerraSort AI
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Donald is a pioneering deep-tech systems architect specializing in spectroscopic computer vision, edge machine learning, and autonomous industrial robotics. Combining applied metallurgical physics with high-speed sensor fusion and deterministic pneumatic deflection, he founded TerraSort AI to engineer autonomous circular mineral refineries, eliminating toxic chemical smelting and unlocking sovereign, battery-grade commodity reserves from global electronic scrap.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>Applied Metallurgical Physics & Edge AI</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>High-Speed Spectroscopic Vision Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>Society for Mining & Metallurgy (SME) Member</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>Deterministic Pneumatic Mineral Deflection Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
