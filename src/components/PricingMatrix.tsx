"use client";

import { useState } from "react";
import {
  Check,
  Zap,
  TrendingUp,
  Calculator,
  ArrowRight,
  Shield,
  HelpCircle,
  Cpu,
  Layers,
  Leaf,
  Sparkles,
} from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: number | "Custom";
  annualPrice: number | "Custom";
  marketplaceFee: string;
  lineCapacity: string;
  description: string;
  features: string[];
  ctaText: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: "pilot",
    name: "Pilot Facility",
    monthlyPrice: 3500,
    annualPrice: 2975, // 15% discount
    marketplaceFee: "+ 0.5% B2B marketplace fee",
    lineCapacity: "1 High-Speed Sorting Line",
    description: "Ideal for single-line recycling plants validating automated spectroscopic black mass recovery.",
    features: [
      "1 high-speed conveyor sorting line (up to 3.0 m/s)",
      "Standard multi-spectral CV edge inference",
      "Digital battery passport generator (EU compliant)",
      "Standard pneumatic manifold integration (64 nozzles)",
      "Weekly LME commodity yield & purity reports",
      "Email & Slack technical support (8x5)",
    ],
    ctaText: "Start Pilot Deployment",
  },
  {
    id: "industrial",
    name: "Industrial Plant",
    popular: true,
    badge: "Most Deployed",
    monthlyPrice: 9500,
    annualPrice: 8075, // 15% discount
    marketplaceFee: "+ 0.4% B2B marketplace fee",
    lineCapacity: "Up to 3 Dedicated Sorting Lines",
    description: "Comprehensive multi-line deployment for commercial recyclers maximizing mineral yield and spot arbitrage.",
    features: [
      "Up to 3 concurrent high-speed sorting lines",
      "Priority multi-spectral & XRF atomic edge processing",
      "Real-time London Metal Exchange (LME) arbitrage engine",
      "Advanced 128-nozzle high-pressure pneumatic sync",
      "Multi-facility inventory & purity ledger sync",
      "Sub-12ms deterministic latency guarantee",
      "Dedicated metallurgical solutions engineer",
      "99.5% operational uptime SLA",
    ],
    ctaText: "Deploy Industrial Plant",
  },
  {
    id: "enterprise",
    name: "Enterprise Fleet",
    badge: "Global Operators",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    marketplaceFee: "+ 0.25% B2B marketplace fee",
    lineCapacity: "Unlimited Enterprise Lines",
    description: "Tailored industrial edge infrastructure for multi-site recyclers, smelters, and OEM battery manufacturers.",
    features: [
      "Unlimited conveyor lines across global facilities",
      "Custom on-premise edge appliances with FPGA acceleration",
      "Bespoke ERP & scrap trading desk API integrations",
      "Direct OEM battery passport cryptographic minting",
      "On-site calibration & custom spectral wavelength tuning",
      "24/7/365 dedicated mission-critical industrial SLA",
      "Quarterly on-site metallurgical yield optimization audits",
    ],
    ctaText: "Contact Enterprise Sales",
  },
];

export function PricingMatrix() {
  const [isAnnual, setIsAnnual] = useState(true);

  // ROI Calculator State
  const [monthlyThroughput, setMonthlyThroughput] = useState<number>(350); // Metric tons / month
  const [feedstockType, setFeedstockType] = useState<"battery" | "pcb" | "magnets">("battery");

  // Multipliers based on feedstock type
  const feedstockProfiles = {
    battery: {
      label: "EV Battery Black Mass (Li + Co)",
      avgRecoveryValPerTon: 3450, // USD recovered value per ton of black mass
      co2AvoidedPerTon: 4.8, // metric tons CO2 avoided per ton processed
    },
    pcb: {
      label: "Electronic PCB Motherboard Shred (Cu + Au)",
      avgRecoveryValPerTon: 2200,
      co2AvoidedPerTon: 3.2,
    },
    magnets: {
      label: "Rare-Earth Magnet Shards (Nd + Dy)",
      avgRecoveryValPerTon: 5800,
      co2AvoidedPerTon: 6.5,
    },
  };

  const activeProfile = feedstockProfiles[feedstockType];
  const monthlyRecoveredValue = monthlyThroughput * activeProfile.avgRecoveryValPerTon;
  const estimatedOpexMonthly = 9500 + monthlyThroughput * 45; // software + line running cost
  const netMonthlyProfit = monthlyRecoveredValue - estimatedOpexMonthly;
  const initialCapExHardware = 185000; // estimated turnkey sensor bar cost
  const paybackMonths = Math.max(0.8, Number((initialCapExHardware / Math.max(1000, netMonthlyProfit)).toFixed(1)));
  const monthlyCo2Avoided = Math.round(monthlyThroughput * activeProfile.co2AvoidedPerTon);

  return (
    <section id="pricing" className="py-24 relative bg-slate-50 dark:bg-[#070B14] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Industrial Commercial Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Transparent Enterprise Pricing
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Scale seamlessly from single-line validation pilots to global refinery networks. Every tier includes our core spectroscopic classification algorithms and continuous updates.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                !isAnnual
                  ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                isAnnual
                  ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-500/20 text-teal-600 dark:text-teal-400">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* 3-Tier Enterprise Pricing Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isCustom = tier.monthlyPrice === "Custom";
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all ${
                  tier.popular
                    ? "metallic-card border-2 border-teal-500 shadow-glow dark:shadow-glow-lg dark:bg-slate-900/90"
                    : "metallic-card border border-slate-300 dark:border-slate-800/80 hover:border-slate-400 dark:hover:border-slate-700"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-teal-500 text-slate-950 shadow-sm">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {tier.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 min-h-[32px]">
                    {tier.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="mb-4">
                    {isCustom ? (
                      <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                        Custom
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                          ${(price as number).toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          / month
                        </span>
                      </div>
                    )}
                    <div className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold mt-1">
                      {tier.marketplaceFee}
                    </div>
                    {!isCustom && (
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {isAnnual
                          ? `Billed annually ($${((price as number) * 12).toLocaleString()}/yr)`
                          : "Billed monthly"}
                      </div>
                    )}
                  </div>

                  <div className="py-2.5 px-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 mb-6 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-teal-500" />
                    <span>{tier.lineCapacity}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      Included Capabilities:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all ${
                    tier.popular
                      ? "bg-teal-600 hover:bg-teal-500 text-white shadow-sm hover:shadow-glow"
                      : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Interactive ROI & Recovered Mineral Yield Calculator */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-teal-600 dark:text-teal-400">
                <Calculator className="w-4 h-4" />
                <span>Financial Feasibility Model</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Refinery ROI & Mineral Recovery Yield Calculator
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Adjust your monthly feedstock throughput and material stream to project recoverable commodity asset value, arbitrage profits, and capital payback.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Calculator Controls (7 columns) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Feedstock Type Selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                  Target Feedstock Composition:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(["battery", "pcb", "magnets"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFeedstockType(type)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all ${
                        feedstockType === type
                          ? "border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold"
                          : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="truncate font-semibold">{feedstockProfiles[type].label.split("(")[0]}</div>
                      <div className="text-[10px] opacity-75 font-mono">
                        ${feedstockProfiles[type].avgRecoveryValPerTon}/Ton est.
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Throughput Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Monthly Scrap Throughput:
                  </label>
                  <span className="text-lg font-mono font-bold text-teal-600 dark:text-teal-400">
                    {monthlyThroughput} Metric Tons / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={monthlyThroughput}
                  onChange={(e) => setMonthlyThroughput(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  aria-label="Monthly scrap throughput in metric tons"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>50 Tons (Single Line Pilot)</span>
                  <span>1,000 Tons (Mid-scale Plant)</span>
                  <span>2,000 Tons (Enterprise Fleet)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                  Real-Time Arbitrage Formula:
                </span>
                <p>
                  Calculated against current London Metal Exchange (LME) spot settle index with 99.2% guaranteed optical/XRF extraction yield and sub-12ms pneumatic ejection.
                </p>
              </div>
            </div>

            {/* Results Card (5 columns) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-950 border border-teal-500/40 text-white shadow-xl space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-teal-300">
                Projected Monthly Economics:
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    Monthly Recovered Mineral Value
                  </div>
                  <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white tracking-tight">
                    ${monthlyRecoveredValue.toLocaleString()} <span className="text-xs font-normal text-slate-400">USD</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Est. Net Monthly Profit
                    </div>
                    <div className="text-lg font-mono font-bold text-emerald-400">
                      +${netMonthlyProfit.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Payback Period
                    </div>
                    <div className="text-lg font-mono font-bold text-teal-400">
                      {paybackMonths} Months
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    Carbon Offset Avoidance:
                  </span>
                  <span className="font-mono font-bold text-emerald-400">
                    {monthlyCo2Avoided.toLocaleString()} MT CO₂e / mo
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Request Custom Refinery Model</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
