"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Building2, Users, Award } from "lucide-react"

const stats = [
  { icon: Users, value: 15000, suffix: "+", label: "Students Trained" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Placement Rate" },
  { icon: Building2, value: 500, suffix: "+", label: "Partner Companies" },
  { icon: Award, value: 50, suffix: "+", label: "Industry Awards" },
]

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
  "Adobe",
  "Salesforce",
  "IBM",
  "Intel",
  "Nvidia",
  "Oracle",
]

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: {
  value: number
  suffix: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const incrementTime = (duration * 1000) / end

      const timer = setInterval(() => {
        start += Math.ceil(end / 100)

        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Success() {
  return (
    <section
      id="success"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-cyan-50" />

      {/* Premium Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,116,144,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium mb-4">
            Our Impact
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Student Success & Placements
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our students work at the world&apos;s leading technology companies.
            Your success story could be next.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="text-center p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-cyan-700" />
              </div>

              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-500 bg-clip-text text-transparent">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <p className="text-sm text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <p className="text-center text-slate-500 text-sm mb-8 font-medium uppercase tracking-wider">
            Our Alumni Work At
          </p>

          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

            {/* Marquee */}
            <div className="flex gap-12 animate-marquee">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex-shrink-0 px-8 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-cyan-200 transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-slate-700 whitespace-nowrap hover:text-cyan-700 transition-colors">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}