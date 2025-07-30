import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
} from "@heroui/react";

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

// Sample history data
const historyEvents = [
  {
    id: 1,
    year: "2023",
    title: "NAACH 3.0 Launch",
    description: "The biggest and most innovative NAACH competition yet, featuring 15 teams and over 200 dancers.",
    achievements: ["Record attendance", "Live streaming", "International judges"],
    image: null,
    category: "Competition"
  },
  {
    id: 2,
    year: "2022",
    title: "Digital Transformation",
    description: "Introduced the first digital platform for team registration and competition management.",
    achievements: ["Online registration", "Digital scoring", "Real-time results"],
    image: null,
    category: "Technology"
  },
  {
    id: 3,
    year: "2021",
    title: "Virtual NAACH",
    description: "Adapted to the pandemic with our first virtual competition, showcasing resilience and innovation.",
    achievements: ["Virtual performances", "Online voting", "Global audience"],
    image: null,
    category: "Innovation"
  },
  {
    id: 4,
    year: "2020",
    title: "Community Expansion",
    description: "Expanded to include teams from all major universities in New Jersey.",
    achievements: ["12 participating teams", "New partnerships", "Enhanced judging"],
    image: null,
    category: "Growth"
  },
  {
    id: 5,
    year: "2019",
    title: "First Championship",
    description: "The inaugural NAACH championship that set the standard for competitive dance in New Jersey.",
    achievements: ["8 teams", "Professional judges", "Media coverage"],
    image: null,
    category: "Milestone"
  },
  {
    id: 6,
    year: "2018",
    title: "Foundation",
    description: "NJ NAACH was founded with the vision of creating a premier competitive dance platform.",
    achievements: ["Organization established", "First board elected", "Mission defined"],
    image: null,
    category: "Foundation"
  }
];

const pastWinners = [
  {
    year: "2023",
    first: "Rhythm Nation - Rutgers University",
    second: "Fusion Force - Princeton University",
    third: "Urban Beats - NJIT",
    special: "Best Choreography: Grace & Motion"
  },
  {
    year: "2022",
    first: "Grace & Motion - Montclair State",
    second: "Rhythm Nation - Rutgers University",
    third: "Dance Dynasty - Rowan University",
    special: "Most Innovative: Urban Beats"
  },
  {
    year: "2021",
    first: "Fusion Force - Princeton University",
    second: "Grace & Motion - Montclair State",
    third: "Rhythm Nation - Rutgers University",
    special: "Audience Choice: Dance Dynasty"
  },
  {
    year: "2020",
    first: "Rhythm Nation - Rutgers University",
    second: "Fusion Force - Princeton University",
    third: "Grace & Motion - Montclair State",
    special: "Best Technique: Urban Beats"
  },
  {
    year: "2019",
    first: "Grace & Motion - Montclair State",
    second: "Rhythm Nation - Rutgers University",
    third: "Fusion Force - Princeton University",
    special: "Rising Star: Dance Dynasty"
  }
];

export default function History() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
        className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <NavbarBrand>
          <AcmeLogo />
          <span className="font-bold text-inherit ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NJ NAACH
          </span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/board" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Board
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/teams" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/history" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200 font-semibold"
            >
              History
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/login"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Team Login
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
            From humble beginnings to the premier competitive dance platform in New Jersey. 
            Discover the journey that shaped NAACH into what it is today.
          </p>
        </div>
      </section>

      {/* ───────────────────────── Timeline Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Timeline of Events
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Chip
                  key={category}
                  variant={selectedCategory === category ? "solid" : "bordered"}
                  color={selectedCategory === category ? "primary" : "default"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Chip>
              ))}
            </div>
          </div>

          {/* Custom Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="relative mb-8">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-16">
                  <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{event.year}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {event.title}
                          </h3>
                        </div>
                        <Chip 
                          color="primary" 
                          variant="flat" 
                          size="sm"
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                        >
                          {event.category}
                        </Chip>
                      </div>
                    </CardHeader>
                    <CardBody className="space-y-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.achievements.map((achievement, idx) => (
                            <Chip 
                              key={idx}
                              size="sm"
                              variant="flat"
                              className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400"
                            >
                              {achievement}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Past Winners Section ───────────────────────── */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Past Champions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Celebrating the teams that have made history at NAACH competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWinners.map((winner) => (
              <Card 
                key={winner.year}
                className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {winner.year}
                  </h3>
                </CardHeader>

                <CardBody className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{winner.first}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{winner.second}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{winner.third}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      Special Award:
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {winner.special}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Statistics Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              NAACH by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Years</h3>
              <p className="text-gray-600 dark:text-gray-400">of excellence</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Teams</h3>
              <p className="text-gray-600 dark:text-gray-400">participating</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">200+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dancers</h3>
              <p className="text-gray-600 dark:text-gray-400">competing</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Events</h3>
              <p className="text-gray-600 dark:text-gray-400">hosted</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Call to Action ───────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our History
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join the legacy of excellence. Register your team for the next NAACH competition 
            and make your mark in dance history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={RouterLink}
              to="/teams"
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              View Teams
            </Button>
            <Button
              as={RouterLink}
              to="/login"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Team Login
            </Button>
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
            Empowering dancers through technology and tradition
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2026 NJ Naach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 