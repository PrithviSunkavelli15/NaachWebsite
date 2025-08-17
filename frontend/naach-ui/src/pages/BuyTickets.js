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
      {/* Hero Section with Beach Background */}
      <div className="bg-gradient-to-br from-coral-100 via-seafoam-100 to-beach-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-coral-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-seafoam-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-coral-700 mb-4 sm:mb-6 animate-fade-in">
            Buy Tickets
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-coral-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Secure your spot at the most exciting dance competition of the year
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-coral-400 to-seafoam-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Ticket Information Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 to-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-coral-400 to-seafoam-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-beach text-coral-700">
                Ticket Sales Coming Soon
              </h2>
              <p className="text-sm sm:text-base text-coral-600 font-ocean mt-2">
                We're setting up our ticketing system for the upcoming event
              </p>
            </CardHeader>

            <CardBody className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              <div className="text-center space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-coral-600 font-ocean px-4">
                  Our ticketing platform will be available soon, featuring secure payment processing, 
                  multiple ticket tiers, and easy access to event information. Stay tuned for updates!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
                <div className="p-4 sm:p-6 bg-gradient-to-r from-coral-50 to-seafoam-50 rounded-xl border border-coral-200">
                  <h3 className="text-base sm:text-lg font-beach text-coral-700 mb-2 sm:mb-3">
                    🎫 Ticket Types
                  </h3>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-coral-600 font-ocean">
                    <li>• General Admission</li>
                    <li>• VIP Experience</li>
                    <li>• Student Discounts</li>
                    <li>• Group Packages</li>
                  </ul>
                </div>
                
                <div className="p-4 sm:p-6 bg-gradient-to-r from-seafoam-50 to-beach-50 rounded-xl border border-seafoam-200">
                  <h3 className="text-base sm:text-lg font-beach text-seafoam-700 mb-2 sm:mb-3">
                    💳 Payment Options
                  </h3>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-seafoam-600 font-ocean">
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
                  className="text-coral-600 hover:text-coral-700 font-ocean font-medium transition-colors duration-200 text-sm sm:text-base"
                >
                  ← Back to Home
                </RouterLink>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-coral-500 to-seafoam-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-white mb-6">
            Get Ready for NJ NAACH 3.0!
          </h2>
          <p className="text-xl text-coral-100 mb-8 font-ocean">
            Join us for the most exciting dance competition on the Jersey Shore
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={RouterLink}
              to="/schedule"
              size="lg"
              className="bg-white text-coral-700 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-coral-100 transition-all duration-300"
            >
              View Schedule
            </Button>
            <Button
              as={RouterLink}
              to="/teams"
              size="lg"
              className="bg-seafoam-400 text-seafoam-900 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-seafoam-500 transition-all duration-300"
            >
              Meet the Teams
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
