import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

// ─── Enhanced SVG logo for NJ Naach ─────────────────────────────────────────────
export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

// ─── Enhanced Landing page ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* ───────────────────────── Enhanced Navbar ───────────────────────── */}
      <Navbar 
        shouldHideOnScroll 
        isBordered 
        height="4rem" 
        position="sticky"
        className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <NavbarBrand>
          <AcmeLogo />
          <span className="font-bold text-inherit ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NJ NAACH
          </span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/board" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Board
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/teams" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/history" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              History
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/login"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Team Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* ───────────────────────── Enhanced Hero Section ───────────────────────── */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                NAACH
              </span>
              <span className="block text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-300 mt-2">
                3.0
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              The official NJ NAACH website - Where tradition meets innovation in competitive dance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as={RouterLink}
                to="/login"
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Started
              </Button>
              <Button
                as={RouterLink}
                to="/teams"
                size="lg"
                variant="bordered"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                View Teams
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* ───────────────────────── Features Section ───────────────────────── */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose NAACH?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Competitive Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">Join the most competitive dance teams in the region</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">Connect with passionate dancers and build lasting friendships</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">Experience cutting-edge technology and modern dance platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Enhanced Footer ───────────────────────── */}
      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <AcmeLogo />
            <span className="font-bold text-xl ml-2">NJ NAACH</span>
          </div>
          <p className="text-gray-300 mb-4">
            Empowering dancers through technology and tradition
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2026 NJ Naach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
