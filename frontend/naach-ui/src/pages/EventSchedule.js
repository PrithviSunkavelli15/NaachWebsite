import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

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

// ───────────────────────────────────────────────────────────────────────────────
// ⚠️  POST-PRODUCTION TODO: UPDATE THIS PAGE ⚠️
// 
// This page currently shows a "Coming Soon" placeholder. During post-production,
// this needs to be replaced with:
// - Event timeline and schedule display
// - Countdown timer to main event
// - Workshop and training session details
// - Registration deadlines and important dates
// - Venue information and directions
// - Integration with calendar systems
// - Real-time event updates and notifications
// 
// Priority: HIGH - This is a key user engagement feature
// ───────────────────────────────────────────────────────────────────────────────

export default function EventSchedule() {
  return (
    <PageTemplate>
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Event Schedule
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay updated with all the important dates, deadlines, and events
          </p>
        </div>
      </section>

      {/* ───────────────────────── Coming Soon Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl rounded-2xl p-12">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Schedule Coming Soon
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're working hard to bring you a comprehensive event schedule with all the important dates, 
              deadlines, and exciting events. Check back soon for the complete timeline!
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    📅 What's Coming
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Registration deadlines</li>
                    <li>• Workshop schedules</li>
                    <li>• Competition timeline</li>
                    <li>• Award ceremonies</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🎯 Features
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Real-time updates</li>
                    <li>• Calendar integration</li>
                    <li>• Mobile notifications</li>
                    <li>• Venue directions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button
                as={RouterLink}
                to="/"
                size="lg"
                variant="bordered"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
