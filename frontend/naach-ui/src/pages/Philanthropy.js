import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Philanthropy() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sand-100 via-beach-100 to-seafoam-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-sand-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
         <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-seafoam-300 to-seafoam-400 rounded-full backdrop-blur-sm shadow-lg flex items-center justify-center">
            <span className="text-2xl sm:text-3xl">🏖️</span>
          </div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r from-coral-300 to-coral-400 rounded-full backdrop-blur-sm shadow-lg flex items-center justify-center">
            <span className="text-xl sm:text-2xl">🎪</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-sand-700 mb-4 sm:mb-6 animate-fade-in">
            Philanthropy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-sand-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Dancing for a Cause, Making Waves of Change
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-sand-400 to-beach-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardBody className="p-6 sm:p-8">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">💙</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-beach text-beach-700 mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-beach-600 font-ocean leading-relaxed px-4">
                At NJ NAACH, we believe that dance has the power to create positive change in our communities. 
                Through our annual competition, we raise awareness and funds for important causes while celebrating 
                the art of dance and the spirit of the Jersey Shore.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Featured Causes */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-beach-700 text-center mb-8 sm:mb-12">
            Featured Causes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Cause 1 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-beach-400 to-beach-500 text-white text-center py-4 sm:py-6">
                <h3 className="text-xl sm:text-2xl font-beach">Ocean Conservation</h3>
              </CardHeader>
              <CardBody className="p-4 sm:p-6">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl mb-2">🌊</div>
                  <p className="text-beach-700 font-ocean text-sm sm:text-base">Protecting our beautiful Jersey Shore</p>
                </div>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-beach-600 font-ocean">
                  <p>🎯 Goal: $15,000</p>
                  <p>💙 Partner: Clean Ocean Action</p>
                  <p>🌍 Impact: Beach cleanups & education</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/donate/ocean"
                  size="sm"
                  className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-beach-400 to-beach-500 text-white font-ocean font-semibold text-xs sm:text-sm"
                >
                  Donate Now
                </Button>
              </CardBody>
            </Card>

            {/* Cause 2 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white text-center py-4 sm:py-6">
                <h3 className="text-xl sm:text-2xl font-beach">Arts Education</h3>
              </CardHeader>
              <CardBody className="p-4 sm:p-6">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl mb-2">🎨</div>
                  <p className="text-beach-700 font-ocean text-sm sm:text-base">Supporting young artists in NJ</p>
                </div>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-beach-600 font-ocean">
                  <p>🎯 Goal: $20,000</p>
                  <p>💙 Partner: NJ Arts Council</p>
                  <p>🌍 Impact: Dance scholarships & programs</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/donate/arts"
                  size="sm"
                  className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-seafoam-900 font-ocean font-semibold text-xs sm:text-sm"
                >
                  Donate Now
                </Button>
              </CardBody>
            </Card>

            {/* Cause 3 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="bg-gradient-to-r from-coral-400 to-coral-500 text-white text-center py-4 sm:py-6">
                <h3 className="text-xl sm:text-2xl font-beach">Community Health</h3>
              </CardHeader>
              <CardBody className="p-4 sm:p-6">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl mb-2">🏥</div>
                  <p className="text-beach-700 font-ocean text-sm sm:text-base">Supporting local healthcare initiatives</p>
                </div>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-beach-600 font-ocean">
                  <p>🎯 Goal: $25,000</p>
                  <p>💙 Partner: Rutgers Health</p>
                  <p>🌍 Impact: Medical equipment & programs</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/donate/health"
                  size="sm"
                  className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-coral-400 to-coral-500 text-white font-ocean font-semibold text-xs sm:text-sm"
                >
                  Donate Now
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 px-4 bg-gradient-to-r from-beach-500 to-seafoam-500">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-white mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl font-beach text-white mb-2">$150K+</div>
              <p className="text-beach-100 font-ocean">Total Raised</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl font-beach text-white mb-2">25+</div>
              <p className="text-beach-100 font-ocean">Causes Supported</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl font-beach text-white mb-2">10K+</div>
              <p className="text-beach-100 font-ocean">Lives Impacted</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl font-beach text-white mb-2">5</div>
              <p className="text-beach-100 font-ocean">Years of Giving</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Involved */}
      <div className="py-16 px-4 bg-gradient-to-b from-seafoam-50 to-sand-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            How to Get Involved
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">🎫</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Attend the Event</h3>
                <p className="text-beach-600 font-ocean mb-6">
                  Purchase tickets to NJ NAACH 3.0. A portion of every ticket sale goes directly to our 
                  featured causes, making your attendance a contribution to positive change.
                </p>
                <Button
                  as={RouterLink}
                  to="/tickets"
                  className="bg-gradient-to-r from-beach-400 to-beach-500 text-white font-ocean font-semibold"
                >
                  Buy Tickets
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">💝</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Direct Donations</h3>
                <p className="text-beach-600 font-ocean mb-6">
                  Make a direct donation to any of our featured causes. Every dollar makes a difference 
                  in supporting our community and protecting the Jersey Shore we all love.
                </p>
                <Button
                  as={RouterLink}
                  to="/donate"
                  className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-seafoam-900 font-ocean font-semibold"
                >
                  Donate Now
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-beach-600 to-seafoam-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-beach-100 mb-8 font-ocean">
            Together, we can create waves of positive change in our community while celebrating the art of dance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={RouterLink}
              to="/tickets"
              size="lg"
              className="bg-white text-beach-700 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300"
            >
              Get Tickets
            </Button>
            <Button
              as={RouterLink}
              to="/donate"
              size="lg"
              className="bg-sand-400 text-sand-900 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-500 transition-all duration-300"
            >
              Make a Donation
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
