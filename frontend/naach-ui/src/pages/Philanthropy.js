import React from "react";
import { Link as RouterLink } from "react-router-dom";
<<<<<<< HEAD
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
=======
import {
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@heroui/react";
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
import PageTemplate from "../components/PageTemplate";

export default function Philanthropy() {
  return (
    <PageTemplate>
<<<<<<< HEAD
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-seafoam-100 via-beach-100 to-sand-100 py-20 px-4 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-20 h-20 bg-seafoam-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-beach text-seafoam-700 mb-6 animate-fade-in">
            Philanthropy
          </h1>
          <p className="text-xl md:text-2xl text-seafoam-600 font-ocean mb-8 animate-slide-up">
            Dancing for a Cause, Making Waves of Change
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-seafoam-400 to-beach-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 px-4 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardBody className="p-8">
              <div className="text-6xl mb-6">💙</div>
              <h2 className="text-3xl md:text-4xl font-beach text-beach-700 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-beach-600 font-ocean leading-relaxed">
                At NJ NAACH, we believe that dance has the power to create positive change in our communities. 
                Through our annual competition, we raise awareness and funds for important causes while celebrating 
                the art of dance and the spirit of the Jersey Shore.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Featured Causes */}
      <div className="py-16 px-4 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Featured Causes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cause 1 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-beach-400 to-beach-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">Ocean Conservation</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🌊</div>
                  <p className="text-beach-700 font-ocean">Protecting our beautiful Jersey Shore</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🎯 Goal: $15,000</p>
                  <p>💙 Partner: Clean Ocean Action</p>
                  <p>🌍 Impact: Beach cleanups & education</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/donate/ocean"
                  className="w-full mt-4 bg-gradient-to-r from-beach-400 to-beach-500 text-white font-ocean font-semibold"
                >
                  Donate Now
                </Button>
              </CardBody>
            </Card>

            {/* Cause 2 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">Arts Education</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="text-beach-700 font-ocean">Supporting young artists in NJ</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🎯 Goal: $20,000</p>
                  <p>💙 Partner: NJ Arts Council</p>
                  <p>🌍 Impact: Dance scholarships & programs</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/donate/arts"
                  className="w-full mt-4 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-seafoam-900 font-ocean font-semibold"
                >
                  Donate Now
                </Button>
              </CardBody>
            </Card>

            {/* Cause 3 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="bg-gradient-to-r from-sand-400 to-sand-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">Community Health</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏥</div>
                  <p className="text-beach-700 font-ocean">Supporting local healthcare initiatives</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🎯 Goal: $25,000</p>
                  <p>💙 Partner: Shore Medical Center</p>
                  <p>🌍 Impact: Medical equipment & programs</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/donate/health"
                  className="w-full mt-4 bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 font-ocean font-semibold"
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
=======
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Philanthropy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Making a difference through dance and community service
          </p>
        </div>
      </section>

      {/* ───────────────────────── Mission Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                NJ NAACH is committed to using the power of dance to create positive change in our community. 
                Through various philanthropic initiatives, we strive to support local causes, promote arts education, 
                and inspire the next generation of dancers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our events not only showcase incredible talent but also raise funds for important causes, 
                making every performance meaningful beyond the stage.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl rounded-2xl p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Community Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Every ticket sold and every performance given contributes to our mission of supporting 
                local arts education and community development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Initiatives Section ───────────────────────── */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Arts Education</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Supporting dance education programs in local schools and community centers, 
                  making the arts accessible to all students regardless of background.
                </p>
              </CardBody>
            </Card>

            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Community Outreach</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Partnering with local organizations to provide dance workshops, 
                  performances, and cultural enrichment programs for underserved communities.
                </p>
              </CardBody>
            </Card>

            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cultural Preservation</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Promoting and preserving traditional dance forms while encouraging 
                  innovation and fusion with contemporary styles.
                </p>
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
              </CardBody>
            </Card>
          </div>
        </div>
<<<<<<< HEAD
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
=======
      </section>

      {/* ───────────────────────── Call to Action ───────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Support our philanthropic efforts by attending events, volunteering, 
            or making a donation to help us continue making a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            <Button
              as={RouterLink}
              to="/tickets"
              size="lg"
<<<<<<< HEAD
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
=======
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Buy Tickets
            </Button>
            <Button
              as={RouterLink}
              to="/board"
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              Contact Board
            </Button>
          </div>
        </div>
      </section>
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
    </PageTemplate>
  );
}
