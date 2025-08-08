import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Link,
} from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

// Commented out teams data for now
/*
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
    founded: "2016",
    category: "Competitive",
    achievements: ["Best Performance 2023", "2nd Place 2022"],
    description: "A legacy team with a rich history of excellence in competitive dance.",
    logo: null,
    socialMedia: {
      instagram: "@dancedynasty_rowan",
      facebook: "DanceDynastyRowan"
    }
  },
  {
    id: 6,
    name: "Stepping Stones",
    university: "Stevens Institute",
    location: "Hoboken, NJ",
    members: 13,
    founded: "2021",
    category: "Competitive",
    achievements: ["Most Improved 2023", "Best Newcomer 2022"],
    description: "Innovative choreography meets technical precision in every performance.",
    logo: null,
    socialMedia: {
      instagram: "@steppingstones_stevens",
      facebook: "SteppingStonesStevens"
    }
  }
];

const categories = ["All", "Competitive", "Recreational"];
const universities = ["All", "Rutgers University", "Princeton University", "NJIT", "Montclair State University", "Rowan University", "Stevens Institute"];
*/

export default function Teams() {
  // Commented out teams functionality for now
  /*
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
  */

  return (
    <PageTemplate>
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Participating Teams
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Coming Soon
          </p>
        </div>
      </section>

      {/* ───────────────────────── Coming Soon Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Teams Directory Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                We're working on bringing you the complete teams directory
              </p>
            </CardHeader>

            <CardBody className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Our teams directory will showcase all participating dance teams with detailed profiles, 
                  achievements, and social media links. Check back soon for the full experience!
                </p>
              </div>

              <div className="text-center">
                <Link
                  as={RouterLink}
                  to="/"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                >
                  ← Back to Home
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </PageTemplate>
  );
} 