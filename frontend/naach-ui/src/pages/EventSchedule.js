import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function EventSchedule() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-beach-100 via-coral-100 to-seafoam-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-coral-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in">
            Event Schedule
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Mark your calendars for NJ NAACH 3.0 - A weekend of dance, community, and Jersey Shore vibes
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-beach-400 to-coral-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Event Overview */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardBody className="p-6 sm:p-8">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">📅</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-beach text-beach-700 mb-4 sm:mb-6">
                NJ NAACH 3.0
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-lg sm:text-2xl font-beach text-beach-600 mb-2">🗓️ Date</div>
                  <p className="text-sm sm:text-base text-beach-700 font-ocean">June 15-16, 2026</p>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-beach text-beach-600 mb-2">📍 Location</div>
                  <p className="text-sm sm:text-base text-beach-700 font-ocean">Jersey Shore Convention Center</p>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-beach text-beach-600 mb-2">⏰ Time</div>
                  <p className="text-sm sm:text-base text-beach-700 font-ocean">10:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-beach text-beach-600 mb-2">🎫 Tickets</div>
                  <p className="text-sm sm:text-base text-beach-700 font-ocean">Starting at $25</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Day 1 Schedule */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-beach-700 text-center mb-8 sm:mb-12">
            Day 1 - Friday, June 15
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {/* Event 1 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardBody className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-beach text-beach-600 mb-2">10:00 AM</div>
                    <Chip color="primary" variant="flat" className="font-ocean text-xs sm:text-sm">Registration Opens</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-beach-700 mb-2">Team Check-in & Registration</h3>
                    <p className="text-sm sm:text-base text-beach-600 font-ocean">Teams arrive and complete registration process. Collect competition materials and finalize team information.</p>
                    <div className="mt-2 sm:mt-3 space-y-1 text-xs sm:text-sm text-beach-500 font-ocean">
                      <p>📍 Main Lobby</p>
                      <p>👥 All Teams Required</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Event 2 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardBody className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-beach text-beach-600 mb-2">12:00 PM</div>
                    <Chip color="secondary" variant="flat" className="font-ocean text-xs sm:text-sm">Lunch Break</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-beach-700 mb-2">Beachside Lunch & Networking</h3>
                    <p className="text-sm sm:text-base text-beach-600 font-ocean">Enjoy a delicious lunch with ocean views while networking with other teams and organizers.</p>
                    <div className="mt-2 sm:mt-3 space-y-1 text-xs sm:text-sm text-beach-500 font-ocean">
                      <p>📍 Beachside Pavilion</p>
                      <p>🍽️ Lunch Provided</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Event 3 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-beach text-beach-600 mb-2">2:00 PM</div>
                    <Chip color="success" variant="flat" className="font-ocean">Competition</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-beach text-beach-700 mb-2">Preliminary Rounds</h3>
                    <p className="text-beach-600 font-ocean">Teams compete in preliminary rounds across different categories. Judges evaluate technique, creativity, and performance quality.</p>
                    <div className="mt-3 space-y-1 text-sm text-beach-500 font-ocean">
                      <p>📍 Main Stage</p>
                      <p>🏆 Preliminary Judging</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Event 4 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-beach text-beach-600 mb-2">6:00 PM</div>
                    <Chip color="warning" variant="flat" className="font-ocean">Dinner</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-beach text-beach-700 mb-2">Boardwalk Dinner & Social</h3>
                    <p className="text-beach-600 font-ocean">Enjoy dinner at the famous Jersey Shore boardwalk while socializing with other participants and enjoying live entertainment.</p>
                    <div className="mt-3 space-y-1 text-sm text-beach-500 font-ocean">
                      <p>📍 Boardwalk Plaza</p>
                      <p>🎵 Live Music & Entertainment</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Day 2 Schedule */}
      <div className="py-16 px-4 bg-gradient-to-b from-seafoam-50 to-sand-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Day 2 - Saturday, June 16
          </h2>
          <div className="space-y-6">
            {/* Event 1 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-beach text-beach-600 mb-2">9:00 AM</div>
                    <Chip color="primary" variant="flat" className="font-ocean">Final Rounds</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-beach text-beach-700 mb-2">Final Competition Rounds</h3>
                    <p className="text-beach-600 font-ocean">Top teams from preliminaries compete in the final rounds. High-stakes performances determine the ultimate winners.</p>
                    <div className="mt-3 space-y-1 text-sm text-beach-500 font-ocean">
                      <p>📍 Main Stage</p>
                      <p>🏆 Final Judging</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Event 2 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-beach text-beach-600 mb-2">3:00 PM</div>
                    <Chip color="success" variant="flat" className="font-ocean">Awards</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-beach text-beach-700 mb-2">Awards Ceremony</h3>
                    <p className="text-beach-600 font-ocean">Celebrate the achievements of all teams with a grand awards ceremony. Special recognition for outstanding performances.</p>
                    <div className="mt-3 space-y-1 text-sm text-beach-500 font-ocean">
                      <p>📍 Grand Ballroom</p>
                      <p>🏆 Trophy Presentation</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Event 3 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-beach text-beach-600 mb-2">5:00 PM</div>
                    <Chip color="secondary" variant="flat" className="font-ocean">Celebration</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-beach text-beach-700 mb-2">Beach Celebration & Afterparty</h3>
                    <p className="text-beach-600 font-ocean">Join us for a beachside celebration with music, dancing, and fireworks. The perfect way to end an amazing weekend!</p>
                    <div className="mt-3 space-y-1 text-sm text-beach-500 font-ocean">
                      <p>📍 Beachfront</p>
                      <p>🎆 Fireworks & Live Music</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 px-4 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Event Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Getting There</h3>
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Address:</strong> Jersey Shore Convention Center, 123 Boardwalk Ave, Atlantic City, NJ</p>
                  <p><strong>Parking:</strong> Free parking available on-site</p>
                  <p><strong>Public Transit:</strong> NJ Transit buses and trains available</p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">🏨</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Accommodations</h3>
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Partner Hotels:</strong> Special rates available for participants</p>
                  <p><strong>Beach Resorts:</strong> Oceanfront accommodations nearby</p>
                  <p><strong>Booking:</strong> Use code "NJNAACH2026" for discounts</p>
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
            Ready to Join the Celebration?
          </h2>
          <p className="text-xl text-beach-100 mb-8 font-ocean">
            Secure your spot at NJ NAACH 3.0 and be part of the most exciting dance competition on the Jersey Shore
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={RouterLink}
              to="/tickets"
              size="lg"
              className="bg-white text-beach-700 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300"
            >
              Buy Tickets Now
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
