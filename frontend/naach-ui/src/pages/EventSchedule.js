import React from "react";
import { Link as RouterLink } from "react-router-dom";
<<<<<<< HEAD
import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function EventSchedule() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-beach-100 via-seafoam-100 to-sand-100 py-20 px-4 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-20 h-20 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-seafoam-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-beach text-beach-700 mb-6 animate-fade-in">
            Event Schedule
          </h1>
          <p className="text-xl md:text-2xl text-beach-600 font-ocean mb-8 animate-slide-up">
            Mark your calendars for NJ NAACH 3.0 - A weekend of dance, community, and Jersey Shore vibes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-beach-400 to-seafoam-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Event Overview */}
      <div className="py-16 px-4 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardBody className="p-8">
              <div className="text-6xl mb-6">📅</div>
              <h2 className="text-3xl md:text-4xl font-beach text-beach-700 mb-6">
                NJ NAACH 3.0
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-beach text-beach-600 mb-2">🗓️ Date</div>
                  <p className="text-beach-700 font-ocean">June 15-16, 2026</p>
                </div>
                <div>
                  <div className="text-2xl font-beach text-beach-600 mb-2">📍 Location</div>
                  <p className="text-beach-700 font-ocean">Jersey Shore Convention Center</p>
                </div>
                <div>
                  <div className="text-2xl font-beach text-beach-600 mb-2">⏰ Time</div>
                  <p className="text-beach-700 font-ocean">10:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <div className="text-2xl font-beach text-beach-600 mb-2">🎫 Tickets</div>
                  <p className="text-beach-700 font-ocean">Starting at $25</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Day 1 Schedule */}
      <div className="py-16 px-4 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Day 1 - Friday, June 15
          </h2>
          <div className="space-y-6">
            {/* Event 1 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-beach text-beach-600 mb-2">10:00 AM</div>
                    <Chip color="primary" variant="flat" className="font-ocean">Registration Opens</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-beach text-beach-700 mb-2">Team Check-in & Registration</h3>
                    <p className="text-beach-600 font-ocean">Teams arrive and complete registration process. Collect competition materials and finalize team information.</p>
                    <div className="mt-3 space-y-1 text-sm text-beach-500 font-ocean">
                      <p>📍 Main Lobby</p>
                      <p>👥 All Teams Required</p>
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
                    <div className="text-3xl font-beach text-beach-600 mb-2">12:00 PM</div>
                    <Chip color="secondary" variant="flat" className="font-ocean">Lunch Break</Chip>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-beach text-beach-700 mb-2">Beachside Lunch & Networking</h3>
                    <p className="text-beach-600 font-ocean">Enjoy a delicious lunch with ocean views while networking with other teams and organizers.</p>
                    <div className="mt-3 space-y-1 text-sm text-beach-500 font-ocean">
                      <p>📍 Beachside Pavilion</p>
                      <p>🍽️ Catered Lunch Included</p>
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
=======
import { Button } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

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

// ───────────────────────────────────────────────────────────────────────────────
// ⚠️  POST-PRODUCTION TODO: UPDATE THIS PAGE ⚠️
// 
// This page currently shows a "Coming Soon" placeholder. During post-production,
// this needs to be replaced with:
// - Event timeline and schedule display
// - Countdown timer to main event
// - Workshop and training session details
// - Registration deadlines and important dates
// - Venue information and directions
// - Integration with calendar systems
// - Real-time event updates and notifications
// 
// Priority: HIGH - This is a key user engagement feature
// ───────────────────────────────────────────────────────────────────────────────

export default function EventSchedule() {
  return (
    <PageTemplate>
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Event Schedule
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay updated with all the important dates, deadlines, and events
          </p>
        </div>
      </section>

      {/* ───────────────────────── Coming Soon Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl rounded-2xl p-12">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Schedule Coming Soon
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're working hard to bring you a comprehensive event schedule with all the important dates, 
              deadlines, and exciting events. Check back soon for the complete timeline!
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    📅 What's Coming
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Registration deadlines</li>
                    <li>• Workshop schedules</li>
                    <li>• Competition timeline</li>
                    <li>• Award ceremonies</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🎯 Features
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Real-time updates</li>
                    <li>• Calendar integration</li>
                    <li>• Mobile notifications</li>
                    <li>• Venue directions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button
                as={RouterLink}
                to="/"
                size="lg"
                variant="bordered"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
    </PageTemplate>
  );
}
