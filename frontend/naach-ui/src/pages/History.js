import React from "react";
import { Card, CardBody, CardHeader, Link } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

export default function History() {
  return (
    <PageTemplate>
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
    </PageTemplate>
  );
} 