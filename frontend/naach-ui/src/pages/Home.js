import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Home() {
  return (
    <PageTemplate>
<<<<<<< HEAD
      {/* Hero Section with Beach/Boardwalk Background */}
      <div
        className="flex-1 flex items-center justify-center px-4 min-h-[calc(100vh-4rem)] bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/beach-boardwalk.jpg')",
        }}
      >
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-beach-900/30 via-beach-800/20 to-sand-900/40" />

        {/* Floating beach elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-seafoam-200/80 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-sand-200/80 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-20 h-20 bg-beach-200/80 rounded-full backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Main Title - Matching the reference image style */}
          <h1
            className="text-6xl md:text-8xl mb-12 leading-tight drop-shadow-2xl animate-fade-in"
            style={{ 
              fontFamily: "'Baloo 2', cursive",
              color: "#FFE15D", // Light yellow color from reference
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
            }}
          >
            NJ NAACH
            <span className="block text-4xl md:text-6xl text-white drop-shadow-lg mt-2">
              3.0
            </span>
          </h1>

          {/* Buttons Section - Matching the reference image style */}
          <div className="flex flex-wrap justify-center gap-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* TICKETS Button - Sandy/Peach color */}
            <a
              href="/tickets"
              className="inline-block bg-gradient-to-r from-sand-200 to-sand-300 text-sand-900 px-16 py-6 rounded-3xl text-xl font-bold hover:from-sand-300 hover:to-sand-400 transform hover:scale-105 transition-all duration-300 font-ocean border-2 border-pink-200 cursor-pointer no-underline"
            >
              TICKETS
            </a>

            {/* EVENT SCHEDULE Button - Light blue/seafoam color */}
            <a
              href="/schedule"
              className="inline-block bg-gradient-to-r from-seafoam-200 to-seafoam-300 text-seafoam-900 px-16 py-6 rounded-3xl text-xl font-bold hover:from-seafoam-300 hover:to-seafoam-400 transform hover:scale-105 transition-all duration-300 font-ocean border-2 border-sand-300 cursor-pointer no-underline"
            >
              EVENT SCHEDULE
            </a>

            {/* TEAMS INFO Button - Light blue/seafoam color */}
            <a
              href="/teams"
              className="inline-block bg-gradient-to-r from-seafoam-200 to-seafoam-300 text-seafoam-900 px-16 py-6 rounded-3xl text-xl font-bold hover:from-seafoam-300 hover:to-seafoam-400 transform hover:scale-105 transition-all duration-300 font-ocean border-2 border-sand-300 cursor-pointer no-underline"
            >
              TEAMS INFO
            </a>
          </div>

          {/* Beach wave decoration */}
          <div className="absolute bottom-0 left-0 w-full h-16"></div>
        </div>
      </div>

      {/* Additional Beach Info Section */}
      <div className="bg-gradient-to-b from-beach-50 to-sand-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 mb-8">
            Welcome to the Shore's Premier Dance Competition
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sand-200">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-ocean font-semibold text-beach-700 mb-3">Ocean Vibes</h3>
              <p className="text-beach-600 font-ocean">Experience the rhythm of the waves and the energy of the boardwalk</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sand-200">
              <div className="text-4xl mb-4">💃</div>
              <h3 className="text-xl font-ocean font-semibold text-beach-700 mb-3">Dance Excellence</h3>
              <p className="text-beach-600 font-ocean">Witness incredible performances from the region's top dance teams</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sand-200">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-ocean font-semibold text-beach-700 mb-3">Jersey Shore</h3>
              <p className="text-beach-600 font-ocean">Join us where the beach meets the boardwalk for an unforgettable experience</p>
            </div>
          </div>
        </div>
      </div>
=======
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
            
            <div className="flex justify-center items-center">
              <Button
                as={RouterLink}
                to="/teams"
                size="lg"
                variant="bordered"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                View Teams
              </Button>
            </div>
          </div>
        </div>
      </main>
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
    </PageTemplate>
  );
}
