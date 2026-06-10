<<<<<<< HEAD
import { redirect } from 'next/navigation'

export default function LegacyAdminDashboardPage() {
  redirect('/admin/dashboard')
}
=======
"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Layers,
  Briefcase,
  Award,
  Megaphone,
  ShieldCheck,
  LifeBuoy,
  Activity,
  BarChart3,
  Settings,
  Bell,
  Search,
  Home,
  User,
  TrendingUp,
  DollarSign,
  ClipboardCheck,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "1280",
    color: "bg-blue-50",
  },
  {
    title: "Total Teachers",
    value: "35",
    color: "bg-green-50",
  },
  {
    title: "Active Courses",
    value: "18",
    color: "bg-purple-50",
  },
  {
    title: "Active Batches",
    value: "42",
    color: "bg-orange-50",
  },
  {
    title: "Placements",
    value: "210",
    color: "bg-red-50",
  },
  {
    title: "Pending Approvals",
    value: "27",
    color: "bg-pink-50",
  },
];


export default function AdminDashboard() {
  return (
<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">

  <div className="fixed inset-0 overflow-hidden pointer-events-none">

    <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

  </div>

  <div className="relative flex">

    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-white/70 backdrop-blur-xl border-r border-white/50">

      <div className="p-8">

        <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
          InCrafto
        </h1>

        <p className="text-gray-500 mt-2">
          Super Admin Panel
        </p>

      </div>

      <nav className="flex-1 px-5 space-y-2">

        {[
          {
            icon: Home,
            label: "Dashboard",
          },
          {
            icon: Users,
            label: "Students",
          },
          {
            icon: GraduationCap,
            label: "Teachers",
          },
          {
            icon: BookOpen,
            label: "Courses",
          },
          {
            icon: Layers,
            label: "Batches",
          },
          {
            icon: Briefcase,
            label: "Placements",
          },
          {
            icon: Award,
            label: "Certificates",
          },
          {
            icon: ShieldCheck,
            label: "Approvals",
          },
          {
            icon: Activity,
            label: "Analytics",
          },
          {
            icon: LifeBuoy,
            label: "Support",
          },
          {
            icon: Settings,
            label: "Settings",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            whileHover={{
              x: 8,
            }}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
              index === 0
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                : "hover:bg-white"
            }`}
          >
            <item.icon size={20} />

            <span className="font-medium">
              {item.label}
            </span>

          </motion.div>
        ))}

      </nav>

      <div className="p-6">

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-5 text-white">

          <h3 className="font-bold text-lg">
            Institute Growth
          </h3>

          <p className="text-sm text-blue-100 mt-2">
            +24% growth this quarter
          </p>

        </div>

      </div>

    </aside>

    <main className="flex-1 p-8">

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 p-10 text-white mb-8"
      >

        <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-2xl" />

        <div className="relative z-10">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 Super Admin Dashboard
          </span>

          <h1 className="text-6xl font-black mt-6 leading-tight">
            Welcome Back
          </h1>

          <p className="text-xl text-blue-100 mt-4 max-w-3xl">
            Monitor students, teachers, placements,
            institute growth, content approvals and
            operational performance from one place.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-white text-blue-600 px-7 py-4 rounded-2xl font-bold">
              View Reports
            </button>

            <button className="border border-white/30 px-7 py-4 rounded-2xl">
              Manage Institute
            </button>

          </div>

        </div>

      </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 mb-8">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="lg:col-span-8 bg-white/70 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 shadow-xl"
        >

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold">
              Content Approval Center
            </h2>

            <button className="text-blue-600">
              View All
            </button>

          </div>

          <div className="space-y-4">

            {[
              "React Hooks Tutorial",
              "Node.js Complete Guide",
              "Python Lists & Tuples",
              "SQL Joins Explained",
            ].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center p-5 rounded-2xl bg-slate-50"
              >

                <div>
                  <h4 className="font-semibold">
                    {item}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Pending approval
                  </p>
                </div>

                <div className="flex gap-2">

                  <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">
                    Approve
                  </button>

                  <button className="bg-red-100 text-red-700 px-4 py-2 rounded-xl">
                    Reject
                  </button>

                </div>

              </div>
            ))}

          </div>

        </motion.div>

        <div className="lg:col-span-4 space-y-8">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 shadow-xl"
          >

            <h2 className="text-2xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-3">

              {[
                "Add Student",
                "Add Teacher",
                "Add Course",
                "Create Batch",
                "Placements",
                "Reports",
              ].map((item) => (
                <button
                  key={item}
                  className="rounded-2xl p-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg"
                >
                  {item}
                </button>
              ))}

            </div>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 shadow-xl"
          >

            <h2 className="text-2xl font-bold mb-6">
              Support Tickets
            </h2>

            <div className="space-y-4">

              <div className="p-4 rounded-2xl bg-red-50">
                Video Not Loading
              </div>

              <div className="p-4 rounded-2xl bg-orange-50">
                Certificate Download Error
              </div>

              <div className="p-4 rounded-2xl bg-blue-50">
                Teacher Login Problem
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 shadow-xl"
        >

          <h2 className="text-2xl font-bold mb-6">
            Announcement Hub
          </h2>

          <input
            placeholder="Announcement title"
            className="w-full p-4 rounded-2xl border mb-4"
          />

          <textarea
            rows={5}
            placeholder="Write announcement..."
            className="w-full p-4 rounded-2xl border mb-4"
          />

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl">
            Publish Announcement
          </button>

        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 shadow-xl"
        >

          <h2 className="text-2xl font-bold mb-6">
            Activity Timeline
          </h2>

          <div className="space-y-5">

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-2" />
              <p>Teacher uploaded React Hooks Tutorial</p>
            </div>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2" />
              <p>New student registered</p>
            </div>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500 mt-2" />
              <p>Certificate approved</p>
            </div>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-500 mt-2" />
              <p>Placement drive published</p>
            </div>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-pink-500 mt-2" />
              <p>Assignment submitted</p>
            </div>

          </div>

        </motion.div>

      </div>

    </main>

  </div>

</div>
  );
}
>>>>>>> 85fb30b92e4d90b76a1b125c22a6f9a841ef86f4
