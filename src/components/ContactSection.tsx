"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Cpu,
  Layers,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    throughput: "50-250 Tons/mo",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email";
    }
    if (!formData.company.trim()) errs.company = "Company name is required";
    if (!formData.message.trim()) errs.message = "Please describe your facility requirements";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      // Simulate real submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  return (
    <section
      id="contact"
      data-alias="contact-us"
      className="py-24 relative bg-slate-50 dark:bg-[#070B14] transition-colors border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Industrial Inquiries & Audits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Schedule an On-Site Refinery Audit
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Connect with our metallurgical engineering team to evaluate your facility&apos;s feedstock stream, determine line speeds, and model recovered asset values.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & SLA Info Card (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl metallic-card border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Direct Engineering Desk
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Our technical operations team provides rapid turnaround for facility feasibility assessments.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
                {/* Single Business Email Requirement */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Official Inquiry Email
                    </span>
                    <a
                      href="mailto:ebenyi@terrasortai.site"
                      className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      ebenyi@terrasortai.site
                    </a>
                  </div>
                </div>

                {/* Single Phone Requirement */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Operations Support Desk
                    </span>
                    <a
                      href="tel:+2348133332303"
                      className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      +2348133332303
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Response Guarantee
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Standard enterprise inquiries answered within 4 operational hours.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Preparation Tip */}
            <div className="p-5 rounded-xl bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/40 text-xs text-teal-800 dark:text-teal-300 space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                Feedstock Sample Testing Program:
              </span>
              <p className="text-teal-700 dark:text-teal-400/90 leading-relaxed">
                Recycling operators can ship 5kg blind scrap test samples to our laboratory for free multi-spectral XRF assay and yield purity quantification.
              </p>
            </div>
          </div>

          {/* Inquiry Form (7 columns) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl metallic-card border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Audit Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-teal-600 dark:text-teal-400">{formData.name}</strong>. Our senior metallurgical engineer will review your facility parameters for <strong className="text-slate-900 dark:text-white">{formData.company}</strong> and contact you within 4 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        throughput: "50-250 Tons/mo",
                        message: "",
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    Facility Feasibility Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    Complete the form below to receive a custom hardware layout and financial model.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Marcus Reynolds"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-300 dark:border-slate-700 focus:border-teal-500"
                        } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Work Email *
                      </label>
                      {/* Placeholder strictly avoids @ symbol */}
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="facility.operations"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-300 dark:border-slate-700 focus:border-teal-500"
                        } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Company / Facility Name *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Nordic Metals Recovery"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.company
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-300 dark:border-slate-700 focus:border-teal-500"
                        } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500`}
                      />
                      {errors.company && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Monthly Scrap Throughput
                      </label>
                      <select
                        value={formData.throughput}
                        onChange={(e) =>
                          setFormData({ ...formData, throughput: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      >
                        <option value="Under 50 Tons/mo">Under 50 Tons / mo (Pilot candidate)</option>
                        <option value="50-250 Tons/mo">50 - 250 Tons / mo</option>
                        <option value="250-1000 Tons/mo">250 - 1,000 Tons / mo (Commercial plant)</option>
                        <option value="1000+ Tons/mo">1,000+ Tons / mo (Enterprise fleet)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Facility Details & Target Feedstock *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Specify your existing conveyor width, scrap types (e.g., shredded EV black mass or de-soldered PCB motherboards), and target recovery minerals..."
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-300 dark:border-slate-700 focus:border-teal-500"
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Facility Parameters...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Audit Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
