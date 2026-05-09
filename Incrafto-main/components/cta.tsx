"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-cyan-50" />

      {/* Premium Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,116,144,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* CTA Card */}
          <div className="relative rounded-[32px] overflow-hidden bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl">
            {/* Content */}
            <div className="relative p-12 md:p-16 text-center">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-8"
              >
                <Sparkles className="w-4 h-4 text-cyan-700" />
                <span className="text-sm font-medium text-cyan-700">
                  Start Your Journey Today
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance"
              >
                Start Building the Career You Deserve
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
              >
                Join 15,000+ ambitious students who have transformed their
                careers with Incrafto. Your success story begins here.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-700 to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-xl px-8 py-6 text-base font-medium group"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border border-slate-200 text-slate-700 hover:border-cyan-200 hover:text-cyan-700 rounded-xl px-8 py-6 text-base font-medium transition-all"
                >
                  Book Free Consultation
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No credit card required
                </span>

                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free career counseling
                </span>

                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  100% placement support
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}