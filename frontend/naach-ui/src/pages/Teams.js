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
  Avatar,
  Chip,
  Input,
  Select,
  SelectItem,
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

// Sample teams data
const teams = [
  {
    id: 1,
    name: "Rhythm Nation",
    university: "Rutgers University",
    location: "New Brunswick, NJ",
    members: 15,
    founded: "2018",
    category: "Competitive",
    achievements: ["1st Place 2023", "Best Choreography 2022"],
    description: "A dynamic team known for innovative choreography and high-energy performances.",
    logo: null,
    socialMedia: {
      instagram: "@rhythmnation_rutgers",
      facebook: "RhythmNationRU"
    }
  },
  {
    id: 2,
    name: "Fusion Force",
    university: "Princeton University",
    location: "Princeton, NJ",
    members: 12,
    founded: "2019",
    category: "Competitive",
    achievements: ["2nd Place 2023", "Audience Choice 2022"],
    description: "Blending classical and contemporary styles with cutting-edge dance techniques.",
    logo: null,
    socialMedia: {
      instagram: "@fusionforce_princeton",
      facebook: "FusionForcePrinceton"
    }
  },
  {
    id: 3,
    name: "Urban Beats",
    university: "NJIT",
    location: "Newark, NJ",
    members: 18,
    founded: "2020",
    category: "Competitive",
    achievements: ["3rd Place 2023", "Most Innovative 2021"],
    description: "Urban dance specialists pushing the boundaries of street dance culture.",
    logo: null,
    socialMedia: {
      instagram: "@urbanbeats_njit",
      facebook: "UrbanBeatsNJIT"
    }
  },
  {
    id: 4,
    name: "Grace & Motion",
    university: "Montclair State University",
    location: "Montclair, NJ",
    members: 14,
    founded: "2017",
    category: "Competitive",
    achievements: ["Best Technique 2023", "1st Place 2021"],
    description: "Elegant performances combining grace with powerful contemporary movements.",
    logo: null,
    socialMedia: {
      instagram: "@graceandmotion_msu",
      facebook: "GraceAndMotionMSU"
    }
  },
  {
    id: 5,
    name: "Dance Dynasty",
    university: "Rowan University",
    location: "Glassboro, NJ",
    members: 16,
    founded: "2019",
    category: "Competitive",
    achievements: ["Best Costumes 2023", "2nd Place 2022"],
    description: "Known for elaborate costumes and theatrical dance performances.",
    logo: null,
    socialMedia: {
      instagram: "@dancedynasty_rowan",
      facebook: "DanceDynastyRowan"
    }
  },
  {
    id: 6,
    name: "Pulse Collective",
    university: "Stevens Institute",
    location: "Hoboken, NJ",
    members: 13,
    founded: "2021",
    category: "Competitive",
    achievements: ["Rising Star 2023", "Best Energy 2022"],
    description: "A fresh team bringing innovative choreography and infectious energy.",
    logo: null,
    socialMedia: {
      instagram: "@pulsecollective_stevens",
      facebook: "PulseCollectiveStevens"
    }
  }
];

const categories = ["All", "Competitive", "Recreational"];
const universities = ["All", "Rutgers University", "Princeton University", "NJIT", "Montclair State University", "Rowan University", "Stevens Institute"];

export default function Teams() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedUniversity, setSelectedUniversity] = useState("All");

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.university.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || team.category === selectedCategory;
    const matchesUniversity = selectedUniversity === "All" || team.university === selectedUniversity;
    
    return matchesSearch && matchesCategory && matchesUniversity;
  });

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
              className="hover:text-indigo-600 transition-colors duration-200 font-semibold"
            >
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/history" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200"
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
              Participating Teams
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the incredible dance teams that make NJ NAACH the premier competitive dance experience.
          </p>
        </div>
      </section>

      {/* ───────────────────────── Filters Section ───────────────────────── */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Search teams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              startContent={
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
            <Select
              placeholder="Category"
              selectedKeys={[selectedCategory]}
              onSelectionChange={(keys) => setSelectedCategory(Array.from(keys)[0])}
              className="w-full"
            >
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </Select>
            <Select
              placeholder="University"
              selectedKeys={[selectedUniversity]}
              onSelectionChange={(keys) => setSelectedUniversity(Array.from(keys)[0])}
              className="w-full"
            >
              {universities.map((university) => (
                <SelectItem key={university} value={university}>
                  {university}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Teams Grid ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredTeams.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No teams found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeams.map((team) => (
                <Card 
                  key={team.id}
                  className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <Avatar 
                        name={team.name}
                        className="w-20 h-20 text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {team.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {team.university}
                      </p>
                      <Chip 
                        color="primary" 
                        variant="flat" 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      >
                        {team.category}
                      </Chip>
                    </div>
                  </CardHeader>

                  <CardBody className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                      {team.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">{team.location}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">{team.members} members</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">Founded {team.founded}</span>
                      </div>
                    </div>

                    {team.achievements.length > 0 && (
                      <div className="pt-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Recent Achievements</h4>
                        <div className="flex flex-wrap gap-1">
                          {team.achievements.map((achievement, index) => (
                            <Chip 
                              key={index}
                              size="sm"
                              variant="flat"
                              className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400"
                            >
                              {achievement}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 space-y-2">
                      <Button
                        variant="bordered"
                        className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                        startContent={
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        }
                      >
                        Watch Performances
                      </Button>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="light"
                          className="flex-1"
                          startContent={
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          }
                        >
                          Instagram
                        </Button>
                        <Button
                          size="sm"
                          variant="light"
                          className="flex-1"
                          startContent={
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          }
                        >
                          Facebook
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ───────────────────────── Call to Action ───────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Compete?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join the most prestigious competitive dance community in New Jersey. 
            Register your team for the next competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={RouterLink}
              to="/login"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Team Login
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