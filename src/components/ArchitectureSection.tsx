"use client";

import {
  Cpu,
  Layers,
  Network,
  ShieldCheck,
  Server,
  Zap,
  Activity,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ArchitectureSection() {
  const architectureLayers = [
    {
      title: "Layer 1: Industrial Edge Sensor Array",
      icon: <Activity className="w-5 h-5 text-teal-400" />,
      tag: "Deterministic Hardware Layer",
      description:
        "Ruggedized IP67 optical bar positioned directly above the conveyor bed. Combines 1,200 Hz multi-spectral near-infrared (NIR) line-scan cameras and dual micro-focus XRF spectroscopic tubes with collimated beam shielding.",
      points: [
        "1,200 Hz continuous line-scan capture",
        "Dual-frequency 50 kV atomic XRF irradiation",
        "Sub-millimeter spatial coordinate alignment",
      ],
    },
    {
      title: "Layer 2: Real-Time Edge Inference Engine",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      tag: "Sub-12ms Neural Processing",
      description:
        "Dedicated on-premise industrial edge compute node running real-time Linux with FPGA photon counting acceleration. Classifies mineral composition and computes deflection vectors in under 12 milliseconds.",
      points: [
        "Deterministic real-time Linux kernel (PREEMPT_RT)",
        "FPGA-accelerated spectral photon peak integration",
        "Sub-12ms inference-to-valve trigger deadline",
      ],
    },
    {
      title: "Layer 3: High-Pressure Pneumatic Actuation",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      tag: "Sub-Millimeter Physical Deflection",
      description:
        "128-channel fast-acting solenoid pneumatic manifold operating at 8.5 bar compressed air. Delivers targeted 0.8ms micro-pulses that deflect classified mineral particles into dedicated physical collection chutes.",
      points: [
        "128 individually addressable pneumatic air nozzles",
        "0.8 ms ultra-fast solenoid response time",
        "Multi-bin separation (Li, Co, Nd, Cu, inert)",
      ],
    },
    {
      title: "Layer 4: Cloud-Neutral Analytics & Provenance",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      tag: "Standard Open Architecture",
      description:
        "Cloud-agnostic control plane deployable across any private datacenter or major infrastructure provider. Aggregates multi-facility metallurgical yields, syncs live LME commodity arbitrage, and mints compliant digital battery passports.",
      points: [
        "Standard containerized microservices (OCI compliant)",
        "Zero proprietary vendor lock-in or cloud dependencies",
        "Automated EU Battery Regulation (EU) 2023/1542 passport hashes",
      ],
    },
  ];

  return (
    <section className="py-24 relative bg-slate-900 text-slate-100 overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>Industrial Edge Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Cloud-Neutral Industrial Edge Architecture
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Engineered for hostile recycling environments with zero vendor lock-in. Low-latency edge inference couples directly with open-standard cloud telemetry for global fleet management.
          </p>
        </div>

        {/* 4 Architecture Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {architectureLayers.map((layer, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl metallic-card border border-slate-700/80 bg-slate-950/70 hover:border-slate-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    {layer.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {layer.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {layer.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {layer.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                {layer.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Security & Compliance Banner */}
        <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/30 via-slate-900 to-slate-950 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-teal-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Industrial Standards</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Deterministic OT/IT Isolation & Open Industrial Fieldbus
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              Compatible with OPC UA, Modbus TCP, EtherCAT, and Profinet. Edge nodes function autonomously during network disconnects with zero interruption to sorting velocity or pneumatic actuation.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            <span>Review Architecture Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
