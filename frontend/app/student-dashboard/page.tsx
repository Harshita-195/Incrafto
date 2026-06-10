"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Bell,
  Calendar,
  Home,
  User,
  Settings,
  Trophy,
  ChevronRight,
} from "lucide-react";

export default function StudentDashboard() { 
return (
<div className="min-h-screen bg-gradient-to-br from-[#eef4ff] via-[#e7f0ff] to-[#f3e8ff]">

  <div className="fixed inset-0 overflow-hidden pointer-events-none">

    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />

    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />

  </div>

  <div className="relative flex">

    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-white/80 backdrop-blur-xl border-r border-white/60">

      <div className="p-8">

        <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          InCrafto
        </h1>

      </div>

      <nav className="flex-1 px-5 space-y-2">

        {[
          {
            icon: Home,
            label: "Dashboard",
          },
          {
            icon: BookOpen,
            label: "Courses",
          },
          {
            icon: GraduationCap,
            label: "Assignments",
          },
          {
            icon: Trophy,
            label: "Placements",
          },
          {
            icon: Award,
            label: "Certificates",
          },
          {
            icon: User,
            label: "Profile",
          },
          {
            icon: Settings,
            label: "Settings",
          },
        ].map((item) => (
          <motion.div
            key={item.label}
            whileHover={{
              x: 8,
            }}
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all cursor-pointer"
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

          <h3 className="font-bold">
            Placement Ready
          </h3>

          <p className="text-sm mt-2 text-blue-100">
            Resume score increased by 12%
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
        className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#7c3aed] p-10 text-white mb-8"
      >

        <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-2xl" />

        <div className="relative z-10">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 Student Dashboard
          </span>

          <h1 className="text-6xl font-black mt-6 leading-tight">
            Welcome Back
          </h1>

          <p className="text-xl text-blue-100 mt-4 max-w-2xl">
            Continue your learning journey and track your
            career growth with InCrafto.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              href="/courses"
              className="bg-white text-blue-600 px-7 py-4 rounded-2xl font-bold"
            >
              Continue Learning
            </Link>

            <button className="border border-white/30 px-7 py-4 rounded-2xl">
              View Placements
            </button>

          </div>

        </div>

      </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {[
          {
            title: "Active Courses",
            value: "03",
            icon: BookOpen,
            color: "from-blue-500 to-cyan-500",
          },
          {
            title: "Progress",
            value: "68%",
            icon: GraduationCap,
            color: "from-purple-500 to-pink-500",
          },
          {
            title: "Attendance",
            value: "92%",
            icon: Calendar,
            color: "from-green-500 to-emerald-500",
          },
          {
            title: "Placement Status",
            value: "Active",
            icon: Briefcase,
            color: "from-orange-500 to-red-500",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl"
          >
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4`}
            >
              <item.icon size={24} />
            </div>

            <h3 className="text-gray-500 text-sm">
              {item.title}
            </h3>

            <p className="text-4xl font-black text-gray-900 mt-2">
              {item.value}
            </p>

            <p className="text-green-500 text-sm mt-2">
              ↑ 12% this month
            </p>
          </motion.div>
        ))}

      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl"
        >

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold">
              My Courses
            </h2>

            <Link
              href="/courses"
              className="text-blue-600 flex items-center gap-2"
            >
              View All
              <ChevronRight size={18} />
            </Link>

          </div>

          <div className="space-y-6">

            {[
              {
                name: "Full Stack Development",
                progress: 68,
              },
              {
                name: "Data Analytics",
                progress: 42,
              },
              {
                name: "Python Programming",
                progress: 84,
              },
            ].map((course) => (
              <motion.div
                key={course.name}
                whileHover={{
                  scale: 1.02,
                }}
                className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50"
              >
                <div className="flex justify-between mb-3">

                  <h4 className="font-semibold text-lg">
                    {course.name}
                  </h4>

                  <span className="font-bold text-blue-600">
                    {course.progress}%
                  </span>

                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${course.progress}%`,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl"
        >

          <h2 className="text-3xl font-bold mb-10">
            Learning Progress
          </h2>

          <div className="flex justify-center">

            <div className="relative w-64 h-64">

              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 100 100"
              >

                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 0.68,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  style={{
                    pathLength: 0.68,
                  }}
                />

                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2563eb"
                    />
                    <stop
                      offset="100%"
                      stopColor="#9333ea"
                    />
                  </linearGradient>
                </defs>

              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <h3 className="text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  68%
                </h3>

                <p className="text-gray-500">
                  Completed
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6">
            Assignments
          </h2>

          <div className="space-y-4">

            {[
              "Java Assignment",
              "React Project",
              "Python Quiz",
              "DBMS Case Study",
            ].map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg transition-all"
              >
                {item}
              </div>
            ))}

          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6">
            Upcoming Classes
          </h2>

          <div className="space-y-4">

            {[
              "React.js - Tomorrow 10 AM",
              "Python Advanced - Tomorrow 2 PM",
              "DSA Session - Friday 11 AM",
            ].map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50"
              >
                {item}
              </div>
            ))}

          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl mb-8"
      >

        <h2 className="text-3xl font-bold mb-8">
          Placement Tracker
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              title: "Resume Score",
              value: "84%",
            },
            {
              title: "Applications",
              value: "12",
            },
            {
              title: "Interviews",
              value: "4",
            },
            {
              title: "Offers",
              value: "1",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-3xl p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
            >
              <h4 className="text-blue-100">
                {item.title}
              </h4>

              <p className="text-4xl font-black mt-3">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl"
        >
          <Award
            className="text-purple-600 mb-5"
            size={40}
          />

          <h2 className="text-2xl font-bold mb-5">
            Certificates
          </h2>

          <div className="space-y-4">

            <div className="p-4 rounded-2xl bg-purple-50">
              ✔ Full Stack Development
            </div>

            <div className="p-4 rounded-2xl bg-purple-50">
              ✔ Internship Completion
            </div>

          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl"
        >
          <Bell
            className="text-blue-600 mb-5"
            size={40}
          />

          <h2 className="text-2xl font-bold mb-5">
            Announcements
          </h2>

          <div className="space-y-4">

            <div className="p-4 rounded-2xl bg-blue-50">
              📢 New React Module Added
            </div>

            <div className="p-4 rounded-2xl bg-blue-50">
              📢 Placement Drive on 10 June
            </div>

            <div className="p-4 rounded-2xl bg-blue-50">
              📢 Assignment Deadline Extended
            </div>

          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-5">
            Activity Timeline
          </h2>

          <div className="space-y-5">

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-2" />
              <p>Completed React Module</p>
            </div>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2" />
              <p>Submitted Python Assignment</p>
            </div>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500 mt-2" />
              <p>Applied for Internship</p>
            </div>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-500 mt-2" />
              <p>Updated Resume</p>
            </div>

          </div>
        </motion.div>

      </div>

    </main>

  </div>

</div>
  );
}