"use client";

import { useState, useEffect } from "react";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  Gauge,
  CheckCircle2,
  Atom,
  Clock,
  DollarSign,
  ShieldCheck,
  X,
} from "lucide-react";

interface MineralData {
  id: string;
  symbol: string;
  name: string;
  atomicNumber: number;
  purity: number;
  color: string;
  borderColor: string;
  bgLight: string;
  feedstock: string;
  lmeBenchmark: string;
  xrfEmission: string;
  annualRecoveryEstimate: string;
  description: string;
  industrialUse: string;
}

const MINERALS: MineralData[] = [
  {
    id: "lithium",
    symbol: "Li",
    name: "Battery-Grade Lithium",
    atomicNumber: 3,
    purity: 99.4,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    bgLight: "bg-cyan-500/10",
    feedstock: "EV Battery Black Mass & Cathode Scraps",
    lmeBenchmark: "$13,450 / Metric Ton (LME Spot)",
    xrfEmission: "670.8 nm (LIBS / High-Res XRF)",
    annualRecoveryEstimate: "1,420 Tons / Annum",
    description: "Extracted via multi-frequency optical spectroscopic resonance deflection from shredded cathode black mass.",
    industrialUse: "Direct precursor for NMC 811 & LFP energy storage cells.",
  },
  {
    id: "cobalt",
    symbol: "Co",
    name: "Refined Cobalt",
    atomicNumber: 27,
    purity: 98.9,
    color: "text-blue-400",
    borderColor: "border-blue-500/40",
    bgLight: "bg-blue-500/10",
    feedstock: "Lithium-Ion Powertrain Black Mass & Aerospace Slag",
    lmeBenchmark: "$24,200 / Metric Ton (Fastmarkets / LME)",
    xrfEmission: "6.93 keV K-Alpha (Continuous XRF)",
    annualRecoveryEstimate: "890 Tons / Annum",
    description: "Instantaneous pneumatic sorting from heavy metallic fractions with zero toxic hydrometallurgical leaching.",
    industrialUse: "High-density aerospace superalloys & synthetic turbine blades.",
  },
  {
    id: "neodymium",
    symbol: "Nd",
    name: "Neodymium Rare-Earth",
    atomicNumber: 60,
    purity: 99.1,
    color: "text-purple-400",
    borderColor: "border-purple-500/40",
    bgLight: "bg-purple-500/10",
    feedstock: "Wind Turbine Generators & EV Drive Permanent Magnets",
    lmeBenchmark: "$68,500 / Metric Ton (Rare Earth Index)",
    xrfEmission: "5.23 keV L-Alpha (Hyperspectral NIR)",
    annualRecoveryEstimate: "410 Tons / Annum",
    description: "Magnetic-signature assisted computer vision isolating sintered NdFeB fragments at 3 m/s line speed.",
    industrialUse: "High-coercivity permanent magnet assemblies for next-gen electric drivetrains.",
  },
  {
    id: "copper",
    symbol: "Cu",
    name: "Electrolytic Copper",
    atomicNumber: 29,
    purity: 99.8,
    color: "text-amber-400",
    borderColor: "border-amber-500/40",
    bgLight: "bg-amber-500/10",
    feedstock: "De-soldered Multi-Layer PCB Motherboards & Busbars",
    lmeBenchmark: "$9,820 / Metric Ton (LME Official Cash)",
    xrfEmission: "8.04 keV K-Alpha (High-Flux Radiometric)",
    annualRecoveryEstimate: "3,850 Tons / Annum",
    description: "Sub-millisecond air-knife ejection separating high-purity conductor tracks from FR-4 fiberglass substrates.",
    industrialUse: "Direct re-smelting for zero-carbon clean electrical grid infrastructure.",
  },
];

export function Hero() {
  const [activeMineral, setActiveMineral] = useState<MineralData>(MINERALS[0]);
  const [modalMineral, setModalMineral] = useState<MineralData | null>(null);

  // Dismiss mineral modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalMineral(null);
      }
    };
    if (modalMineral) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalMineral]);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-industrial-grid"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Facility Ticker Bar */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-950/40 dark:bg-teal-950/30 backdrop-blur-md text-xs font-mono text-teal-300 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="font-semibold text-white">REFINERY STREAM ACTIVE:</span>
            <span className="text-teal-300/90 hidden sm:inline">3 m/s Dual-Line Edge Ingestion</span>
            <span className="text-slate-400">|</span>
            <span className="text-teal-200">XRF Calibration: 100% Locked</span>
          </div>
        </div>

        {/* Hero Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Critical Mineral Recovery & E-Waste Arbitrage</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
            Transform Industrial Scrap Into{" "}
            <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              High-Precision Mineral Refineries
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            TerraSort AI deploys edge multi-spectral computer vision and atomic XRF spectroscopy directly onto high-speed conveyor lines. Deflect 99%+ pure Lithium, Cobalt, Neodymium, and Copper from urban electronic waste and battery black mass in real time.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-base transition-all shadow-glow hover:shadow-glow-lg group"
            >
              <span>Schedule Facility Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-teal-500/60 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-base transition-all"
            >
              <Cpu className="w-4 h-4 text-teal-400" />
              <span>Explore Refinery Pipeline</span>
            </a>
          </div>
        </div>

        {/* Live Commodity Recovery Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-xl metallic-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Purity Yield
              </span>
              <Gauge className="w-4 h-4 text-teal-500" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              99.2%
            </div>
            <div className="mt-2 flex items-center text-xs text-teal-600 dark:text-teal-400">
              <TrendingUp className="w-3.5 h-3.5 mr-1" />
              <span>+4.8% over pyrometallurgy</span>
            </div>
          </div>

          <div className="p-5 rounded-xl metallic-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Conveyor Line Speed
              </span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              3.0 m/s
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              High-throughput industrial belt
            </div>
          </div>

          <div className="p-5 rounded-xl metallic-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Edge Inference Latency
              </span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              12 ms
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Deterministic pneumatic sync
            </div>
          </div>

          <div className="p-5 rounded-xl metallic-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Recovered Asset Value
              </span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              $14.8M
            </div>
            <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
              Audited LME arbitrage to date
            </div>
          </div>
        </div>

        {/* Interactive Mineral Purity Indicators & Elemental Selector */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-teal-600 dark:text-teal-400">
                <Atom className="w-4 h-4" />
                <span>Critical Mineral Classification Suite</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Real-Time Elemental Purity & Spot Arbitrage Benchmarks
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Click any element card below to explore its spectroscopy signature, source feedstock, and current LME valuation.
            </p>
          </div>

          {/* Mineral Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {MINERALS.map((min) => {
              const isSelected = activeMineral.id === min.id;
              return (
                <button
                  key={min.id}
                  onClick={() => setActiveMineral(min)}
                  className={`p-4 rounded-xl text-left border transition-all relative overflow-hidden ${
                    isSelected
                      ? `border-teal-500 bg-teal-500/10 shadow-sm ring-1 ring-teal-500/40`
                      : `border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700`
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-2xl font-black text-slate-900 dark:text-white">
                      {min.symbol}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      Z={min.atomicNumber}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {min.name}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Purity</span>
                    <span className="font-mono font-bold text-teal-600 dark:text-teal-400">
                      {min.purity}%
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Mineral Detail Showcase Card */}
          <div className="rounded-xl border border-teal-500/30 bg-gradient-to-r from-teal-950/20 via-slate-900/40 to-slate-950/30 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-mono font-black text-teal-400">
                    {activeMineral.symbol}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {activeMineral.name}
                    </h3>
                    <p className="text-xs text-teal-300/80 font-mono">
                      Atomic No. {activeMineral.atomicNumber} | Spectroscopic Purity: {activeMineral.purity}%
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeMineral.description}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    Industrial Application:
                  </span>
                  <span className="text-xs text-slate-200 font-medium">
                    {activeMineral.industrialUse}
                  </span>
                </div>
              </div>

              <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-700/60 md:pl-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Feedstock Stream:
                  </span>
                  <span className="text-sm font-medium text-white flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-teal-400" />
                    {activeMineral.feedstock}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    LME Benchmark Valuation:
                  </span>
                  <span className="text-sm font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {activeMineral.lmeBenchmark}
                  </span>
                </div>
              </div>

              <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-700/60 md:pl-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Spectroscopy Sensor Band:
                  </span>
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-1 rounded inline-block">
                    {activeMineral.xrfEmission}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Annual Recovery Estimate:
                  </span>
                  <span className="text-sm font-bold text-white">
                    {activeMineral.annualRecoveryEstimate}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setModalMineral(activeMineral)}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/40 hover:bg-teal-500/30 transition-colors"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Inspect Full Spectrometry Readout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for In-depth Spectrometry Readout */}
      {modalMineral && (
        <div
          onClick={() => setModalMineral(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-2xl metallic-card p-6 border border-teal-500/40 bg-slate-900 shadow-2xl text-white"
          >
            <button
              onClick={() => setModalMineral(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center font-mono text-2xl font-bold text-teal-400">
                {modalMineral.symbol}
              </div>
              <div>
                <h3 className="text-xl font-bold">{modalMineral.name}</h3>
                <p className="text-xs font-mono text-teal-400">
                  Atomic Number {modalMineral.atomicNumber} • ISO 14044 Certified Refinement
                </p>
              </div>
            </div>

            <div className="space-y-4 my-6 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 space-y-1">
                <span className="font-mono text-slate-400 uppercase text-[10px] block">
                  XRF / LIBS Laser Resonance Signature
                </span>
                <p className="font-mono text-teal-300 text-sm">{modalMineral.xrfEmission}</p>
                <p className="text-[11px] text-slate-400">
                  Sub-millisecond peak integration using deterministic FPGA photon counters.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Yield Purity</span>
                  <span className="text-xl font-bold text-teal-400 font-mono">{modalMineral.purity}%</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Market Pricing</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">{modalMineral.lmeBenchmark}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Digital Battery Passport Compliance</span>
                <p className="text-xs text-slate-200 mt-1">
                  EU Battery Regulation (EU) 2023/1542 compliant trace chain with cryptographic ESG hashing.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setModalMineral(null)}
                className="px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors"
              >
                Close Readout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
