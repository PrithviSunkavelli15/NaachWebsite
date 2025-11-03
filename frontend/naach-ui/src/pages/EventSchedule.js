import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function EventSchedule() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-beach-100 via-coral-100 to-seafoam-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-coral-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in">
            Event Schedule
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Mark your calendars for NJ NAACH 3.0 - A weekend of dance, community, and Jersey Shore vibes
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-beach-400 to-coral-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Event Overview */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardBody className="p-6 sm:p-8">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">📅</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-beach text-beach-700 mb-4 sm:mb-6">
                NJ NAACH 3.0
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-lg sm:text-2xl font-beach text-beach-600 mb-2">🗓️ Date</div>
                  <p className="text-sm sm:text-base text-beach-700 font-ocean">February 20-22, 2026</p>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-beach text-beach-600 mb-2">📍 Location</div>
                  <p className="text-sm sm:text-base text-beach-700 font-ocean">Patriots Theater, Trenton, NJ</p>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-beach text-beach-600 mb-2">⏰ Time</div>
                  <p className="text-sm sm:text-base text-beach-700 font-ocean">TBD - Stay Tuned!</p>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-beach text-beach-600 mb-2">🎫 Tickets</div>
                  <p className="text-sm sm:text-base text-beach-700 font-ocean">TBD - Stay Tuned!</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Day 1 Schedule */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-beach-700 text-center mb-8 sm:mb-12">
            Day 1 - Friday, February 20
          </h2>
          
          {/* Stay Tuned Card */}
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-2xl">
            <CardBody className="p-8 sm:p-12">
              <div className="text-6xl sm:text-8xl mb-6 sm:mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                📅
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-lobster text-beach-700 mb-4 sm:mb-6">
                Stay Tuned for Schedule Details!
              </h3>
              <p className="text-lg sm:text-xl text-beach-600 font-ocean mb-6 sm:mb-8 leading-relaxed">
                We're finalizing the exciting schedule for NJ NAACH 3.0. 
                Check back soon for detailed timing and events!
              </p>
              <div className="bg-gradient-to-r from-beach-100 to-seafoam-100 rounded-2xl p-4 sm:p-6">
                <p className="text-base sm:text-lg text-beach-700 font-comfortaa font-semibold">
                  🎪 More Details Coming Soon!
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Day 2 Schedule */}
      <div className="py-16 px-4 bg-gradient-to-b from-seafoam-50 to-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Day 2 - Friday, February 21
          </h2>
          
          {/* Stay Tuned Card */}
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-2xl">
            <CardBody className="p-8 sm:p-12">
              <div className="text-6xl sm:text-8xl mb-6 sm:mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                🏆
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-lobster text-beach-700 mb-4 sm:mb-6">
                Competition Details Coming Soon!
              </h3>
              <p className="text-lg sm:text-xl text-beach-600 font-ocean mb-6 sm:mb-8 leading-relaxed">
                We're working on the exciting competition schedule for Day 2. 
                Stay tuned for updates on registration and event details!
              </p>
              <div className="bg-gradient-to-r from-seafoam-100 to-beach-100 rounded-2xl p-4 sm:p-6">
                <p className="text-base sm:text-lg text-beach-700 font-comfortaa font-semibold">
                  🎪 Registration Details Coming Soon!
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
      {/* Day 3 Schedule */}
      <div className="py-16 px-4 bg-gradient-to-b from-sand-50 to-coral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Day 3 - Saturday, February 22
          </h2>
          
          {/* Stay Tuned Card */}
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-2xl">
            <CardBody className="p-8 sm:p-12">
              <div className="text-6xl sm:text-8xl mb-6 sm:mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                🎉
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-lobster text-beach-700 mb-4 sm:mb-6">
                Final Day Details Coming Soon!
              </h3>
              <p className="text-lg sm:text-xl text-beach-600 font-ocean mb-6 sm:mb-8 leading-relaxed">
                The grand finale day schedule is being finalized. 
                Check back soon for details!
              </p>
              <div className="bg-gradient-to-r from-coral-100 to-sand-100 rounded-2xl p-4 sm:p-6">
                <p className="text-base sm:text-lg text-beach-700 font-comfortaa font-semibold">
                  🎆 Awards & Celebration Coming Soon!
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-white mb-6">
            Ready to Join the Celebration?
          </h2>
          <p className="text-xl text-beach-100 mb-8 font-ocean">
            Secure your spot at NJ NAACH 3.0 and be part of the most exciting dance competition on the Jersey Shore
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={RouterLink}
              to="/tickets"
              size="lg"
              className="bg-white text-beach-700 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300"
            >
              Buy Tickets Now
            </Button>
            <Button
              as={RouterLink}
              to="/teams"
              size="lg"
              className="bg-sand-400 text-sand-900 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-500 transition-all duration-300"
            >
              View Teams
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
