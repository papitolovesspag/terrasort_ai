import { BrandLogo } from "@/components/ui/BrandLogo";
import { Mail, Phone, Shield, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#060911] text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <a href="#hero" className="inline-block">
              <BrandLogo size={32} />
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Industrial cleantech platform leveraging multi-spectral computer vision and atomic spectroscopy to transform e-waste and battery black mass into high-purity domestic mineral assets.
            </p>
            <div className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold">
              Closed-Loop Mineral Intelligence
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Platform Overview
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Industrial Pipeline Simulator
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Enterprise Pricing & ROI
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  About Us & Mission
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Contact & Facility Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Critical Minerals Classified */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Target Commodities
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Battery-Grade Lithium (Li 99.4%)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Refined Cobalt (Co 98.9%)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Neodymium Rare-Earth (Nd 99.1%)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Electrolytic Copper (Cu 99.8%)</span>
              </li>
            </ul>
          </div>

          {/* Operational Contact (Strictly Single Email & Phone) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Operations
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-500" />
                <a
                  href="mailto:donald@terrasortai.site"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  donald@terrasortai.site
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-500" />
                <a
                  href="tel:+2348152724145"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  +234 815 272 4145
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Regulatory Strip */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} TerraSort AI Inc. All rights reserved. Industrial Mineral Refinery Intelligence.
          </div>
          <div className="flex items-center gap-6">
            <span>EU Battery Regulation (EU) 2023/1542</span>
            <span>ISO 14044 Certified</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
