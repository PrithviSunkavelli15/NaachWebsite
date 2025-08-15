import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function History() {
  return (
    <PageTemplate>
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
            Our History
          </h1>
          <p className="text-xl md:text-2xl text-seafoam-600 font-ocean mb-8 animate-slide-up">
            A Journey of Dance, Community, and Jersey Shore Spirit
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-seafoam-400 to-beach-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 px-4 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            NJ NAACH Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-beach-500 via-seafoam-500 to-sand-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2021 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-beach-400 to-beach-500 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="w-5/12 ml-auto bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
                  <CardBody className="p-6">
                    <div className="text-right">
                      <h3 className="text-2xl font-beach text-beach-700 mb-2">2021</h3>
                      <h4 className="text-xl font-ocean text-beach-600 mb-3">The Beginning</h4>
                      <p className="text-beach-600 font-ocean">
                        NJ NAACH was founded by a group of passionate dancers who wanted to create a platform 
                        for South Asian dance teams in New Jersey. The first competition featured 8 teams and 
                        was held at Rutgers University.
                      </p>
                      <div className="mt-3 text-sm text-beach-500 font-ocean">
                        <p>🏆 Winner: Rutgers Bhangra</p>
                        <p>👥 Teams: 8</p>
                        <p>📍 Venue: Rutgers University</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-seafoam-400 to-seafoam-500 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="w-5/12 mr-auto bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <CardBody className="p-6">
                    <div className="text-left">
                      <h3 className="text-2xl font-beach text-beach-700 mb-2">2022</h3>
                      <h4 className="text-xl font-ocean text-beach-600 mb-3">Growing Stronger</h4>
                      <p className="text-beach-600 font-ocean">
                        The competition expanded to include 12 teams and introduced new categories. 
                        We also launched our first philanthropic initiative, raising $10,000 for local arts education.
                      </p>
                      <div className="mt-3 text-sm text-beach-500 font-ocean">
                        <p>🏆 Winner: Princeton Fusion</p>
                        <p>👥 Teams: 12</p>
                        <p>💙 Raised: $10,000</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-sand-400 to-sand-500 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="w-5/12 ml-auto bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <CardBody className="p-6">
                    <div className="text-right">
                      <h3 className="text-2xl font-beach text-beach-700 mb-2">2023</h3>
                      <h4 className="text-xl font-ocean text-beach-600 mb-3">Moving to the Shore</h4>
                      <p className="text-beach-600 font-ocean">
                        NJ NAACH moved to the Jersey Shore, embracing the beach and boardwalk culture. 
                        The event featured 15 teams and raised $25,000 for ocean conservation efforts.
                      </p>
                      <div className="mt-3 text-sm text-beach-500 font-ocean">
                        <p>🏆 Winner: Stevens Bollywood</p>
                        <p>👥 Teams: 15</p>
                        <p>🌊 Impact: Ocean Conservation</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-beach-400 to-beach-500 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="w-5/12 mr-auto bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <CardBody className="p-6">
                    <div className="text-left">
                      <h3 className="text-2xl font-beach text-beach-700 mb-2">2024</h3>
                      <h4 className="text-xl font-ocean text-beach-600 mb-3">Record Breaking</h4>
                      <p className="text-beach-600 font-ocean">
                        Our biggest year yet with 20 teams and over 1,000 attendees. We raised $50,000 
                        for community health initiatives and introduced the "Shore Spirit" award.
                      </p>
                      <div className="mt-3 text-sm text-beach-500 font-ocean">
                        <p>🏆 Winner: NJIT Rhythm</p>
                        <p>👥 Teams: 20</p>
                        <p>🏥 Impact: Community Health</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* 2025 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-seafoam-400 to-seafoam-500 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="w-5/12 ml-auto bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <CardBody className="p-6">
                    <div className="text-right">
                      <h3 className="text-2xl font-beach text-beach-700 mb-2">2025</h3>
                      <h4 className="text-xl font-ocean text-beach-600 mb-3">Innovation & Growth</h4>
                      <p className="text-beach-600 font-ocean">
                        Introduced new dance categories and digital innovations. The event featured 25 teams 
                        and raised $75,000 for arts education programs across New Jersey.
                      </p>
                      <div className="mt-3 text-sm text-beach-500 font-ocean">
                        <p>🏆 Winner: Montclair Fusion</p>
                        <p>👥 Teams: 25</p>
                        <p>🎨 Impact: Arts Education</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* 2026 - Future */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-coral-400 to-coral-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <Card className="w-5/12 mr-auto bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '1s' }}>
                  <CardBody className="p-6">
                    <div className="text-left">
                      <h3 className="text-2xl font-beach text-beach-700 mb-2">2026</h3>
                      <h4 className="text-xl font-ocean text-beach-600 mb-3">NJ NAACH 3.0</h4>
                      <p className="text-beach-600 font-ocean">
                        The most ambitious NJ NAACH yet! Featuring 30+ teams, expanded categories, 
                        and our biggest philanthropic goals. Join us for an unforgettable weekend of dance and community.
                      </p>
                      <div className="mt-3 text-sm text-beach-500 font-ocean">
                        <p>🎯 Goal: 30+ Teams</p>
                        <p>💙 Target: $100,000</p>
                        <p>🌊 Theme: Jersey Shore Vibes</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="py-16 px-4 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Key Milestones
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl text-center">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Community Growth</h3>
                <div className="space-y-2 text-beach-600 font-ocean">
                  <p><strong>2019:</strong> 5 founding teams</p>
                  <p><strong>2021:</strong> 8 teams</p>
                  <p><strong>2023:</strong> 15 teams</p>
                  <p><strong>2025:</strong> 25 teams</p>
                  <p><strong>2026:</strong> 30+ teams</p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl text-center">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">💙</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Philanthropic Impact</h3>
                <div className="space-y-2 text-beach-600 font-ocean">
                  <p><strong>2021:</strong> $5,000 raised</p>
                  <p><strong>2022:</strong> $10,000 raised</p>
                  <p><strong>2023:</strong> $25,000 raised</p>
                  <p><strong>2024:</strong> $50,000 raised</p>
                  <p><strong>2025:</strong> $75,000 raised</p>
                  <p><strong>2026:</strong> $100,000 goal</p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl text-center">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Awards & Recognition</h3>
                <div className="space-y-2 text-beach-600 font-ocean">
                  <p><strong>2022:</strong> Best Cultural Event</p>
                  <p><strong>2023:</strong> Community Impact Award</p>
                  <p><strong>2024:</strong> Arts Excellence Award</p>
                  <p><strong>2025:</strong> Innovation in Dance</p>
                  <p><strong>2026:</strong> Jersey Shore Spirit</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-white mb-6">
            Be Part of Our History
          </h2>
          <p className="text-xl text-beach-100 mb-8 font-ocean">
            Join us for NJ NAACH 3.0 and help us create another amazing chapter in our story
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