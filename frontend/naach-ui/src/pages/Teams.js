import React from "react";
import { Link as RouterLink } from "react-router-dom";
<<<<<<< HEAD
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Teams() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-beach-100 via-sand-100 to-seafoam-100 py-20 px-4 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-20 h-20 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-sand-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-beach text-beach-700 mb-6 animate-fade-in">
            Dance Teams
          </h1>
          <p className="text-xl md:text-2xl text-beach-600 font-ocean mb-8 animate-slide-up">
            Meet the incredible teams competing at NJ NAACH 3.0
=======
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
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-beach-400 to-seafoam-400 mx-auto rounded-full"></div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Teams Grid */}
      <div className="py-16 px-4 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Card 1 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-beach-400 to-beach-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">Rutgers Bhangra</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🕺</div>
                  <p className="text-beach-700 font-ocean">Defending champions with electrifying performances</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🏆 Previous Wins: 2</p>
                  <p>👥 Team Size: 12</p>
                  <p>🎭 Style: Traditional Bhangra</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/teams/rutgers-bhangra"
                  className="w-full mt-4 bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 font-ocean font-semibold"
                >
                  Learn More
                </Button>
              </CardBody>
            </Card>

            {/* Team Card 2 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">Princeton Fusion</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💃</div>
                  <p className="text-beach-700 font-ocean">Innovative fusion of classical and contemporary</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🏆 Previous Wins: 1</p>
                  <p>👥 Team Size: 15</p>
                  <p>🎭 Style: Fusion</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/teams/princeton-fusion"
                  className="w-full mt-4 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-seafoam-900 font-ocean font-semibold"
                >
                  Learn More
                </Button>
              </CardBody>
            </Card>

            {/* Team Card 3 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="bg-gradient-to-r from-coral-400 to-coral-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">NJIT Rhythm</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🥁</div>
                  <p className="text-beach-700 font-ocean">High-energy performances with perfect synchronization</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🏆 Previous Wins: 0</p>
                  <p>👥 Team Size: 18</p>
                  <p>🎭 Style: Bollywood</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/teams/njit-rhythm"
                  className="w-full mt-4 bg-gradient-to-r from-coral-400 to-coral-500 text-white font-ocean font-semibold"
                >
                  Learn More
                </Button>
              </CardBody>
            </Card>

            {/* Team Card 4 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader className="bg-gradient-to-r from-beach-400 to-beach-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">Stevens Bollywood</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-beach-700 font-ocean">Creative choreography with stunning visuals</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🏆 Previous Wins: 1</p>
                  <p>👥 Team Size: 14</p>
                  <p>🎭 Style: Bollywood</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/teams/stevens-bollywood"
                  className="w-full mt-4 bg-gradient-to-r from-beach-400 to-beach-500 text-white font-ocean font-semibold"
                >
                  Learn More
                </Button>
              </CardBody>
            </Card>

            {/* Team Card 5 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <CardHeader className="bg-gradient-to-r from-sand-400 to-sand-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">Rowan Classical</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🎭</div>
                  <p className="text-beach-700 font-ocean">Traditional classical dance excellence</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🏆 Previous Wins: 0</p>
                  <p>👥 Team Size: 10</p>
                  <p>🎭 Style: Classical</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/teams/rowan-classical"
                  className="w-full mt-4 bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 font-ocean font-semibold"
                >
                  Learn More
                </Button>
              </CardBody>
            </Card>

            {/* Team Card 6 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '1s' }}>
              <CardHeader className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white text-center py-6">
                <h3 className="text-2xl font-beach">Montclair Fusion</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🌟</div>
                  <p className="text-beach-700 font-ocean">Modern fusion with contemporary flair</p>
                </div>
                <div className="space-y-2 text-sm text-beach-600 font-ocean">
                  <p>🏆 Previous Wins: 0</p>
                  <p>👥 Team Size: 16</p>
                  <p>🎭 Style: Contemporary Fusion</p>
                </div>
                <Button
                  as={RouterLink}
                  to="/teams/montclair-fusion"
                  className="w-full mt-4 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-seafoam-900 font-ocean font-semibold"
                >
                  Learn More
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-white mb-6">
            Ready to Join the Competition?
          </h2>
          <p className="text-xl text-beach-100 mb-8 font-ocean">
            Register your team for NJ NAACH 3.0 and showcase your talent on the Jersey Shore
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={RouterLink}
              to="/register"
              size="lg"
              className="bg-white text-beach-700 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300"
            >
              Register Team
            </Button>
            <Button
              as={RouterLink}
              to="/schedule"
              size="lg"
              className="bg-sand-400 text-sand-900 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-500 transition-all duration-300"
            >
              View Schedule
            </Button>
          </div>
        </div>
      </div>
=======
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
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
    </PageTemplate>
  );
} 