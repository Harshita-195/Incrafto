"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, Menu, X, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Course", href: "#courses" },
    { name: "Corporate Training", href: "#corporate" },
    { name: "Campus Program", href: "#campus" },
    { name: "Placement", href: "#placement" },
  ]

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#2d3e50] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>9211567120</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@incrafto.in</span>
            </div>
          </div>
          <Button 
            className="bg-[#e8a838] hover:bg-[#d49730] text-white rounded-full px-6"
          >
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-[#F7F4ED]/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_4px_30px_rgba(15,23,42,0.04)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <svg viewBox="0 0 50 50" className="h-12 w-12">
                <path d="M10 40 L25 10 L30 25" stroke="#e8a838" strokeWidth="4" fill="none" />
                <path d="M25 25 L40 25" stroke="#3498db" strokeWidth="4" fill="none" />
                <path d="M35 20 L40 25 L35 30" stroke="#3498db" strokeWidth="4" fill="none" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#2d3e50]">Incrafto</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#2d3e50] hover:text-[#3498db] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#login"
              className="flex items-center gap-2 text-[#3498db] font-medium"
            >
              <LogIn className="h-4 w-4" />
              Student Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#2d3e50]" />
            ) : (
              <Menu className="h-6 w-6 text-[#2d3e50]" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#2d3e50] hover:text-[#3498db] font-medium px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#login"
                className="flex items-center gap-2 text-[#3498db] font-medium px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Student Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
