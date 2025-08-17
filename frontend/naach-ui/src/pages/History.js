import React from "react";
import { Card, CardBody, CardHeader, Link, Button } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

export default function History() {
  return (
    <PageTemplate>
      {/* Hero Section with Enhanced Beach Background */}
      <div className="bg-gradient-to-br from-seafoam-100 via-coral-100 to-sand-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Enhanced floating beach elements */}
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-seafoam-700 mb-4 sm:mb-6 animate-fade-in drop-shadow-lg">
            Our History
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-seafoam-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4 leading-relaxed">
            Celebrating the legacy and evolution of NJ NAACH through the years
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-seafoam-400 via-coral-400 to-sand-400 mx-auto rounded-full shadow-lg"></div>
          
          {/* Enhanced subtitle */}
          <p className="text-base sm:text-lg text-seafoam-500 font-ocean mt-4 sm:mt-6 animate-slide-up px-4" style={{ animationDelay: '0.3s' }}>
            From humble beginnings to spectacular performances - every year tells a story of passion, talent, and community
          </p>
        </div>
      </div>

      {/* Enhanced Timeline Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 via-sand-50 to-seafoam-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-beach-400 to-seafoam-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-coral-400 to-sand-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-seafoam-400 to-coral-400 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-beach-700 mb-4 sm:mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-beach-600 font-ocean px-4 max-w-3xl mx-auto leading-relaxed">
              Each year brings new stories, new champions, and new memories. Explore the evolution of NJ NAACH from its inception to the spectacular event it is today.
            </p>
            
            {/* Decorative wave element */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <div className="w-24 h-2 bg-gradient-to-r from-transparent via-beach-400 to-transparent rounded-full"></div>
              <div className="w-16 h-2 bg-gradient-to-r from-transparent via-seafoam-400 to-transparent rounded-full mx-2"></div>
              <div className="w-20 h-2 bg-gradient-to-r from-transparent via-coral-400 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="timeline-container relative">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-beach-400 via-seafoam-400 via-coral-400 to-sand-400 rounded-full shadow-lg"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              
              {/* NAACH 3.0 Champions - Enhanced */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-beach-400 to-seafoam-400 rounded-full border-4 border-white shadow-xl ring-4 ring-beach-200"></div>
                <div className="timeline-content ml-10 sm:ml-20 md:ml-0 md:w-5/12 md:pr-8 lg:pr-12">
                  <Card className="bg-white/90 backdrop-blur-md border-2 border-sand-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 animate-fade-in overflow-hidden">
                    <CardHeader className="pb-3 sm:pb-4 bg-gradient-to-r from-beach-50 to-seafoam-50">
                      <h3 className="text-lg sm:text-xl font-beach text-beach-700">🏆 NAACH 3.0 Champions</h3>
                      <p className="timeline-date text-xs sm:text-sm text-beach-500 font-ocean font-semibold">2026 - You Could Be Here</p>
                    </CardHeader>
                    <CardBody className="p-4 sm:p-6">
                      <div className="text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-beach-400 via-seafoam-400 to-coral-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <span className="text-white text-2xl sm:text-3xl font-bold">?</span>
                        </div>
                        <p className="text-beach-600 font-ocean text-sm sm:text-base font-medium">
                          Join the competition and make history!
                        </p>
                        <div className="mt-3 flex justify-center space-x-2">
                          <span className="inline-block w-2 h-2 bg-beach-400 rounded-full animate-pulse"></span>
                          <span className="inline-block w-2 h-2 bg-seafoam-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                          <span className="inline-block w-2 h-2 bg-coral-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* NAACH 3.0 Board - Enhanced */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-beach-400 to-seafoam-400 rounded-full border-4 border-white shadow-xl ring-4 ring-seafoam-200"></div>
                <div className="timeline-content ml-10 sm:ml-20 md:ml-0 md:w-5/12 md:pr-8 lg:pr-12">
                  <Link as={RouterLink} to="/board" className="block">
                    <Card className="bg-white/90 backdrop-blur-md border-2 border-sand-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
                      <CardHeader className="pb-3 sm:pb-4 bg-gradient-to-r from-seafoam-50 to-beach-50">
                        <h3 className="text-lg sm:text-xl font-beach text-beach-700">🌟 NJ NAACH 3.0</h3>
                        <p className="timeline-date text-xs sm:text-sm text-beach-500 font-ocean font-semibold">2026 - The Future is Now</p>
                      </CardHeader>
                      <CardBody className="p-4 sm:p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-seafoam-400 to-beach-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <span className="text-white text-lg sm:text-xl">👥</span>
                          </div>
                          <div className="mt-3 sm:mt-4 text-beach-600 font-ocean font-medium text-sm sm:text-base">
                            View Executive Board →
                          </div>
                          <div className="mt-2 text-xs text-beach-500 font-ocean">
                            Meet the passionate leaders behind NJ NAACH 3.0
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* NAACH 2.0 - Enhanced */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-seafoam-400 to-coral-400 rounded-full border-4 border-white shadow-xl ring-4 ring-coral-200"></div>
                <div className="timeline-content ml-10 sm:ml-20 md:ml-auto md:w-5/12 md:pl-8 lg:pl-12">
                  <Link as={RouterLink} to="/board-2-0" className="block">
                    <Card className="bg-white/90 backdrop-blur-md border-2 border-sand-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
                      <CardHeader className="pb-3 sm:pb-4 bg-gradient-to-r from-coral-50 to-seafoam-50">
                        <h3 className="text-lg sm:text-xl font-beach text-beach-700">🎭 NJ NAACH 2.0</h3>
                        <p className="timeline-date text-xs sm:text-sm text-beach-500 font-ocean font-semibold">2025 - Building on Success</p>
                      </CardHeader>
                      <CardBody className="p-4 sm:p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-coral-400 to-seafoam-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <span className="text-white text-lg sm:text-xl">🎪</span>
                          </div>
                          <div className="mt-3 sm:mt-4 text-seafoam-600 font-ocean font-medium text-sm sm:text-base">
                            View Executive Board →
                          </div>
                          <div className="mt-2 text-xs text-seafoam-500 font-ocean">
                            The team that elevated NJ NAACH to new heights
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* NAACH 2.0 Winners - Enhanced */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-seafoam-400 to-coral-400 rounded-full border-4 border-white shadow-xl ring-4 ring-coral-200"></div>
                <div className="timeline-content ml-10 sm:ml-20 md:ml-0 md:w-5/12 md:pr-8 lg:pr-12">
                  <Card className="bg-white/90 backdrop-blur-md border-2 border-sand-200 shadow-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden">
                    <CardHeader className="pb-3 sm:pb-4 bg-gradient-to-r from-coral-50 to-seafoam-50">
                      <h3 className="text-lg sm:text-xl font-beach text-beach-700">🏆 NAACH 2.0 Champions</h3>
                      <p className="timeline-date text-xs sm:text-sm text-beach-500 font-ocean font-semibold">2025 Winners - Excellence Defined</p>
                    </CardHeader>
                    <CardBody className="p-4 sm:p-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        {[
                          { place: "1st", color: "from-beach-400 to-seafoam-400", bg: "from-beach-50 to-seafoam-50" },
                          { place: "2nd", color: "from-seafoam-400 to-sand-400", bg: "from-seafoam-50 to-sand-50" },
                          { place: "3rd", color: "from-sand-400 to-coral-400", bg: "from-sand-50 to-coral-50" },
                          { place: "4th", color: "from-coral-400 to-beach-400", bg: "from-coral-50 to-beach-50" },
                          { place: "5th", color: "from-beach-400 to-seafoam-400", bg: "from-beach-50 to-seafoam-50" },
                          { place: "6th", color: "from-seafoam-400 to-sand-400", bg: "from-seafoam-50 to-sand-50" }
                        ].map((item, index) => (
                          <div key={index} className={`bg-gradient-to-br ${item.bg} rounded-xl p-3 sm:p-4 border border-sand-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                              <span className="text-white text-xs sm:text-sm font-bold">{item.place}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-beach-600 font-ocean text-center font-medium">Team Name</p>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* NAACH 1.0 - Enhanced */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-sand-400 to-beach-400 rounded-full border-4 border-white shadow-xl ring-4 ring-beach-200"></div>
                <div className="timeline-content ml-10 sm:ml-20 md:ml-0 md:w-5/12 md:pr-8 lg:pr-12">
                  <Link as={RouterLink} to="/board-1-0" className="block">
                    <Card className="bg-white/90 backdrop-blur-md border-2 border-sand-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
                      <CardHeader className="pb-3 sm:pb-4 bg-gradient-to-r from-beach-50 to-sand-50">
                        <h3 className="text-lg sm:text-xl font-beach text-beach-700">🌅 NJ NAACH 1.0</h3>
                        <p className="timeline-date text-xs sm:text-sm text-beach-500 font-ocean font-semibold">2024 - Where It All Began</p>
                      </CardHeader>
                      <CardBody className="p-4 sm:p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-sand-400 to-beach-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <span className="text-white text-lg sm:text-xl">🌊</span>
                          </div>
                          <div className="mt-3 sm:mt-4 text-sand-600 font-ocean font-medium text-sm sm:text-base">
                            View Executive Board →
                          </div>
                          <div className="mt-2 text-xs text-sand-500 font-ocean">
                            The pioneers who started this incredible journey
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* NAACH 1.0 Winners - Enhanced */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-sand-400 to-beach-400 rounded-full border-4 border-white shadow-xl ring-4 ring-beach-200"></div>
                <div className="timeline-content ml-10 sm:ml-20 md:ml-0 md:w-5/12 md:pr-8 lg:pr-12">
                  <Card className="bg-white/90 backdrop-blur-md border-2 border-sand-200 shadow-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden">
                    <CardHeader className="pb-3 sm:pb-4 bg-gradient-to-r from-beach-50 to-sand-50">
                      <h3 className="text-lg sm:text-xl font-beach text-beach-700">🏆 NAACH 1.0 Champions</h3>
                      <p className="timeline-date text-xs sm:text-sm text-beach-500 font-ocean font-semibold">2024 Winners - The First Champions</p>
                    </CardHeader>
                    <CardBody className="p-4 sm:p-6">
                      <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        {[
                          { place: "1st", color: "from-sand-400 to-beach-400", bg: "from-sand-50 to-beach-50" },
                          { place: "2nd", color: "from-beach-400 to-seafoam-400", bg: "from-beach-50 to-seafoam-50" },
                          { place: "3rd", color: "from-seafoam-400 to-sand-400", bg: "from-seafoam-50 to-sand-50" }
                        ].map((item, index) => (
                          <div key={index} className={`bg-gradient-to-br ${item.bg} rounded-xl p-3 sm:p-4 border border-sand-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                              <span className="text-white text-xs sm:text-sm font-bold">{item.place}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-beach-600 font-ocean text-center font-medium">Team Name</p>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Call to Action Section */}
      <div className="bg-gradient-to-r from-beach-500 via-seafoam-500 to-coral-500 py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-white mb-4 sm:mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-lg sm:text-xl text-beach-100 mb-6 sm:mb-8 font-ocean px-4 leading-relaxed">
            Every year brings new chapters to the NJ NAACH legacy. Whether you're competing, spectating, or supporting, you're part of something special.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              as={RouterLink}
              to="/tickets"
              size="lg"
              className="bg-white text-beach-700 px-6 sm:px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🎫 Get Your Tickets
            </Button>
            <Button
              as={RouterLink}
              to="/teams"
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-ocean font-semibold hover:bg-white hover:text-beach-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              👥 Join the Competition
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
} 