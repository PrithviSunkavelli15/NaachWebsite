import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function BuyTickets() {
  return (
    <PageTemplate>
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Buy Tickets
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Secure your spot at the most exciting dance competition of the year
          </p>
        </div>
      </section>

      {/* ───────────────────────── Coming Soon Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ticket Sales Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                We're setting up our ticketing system for the upcoming event
              </p>
            </CardHeader>

            <CardBody className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Our ticketing platform will be available soon, featuring secure payment processing, 
                  multiple ticket tiers, and easy access to event information. Stay tuned for updates!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🎫 Ticket Types
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• General Admission</li>
                    <li>• VIP Experience</li>
                    <li>• Student Discounts</li>
                    <li>• Group Packages</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    💳 Payment Options
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Credit/Debit Cards</li>
                    <li>• Digital Wallets</li>
                    <li>• Secure Processing</li>
                    <li>• Instant Confirmation</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <RouterLink
                  to="/"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                >
                  ← Back to Home
                </RouterLink>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </PageTemplate>
  );
}
