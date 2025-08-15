import React, { useState } from "react";
import { Card, CardBody, CardHeader, Link } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";

// Enhanced SVG logo for NJ Naach
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

export default function History() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Define historyEvents array
  const historyEvents = [
    {
      id: 1,
      title: "NJ NAACH 3.0",
      year: "2026",
      category: "Foundation",
      description: "Latest iteration of NJ NAACH"
    },
    {
      id: 2,
      title: "NAACH 3.0 Champions",
      year: "2026",
      category: "Competition",
      description: "Winners of NAACH 3.0"
    },
    {
      id: 3,
      title: "NJ NAACH 2.0",
      year: "2025",
      category: "Foundation",
      description: "Second iteration of NJ NAACH"
    },
    {
      id: 4,
      title: "NAACH 2.0 Champions",
      year: "2025",
      category: "Competition",
      description: "Winners of NAACH 2.0"
    },
    {
      id: 5,
      title: "NJ NAACH 1.0",
      year: "2024",
      category: "Foundation",
      description: "First iteration of NJ NAACH"
    },
    {
      id: 6,
      title: "NAACH 1.0 Champions",
      year: "2024",
      category: "Competition",
      description: "Winners of NAACH 1.0"
    }
  ];

  const filteredEvents = selectedCategory === "All" 
    ? historyEvents 
    : historyEvents.filter(event => event.category === selectedCategory);

  const categories = ["All", "Competition", "Technology", "Innovation", "Growth", "Milestone", "Foundation"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* ───────────────────────── Enhanced Navbar ───────────────────────── */}
      <Navbar 
        shouldHideOnScroll 
        isBordered 
        height="4rem" 
        position="sticky"
        className="backdrop-blur-md bg-gray-900 border-b border-gray-700"
      >
        <NavbarBrand>
          <AcmeLogo />
          <span className="font-bold text-white ml-2">
            NJ NAACH
          </span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/teams" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/philanthropy" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Philanthropy
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/board" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Board
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/judges" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Judges
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/history" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              History
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/schedule" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Event Schedule
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/tickets"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mr-2"
            >
              Buy Tickets
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/login"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our History
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Celebrating the legacy and evolution of NJ NAACH through the years
          </p>
        </div>
      </section>

      {/* ───────────────────────── Timeline Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Timeline
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our journey through years of growth, innovation, and excellence in competitive dance.
            </p>
          </div>

          <div className="timeline-container relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              
              {/* NAACH 3.0 */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="timeline-content ml-16 md:ml-0 md:w-5/12 md:pr-8">
                  <Link as={RouterLink} to="/board" className="block">
                    <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      <CardHeader className="pb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">NJ NAACH 3.0</h3>
                        <p className="timeline-date text-sm text-gray-500 dark:text-gray-400">2026</p>
                      </CardHeader>
                      <CardBody>
                        <div className="mt-4 text-pink-600 dark:text-pink-400 font-medium">
                          View Executive Board →
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* NAACH 3.0 Winners */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="timeline-content ml-16 md:ml-auto md:w-5/12 md:pl-8">
                  <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                    <CardHeader className="pb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">NAACH 3.0 Champions</h3>
                      <p className="timeline-date text-sm text-gray-500 dark:text-gray-400">2026 - You Could Be Here</p>
                    </CardHeader>
                    <CardBody>
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-sm font-bold">?</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Join the competition and make history!
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* NAACH 2.0 */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="timeline-content ml-16 md:ml-auto md:w-5/12 md:pl-8">
                  <Link as={RouterLink} to="/board-2-0" className="block">
                    <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      <CardHeader className="pb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">NJ NAACH 2.0</h3>
                        <p className="timeline-date text-sm text-gray-500 dark:text-gray-400">2025</p>
                      </CardHeader>
                      <CardBody>
                        <div className="mt-4 text-purple-600 dark:text-purple-400 font-medium">
                          View Executive Board →
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* NAACH 2.0 Winners */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="timeline-content ml-16 md:ml-auto md:w-5/12 md:pl-8">
                  <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                    <CardHeader className="pb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">NAACH 2.0 Champions</h3>
                      <p className="timeline-date text-sm text-gray-500 dark:text-gray-400">2025 Winners</p>
                    </CardHeader>
                    <CardBody>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">1st</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">2nd</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">3rd</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">4th</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">5th</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">6th</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* NAACH 1.0 */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="timeline-content ml-16 md:ml-0 md:w-5/12 md:pr-8">
                  <Link as={RouterLink} to="/board-1-0" className="block">
                    <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      <CardHeader className="pb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">NJ NAACH 1.0</h3>
                        <p className="timeline-date text-sm text-gray-500 dark:text-gray-400">2024</p>
                      </CardHeader>
                      <CardBody>
                        <div className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium">
                          View Executive Board →
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* NAACH 1.0 Winners */}
              <div className="timeline-item relative">
                <div className="timeline-marker absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="timeline-content ml-16 md:ml-0 md:w-5/12 md:pr-8">
                  <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                    <CardHeader className="pb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">NAACH 1.0 Champions</h3>
                      <p className="timeline-date text-sm text-gray-500 dark:text-gray-400">2024 Winners</p>
                    </CardHeader>
                    <CardBody>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">1st</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">2nd</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-semibold">3rd</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Team Name</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

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
            Naach by the boardwalk
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-2">
              © 2026 NJ Naach. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Developed by Prithvi Sunkavelli, Vinit Shenoy, and Shatkratu Swarnkar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 