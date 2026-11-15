"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  Zap,
  Sliders,
  Eye,
  CheckCircle,
  Wind,
  FileCheck2,
  TrendingUp,
  X,
  Cpu,
  Layers,
  Sparkles,
  Info,
  Maximize2,
} from "lucide-react";

interface ScrapComponent {
  id: string;
  name: string;
  type: "ev_black_mass" | "pcb_motherboard" | "neodymium_magnet" | "copper_busbar";
  primaryMineral: string;
  secondaryMineral: string;
  confidence: number;
  purity: number;
  weightGrams: number;
  estValueUSD: number;
  xrfSignature: string;
  deflectionNozzle: number;
  passportId: string;
}

const SCRAP_CATALOG: ScrapComponent[] = [
  {
    id: "SC-491",
    name: "EV Battery Black Mass Slurry Flake",
    type: "ev_black_mass",
    primaryMineral: "Lithium (Li 99.4%)",
    secondaryMineral: "Cobalt (Co 98.9%)",
    confidence: 99.6,
    purity: 99.4,
    weightGrams: 420,
    estValueUSD: 14.85,
    xrfSignature: "670.8nm / 6.93keV peak",
    deflectionNozzle: 3,
    passportId: "EUBAT-2026-9041-A",
  },
  {
    id: "SC-812",
    name: "Server Blade High-Density PCB Fragment",
    type: "pcb_motherboard",
    primaryMineral: "Electrolytic Copper (Cu 99.8%)",
    secondaryMineral: "Gold / Palladium Traces",
    confidence: 98.8,
    purity: 99.8,
    weightGrams: 310,
    estValueUSD: 8.60,
    xrfSignature: "8.04keV K-Alpha peak",
    deflectionNozzle: 1,
    passportId: "EPCB-2026-4412-C",
  },
  {
    id: "SC-305",
    name: "Sintered NdFeB Wind Turbine Shard",
    type: "neodymium_magnet",
    primaryMineral: "Neodymium (Nd 99.1%)",
    secondaryMineral: "Dysprosium (Dy 0.8%)",
    confidence: 99.2,
    purity: 99.1,
    weightGrams: 580,
    estValueUSD: 39.75,
    xrfSignature: "5.23keV L-Alpha peak",
    deflectionNozzle: 4,
    passportId: "EUREE-2026-1188-N",
  },
  {
    id: "SC-620",
    name: "Telecom Power Distribution Busbar",
    type: "copper_busbar",
    primaryMineral: "Pure Conductor Copper (Cu 99.9%)",
    secondaryMineral: "Silver Solder Plating",
    confidence: 99.7,
    purity: 99.9,
    weightGrams: 850,
    estValueUSD: 18.20,
    xrfSignature: "8.04keV / 8.90keV duplex",
    deflectionNozzle: 2,
    passportId: "EUMET-2026-7833-K",
  },
];

const PHASES = [
  {
    number: 1,
    title: "High-Speed Conveyor Ingestion",
    subtitle: "Mechanical Feed & Belt Stabilization",
    description: "Industrial feeder feeds unsorted e-waste shreds and EV battery black mass onto the 3.0 m/s conveyor bed. Centering air-curtains align particles to deterministic millimetric coordinates.",
    telemetry: {
      "Conveyor Velocity": "3.00 m/s",
      "Feed Rate": "14.2 Tons / Hr",
      "Belt Tension": "4.8 kN",
      "Vibration RMS": "0.12 mm/s",
    },
  },
  {
    number: 2,
    title: "Multi-Spectral & XRF Spectroscopic Scanning",
    subtitle: "Hyperspectral AI & Atomic Photon Counting",
    description: "Dual hyperspectral NIR cameras and micro-focus XRF tubes irradiate feed particles. Real-time vision models generate bounding boxes and atomic purity scores in under 12 milliseconds.",
    telemetry: {
      "Scan Frequency": "1,200 Hz",
      "XRF Tube Voltage": "50 kV",
      "Bounding BBoxes/s": "184 Items",
      "Mean Confidence": "99.4%",
    },
  },
  {
    number: 3,
    title: "Pneumatic Air-Jet Sorting",
    subtitle: "Deterministic High-Pressure Deflection",
    description: "A 128-nozzle pneumatic manifold fires micro-pulses of 8.5-bar compressed air. Target minerals are deflected with sub-millimeter precision into dedicated mineral collection bins.",
    telemetry: {
      "Nozzle Air Pressure": "8.5 Bar",
      "Valve Reaction Time": "0.8 ms",
      "Deflection Accuracy": "99.2%",
      "Active Air Bins": "4 Channels",
    },
  },
  {
    number: 4,
    title: "Real-Time Arbitrage & ESG Provenance",
    subtitle: "Live LME Settlement & Battery Passports",
    description: "Recovered mineral mass is weighed and valued against live London Metal Exchange spot indexes. Every kilogram automatically mints an EU Battery Passport digital compliance record.",
    telemetry: {
      "LME Spot Sync": "Live (Sub-second)",
      "Arbitrage Margin": "+21.4%",
      "Battery Passport": "EU 2023/1542 Ready",
      "Carbon Offset": "12.8 kg CO₂e / kg",
    },
  },
];

export function HowItWorksSimulator() {
  const [currentPhase, setCurrentPhase] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [selectedScrap, setSelectedScrap] = useState<ScrapComponent | null>(null);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [conveyorProgress, setConveyorProgress] = useState<number>(25);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Advance simulation loop
  const advanceStep = useCallback(() => {
    setCurrentPhase((prev) => {
      const next = prev >= 4 ? 1 : prev + 1;
      setConveyorProgress((next / 4) * 100);
      return next;
    });
    setActiveItemIndex((prev) => (prev + 1) % SCRAP_CATALOG.length);
  }, []);

  const stepBack = () => {
    setCurrentPhase((prev) => {
      const next = prev <= 1 ? 4 : prev - 1;
      setConveyorProgress((next / 4) * 100);
      return next;
    });
    setActiveItemIndex((prev) => (prev - 1 + SCRAP_CATALOG.length) % SCRAP_CATALOG.length);
  };

  useEffect(() => {
    if (isPlaying && !selectedScrap) {
      const interval = 3500 / playbackSpeed;
      timerRef.current = setInterval(() => {
        advanceStep();
      }, interval);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, advanceStep, selectedScrap]);

  // Dismiss scrap modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedScrap(null);
      }
    };
    if (selectedScrap) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedScrap]);

  const activePhaseData = PHASES[currentPhase - 1];
  const activeScrapItem = SCRAP_CATALOG[activeItemIndex];

  return (
    <section
      id="how-it-works"
      className="py-24 relative bg-slate-900 text-slate-100 overflow-hidden border-t border-b border-slate-800"
    >
      {/* Laser line gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-teal-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial Pipeline Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            4-Phase Autonomous Mineral Refinery Pipeline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Witness how high-speed edge computer vision and XRF atomic deflection sort industrial e-waste and battery black mass at 3.0 m/s with sub-millisecond precision.
          </p>
        </div>

        {/* Phase Navigator Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {PHASES.map((phase) => {
            const isActive = currentPhase === phase.number;
            return (
              <button
                key={phase.number}
                type="button"
                onClick={() => {
                  setCurrentPhase(phase.number);
                  setConveyorProgress((phase.number / 4) * 100);
                }}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  isActive
                    ? "bg-teal-950/70 border-teal-400/80 shadow-glow ring-1 ring-teal-400/50"
                    : "bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      isActive
                        ? "bg-teal-400 text-slate-950"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    Phase 0{phase.number}
                  </span>
                  {isActive && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                    </span>
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                  {phase.title}
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                  {phase.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Simulator Cockpit */}
        <div className="rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden mb-8">
          {/* Top Telemetry Header */}
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                  REFINERY LINE #03 — ACTIVE SIMULATION
                </span>
                <p className="text-[11px] font-mono text-slate-400">
                  Current Stage: {activePhaseData.title}
                </p>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={stepBack}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Step backward"
                aria-label="Step backward"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
                aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={advanceStep}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Step forward"
                aria-label="Step forward"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <div className="h-5 w-px bg-slate-700 mx-1" />

              {/* Speed Buttons */}
              <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-700">
                {[
                  { label: "0.5x", val: 0.5 },
                  { label: "1x", val: 1.0 },
                  { label: "2x", val: 2.0 },
                ].map(({ label, val }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setPlaybackSpeed(val)}
                    className={`px-2 py-1 text-[11px] font-mono rounded ${
                      playbackSpeed === val
                        ? "bg-teal-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Conveyor Canvas Display */}
          <div className="relative h-72 sm:h-80 bg-gradient-to-b from-[#090D17] to-[#0E1628] p-6 flex flex-col justify-between overflow-hidden">
            {/* Precision Grid Overlay */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(20, 184, 166, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 184, 166, 0.2) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Industrial Conveyor Belt Graphic */}
            <div className="relative z-10 w-full mt-auto mb-auto">
              {/* Conveyor Bed Structure */}
              <div className="relative h-16 w-full rounded-lg bg-slate-900 border-t-2 border-b-2 border-teal-500/40 shadow-inner flex items-center overflow-hidden">
                {/* Rolling Tread Stripes Animation */}
                <div
                  className={`absolute inset-0 opacity-25 ${
                    isPlaying ? "animate-pulse" : ""
                  }`}
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #14B8A6 0, #14B8A6 10px, transparent 10px, transparent 30px)",
                  }}
                />

                {/* Moving / Inspected Scrap Particle */}
                <div
                  className="absolute transition-all duration-700 ease-out flex items-center cursor-pointer group"
                  style={{
                    left: `${Math.max(10, Math.min(85, conveyorProgress))}%`,
                    transform: "translateX(-50%)",
                  }}
                  onClick={() => setSelectedScrap(activeScrapItem)}
                >
                  <div className="relative">
                    {/* Bounding Box when in Phase 2 or 3 */}
                    {(currentPhase === 2 || currentPhase === 3) && (
                      <div className="absolute -inset-3 border-2 border-teal-400 border-dashed rounded-lg animate-pulse">
                        <span className="absolute -top-5 left-0 text-[10px] font-mono px-1 rounded bg-teal-500 text-slate-950 font-bold whitespace-nowrap">
                          {activeScrapItem.primaryMineral} [{activeScrapItem.confidence}%]
                        </span>
                      </div>
                    )}

                    {/* Deflection Air Puff when in Phase 3 */}
                    {currentPhase === 3 && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-cyan-300 flex flex-col items-center animate-bounce">
                        <Wind className="w-5 h-5 text-teal-300" />
                        <span className="text-[9px] font-mono font-bold bg-slate-900/90 px-1 border border-teal-400 rounded">
                          JET #0{activeScrapItem.deflectionNozzle} (8.5 BAR)
                        </span>
                      </div>
                    )}

                    {/* Scrap Object Representation */}
                    <div className="w-14 h-14 rounded-xl border border-teal-400/80 bg-gradient-to-br from-teal-500/30 to-slate-800 p-2 shadow-glow flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] font-mono font-bold text-teal-300">
                        {activeScrapItem.id}
                      </span>
                      <span className="text-[8px] text-slate-300 leading-tight truncate max-w-[48px]">
                        {activeScrapItem.name}
                      </span>
                    </div>

                    <span className="text-[9px] font-mono text-teal-300 group-hover:underline block text-center mt-1">
                      Click to inspect
                    </span>
                  </div>
                </div>

                {/* Laser Spectrometer Scanner in Phase 2 */}
                {currentPhase === 2 && (
                  <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-cyan-400 shadow-[0_0_15px_#22d3ee]">
                    <div className="absolute top-1 left-2 text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-0.5 border border-cyan-500 rounded whitespace-nowrap">
                      XRF Laser Beam: 50 kV Irradiating
                    </div>
                  </div>
                )}

                {/* Pneumatic Recovery Bins below belt in Phase 3 */}
                <div className="absolute right-4 bottom-1 flex gap-2">
                  <div className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-700 text-[9px] font-mono text-cyan-300">
                    BIN 1: Li
                  </div>
                  <div className="px-2 py-0.5 rounded bg-blue-950 border border-blue-700 text-[9px] font-mono text-blue-300">
                    BIN 2: Co
                  </div>
                  <div className="px-2 py-0.5 rounded bg-purple-950 border border-purple-700 text-[9px] font-mono text-purple-300">
                    BIN 3: Nd
                  </div>
                  <div className="px-2 py-0.5 rounded bg-amber-950 border border-amber-700 text-[9px] font-mono text-amber-300">
                    BIN 4: Cu
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Real-Time HUD Strip */}
            <div className="relative z-10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-3">
              <div className="flex items-center gap-4">
                <span>CONVEYOR: <strong className="text-white">3.0 m/s</strong></span>
                <span>SPECTROMETER: <strong className="text-teal-400">1,200 Hz</strong></span>
                <span>PNEUMATICS: <strong className="text-white">8.5 Bar</strong></span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScrap(activeScrapItem)}
                className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-semibold"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Active Scrap Component ({activeScrapItem.id})</span>
              </button>
            </div>
          </div>

          {/* Phase Narrative & Telemetry Panel */}
          <div className="p-6 bg-slate-900 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  PHASE 0{activePhaseData.number}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {activePhaseData.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activePhaseData.description}
              </p>
            </div>

            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2">
                Phase Telemetry Matrix:
              </div>
              {Object.entries(activePhaseData.telemetry).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{key}:</span>
                  <span className="font-mono font-bold text-teal-400">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Component Catalog Grid with Quick Inspection */}
        <div className="mt-8 border border-slate-800 rounded-xl p-6 bg-slate-900/40">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono">
                Sample Feedstock Scrap Stream Queue
              </h3>
              <p className="text-xs text-slate-500">
                Click any component below to inspect elemental breakdown, XRF readouts, and digital battery passport metadata.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SCRAP_CATALOG.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedScrap(item)}
                className="p-3.5 rounded-lg border border-slate-800 bg-slate-900 hover:border-teal-500/60 hover:bg-slate-800/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-teal-400">
                    {item.id}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 group-hover:bg-teal-500/20 group-hover:text-teal-300">
                    {item.purity}% Purity
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-slate-200 line-clamp-1 mb-1">
                  {item.name}
                </h4>
                <div className="text-[11px] text-slate-400">
                  Target: <span className="text-slate-200">{item.primaryMineral}</span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Val: ${item.estValueUSD.toFixed(2)}</span>
                  <span className="text-teal-400 group-hover:underline">Inspect →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Scrap Component Inspection Modal */}
      {selectedScrap && (
        <div
          onClick={() => setSelectedScrap(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl metallic-card p-6 border border-teal-500/50 bg-slate-900 shadow-2xl text-white"
          >
            <button
              onClick={() => setSelectedScrap(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700"
              aria-label="Close component modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-mono font-bold">
                {selectedScrap.id.substring(3)}
              </div>
              <div>
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider block">
                  Scrap Component Inspection Readout
                </span>
                <h3 className="text-lg font-bold">{selectedScrap.name}</h3>
              </div>
            </div>

            <div className="space-y-3.5 my-5 text-xs">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 font-mono uppercase text-[10px]">
                    Spectroscopic XRF Signature
                  </span>
                  <span className="font-mono text-teal-300 font-bold">
                    {selectedScrap.xrfSignature}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Identified with {selectedScrap.confidence}% neural network confidence at 3 m/s conveyor line speed.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">
                    Primary Recovery
                  </span>
                  <span className="font-bold text-white text-xs mt-1 block">
                    {selectedScrap.primaryMineral}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">
                    Secondary Fraction
                  </span>
                  <span className="font-bold text-slate-300 text-xs mt-1 block">
                    {selectedScrap.secondaryMineral}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">
                    Deflection Nozzle
                  </span>
                  <span className="font-mono text-cyan-300 font-bold text-xs mt-1 block">
                    Jet Manifold #{selectedScrap.deflectionNozzle}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">
                    Estimated Spot Arbitrage
                  </span>
                  <span className="font-mono text-emerald-400 font-bold text-xs mt-1 block">
                    ${selectedScrap.estValueUSD.toFixed(2)} USD
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Digital Battery / Material Passport
                </span>
                <span className="font-mono text-teal-300 text-xs mt-1 block">
                  {selectedScrap.passportId}
                </span>
                <p className="text-[10px] text-slate-400 mt-1">
                  Cryptographically verified origin record compliant with EU battery provenance mandate.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedScrap(null)}
                className="px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
