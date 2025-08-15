import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-beach-400 to-seafoam-400 mx-auto rounded-full"></div>
        </div>
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
    </PageTemplate>
  );
} 