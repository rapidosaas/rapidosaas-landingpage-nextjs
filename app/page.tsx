"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="#top" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/icon.png"
                alt="Rapido SaaS Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rapido SaaS
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#features"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                Want some Help?
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col gap-4">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
                >
                  Pricing
                </a>
                <a
                  href="#docs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
                >
                  Docs
                </a>
                <a
                  href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-green-500 text-white rounded-full font-medium hover:shadow-lg transition-all text-center"
                >
                  Want some Help?
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Ship Your SaaS Faster
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-900 dark:text-white">Launch Your</span>
                <br />
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  SaaS in Days
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Stop wasting months on boilerplate code. Rapido SaaS gives you everything you need to build and launch your SaaS product—authentication, payments, database, and more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="https://github.com/rapidosaas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all text-center"
                >
                  Start Building Now
                </a>
                <a
                  href="https://neofreelance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium underline underline-offset-4 transition-colors"
                >
                  Demo →  neoFreelance.com
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">10x</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Faster Launch</div>
                </div>
                <div className="w-px h-12 bg-slate-300 dark:bg-slate-700"></div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">0$</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Only VPS+Domain</div>
                </div>
                <div className="w-px h-12 bg-slate-300 dark:bg-slate-700"></div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">TypeScript</div>
                </div>
              </div>
            </div>

            {/* Right Column - Stack Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
                <Image
                  src="/stack.png"
                  alt="Rapido SaaS Tech Stack"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#10b981" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span>Production Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Logos */}
          <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
            <p className="text-center text-sm text-slate-500 dark:text-slate-500 mb-8 uppercase tracking-wider">
              Built with the best technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/next.svg" alt="Next.js" width={100} height={30} className="dark:invert" />
              <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">TypeScript</span>
              <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">Tailwind</span>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-t from-white via-blue-50 to-white dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-slate-900 dark:text-white">
              Features You Will Find in Our Boilerplate
            </h2>
            <p className="text-lg text-center text-slate-600 dark:text-slate-400 max-w-3xl">
              This boilerplate is designed to help you ship your SaaS in few hours. It has the following features, some are work in progress:
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-5xl overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                <thead>
                  <tr className="bg-linear-to-r from-blue-600 to-purple-600">
                    <th className="px-6 py-4 text-left text-white font-semibold text-lg">Feature</th>
                    <th className="px-6 py-4 text-left text-white font-semibold text-lg">Time Saved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Responsive React components</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">1 hour</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Header with NavBar</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">30 minutes</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Footer</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">30 minutes</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>MobileMenu</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">30 minutes</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Landing page with Hero, Problems, Features</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">2 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Pricing + FAQ</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">1 hour</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>About</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">30 minutes</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>ToS and Conditions</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">30 minutes</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Login with magic link NextAuth</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">2 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Custom signin page</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">1 hour</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Dashboard</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">4 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>TailWind with ShadcnUI or DaisyUI</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">2 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Darkmode</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">1 hour</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Stripe payment</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">2 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>MongoDB with common usage</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">2 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>MailBox with mail-in-a-box</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">2 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Deployment with DokPloy</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">1 hour</td>
                  </tr>
                  <tr className="hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#10b981" />
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span>Optimisation of the SEO</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">2 hours</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-linear-to-r from-blue-600 to-purple-600">
                    <td className="px-6 py-4 text-white font-bold text-lg">Total Time Saved</td>
                    <td className="px-6 py-4 text-white font-bold text-lg">24+ hours</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Save weeks of development time and focus on what matters—building your unique product.
            </p>
            <a
              href="https://github.com/rapidosaas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 sm:px-8 lg:px-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Donate what you want.
            </h2>
            <p className="max-w-[500px] text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
              Start for free now!
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-8 justify-center">
            {/* Free Plan */}
            <div className="shadow-lg dark:border dark:border-slate-800 rounded-3xl flex flex-col items-center p-8 min-w-[350px] bg-white dark:bg-slate-800 hover:shadow-2xl transition-shadow">
              <div className="text-sm flex flex-row gap-2 items-center text-slate-700 dark:text-slate-300">
                <svg className="w-5 h-5 text-green-500 dark:text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Starter</span>
              </div>
              <div className="mt-5 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                $0
              </div>
              <div className="mt-2 text-slate-600 dark:text-slate-400">
                enjoy basic features
              </div>
              <div className="mt-6 w-full">
                <a
                  href="https://fr.tipeee.com/nazimboudeffa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-center hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Donate
                </a>
              </div>
              <div className="mt-8 w-full text-sm flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-center text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-green-400 dark:text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to most of the services</span>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="shadow-2xl dark:border-2 dark:border-purple-600 rounded-3xl flex flex-col items-center p-8 min-w-[350px] bg-linear-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-xs font-bold rounded-bl-2xl">
                POPULAR
              </div>
              <div className="text-sm flex flex-row gap-2 items-center text-slate-700 dark:text-slate-300 mt-2">
                <svg className="w-5 h-5 text-red-500 dark:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">All-in</span>
              </div>
              <div className="mt-5 text-5xl font-bold tracking-tight flex flex-row gap-3 items-center">
                <span className="line-through text-slate-400 dark:text-slate-500 text-3xl">
                  $99
                </span>
                <span className="text-slate-900 dark:text-white">$0</span>
              </div>
              <div className="mt-2 text-slate-600 dark:text-slate-400">
                donate what you want
              </div>
              <div className="mt-6 w-full">
                <a
                  href="https://fr.tipeee.com/nazimboudeffa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-center hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Donate
                </a>
              </div>
              <div className="mt-8 w-full text-sm flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-center text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-green-400 dark:text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to most of the services</span>
                </div>
                <div className="flex flex-row gap-2 items-center text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-green-400 dark:text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Discord community</span>
                </div>
                <div className="flex flex-row gap-2 items-center text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-red-500 dark:text-red-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>Support the development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section id="docs" className="py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                Complete Documentation & Resources
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Get instant access to comprehensive guides, tutorials, and documentation to help you build your SaaS faster. Everything you need to know about Rapido SaaS is available on Gumroad.
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 mt-0.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#10b981" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span>Step-by-step setup guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 mt-0.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#10b981" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span>API references and examples</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 mt-0.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#10b981" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span>Best practices and tips</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 mt-0.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#10b981" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span>Deployment and production guides</span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://nazimboudeffa.gumroad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Access Documentation
                </a>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Getting Started</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Quick setup guide</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Code Examples</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Ready-to-use snippets</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                    <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Advanced Topics</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Deep dive tutorials</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
