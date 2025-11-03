import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@heroui/react';
import PageTemplate from '../components/PageTemplate';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('February 21, 2026 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/beach-boardwalk.jpg')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-beach-900/40 via-beach-800/30 to-sand-900/50" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-4 sm:left-10 animate-float">
          <div className="text-2xl sm:text-4xl">🏖️</div>
        </div>
        <div className="absolute top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-xl sm:text-3xl">🎪</div>
        </div>
        <div className="absolute bottom-20 left-4 sm:left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="text-xl sm:text-3xl">⚓</div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 sm:mb-12 leading-tight drop-shadow-2xl animate-fade-in font-lobster" 
              style={{ color: "#FFE15D", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
            NJ NAACH
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-lg mt-2 font-permanent">3.0</span>
          </h1>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="/tickets" 
              className="inline-block bg-gradient-to-r from-green-200 to-green-300 text-green-900 px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl text-base sm:text-lg lg:text-xl font-bold hover:from-green-300 hover:to-green-400 transform hover:scale-105 transition-all duration-300 font-bungee border-2 border-green-200 cursor-pointer no-underline"
            >
              TICKETS
            </a>
            
            <a 
              href="/schedule" 
              className="inline-block bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-900 px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl text-base sm:text-lg lg:text-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 font-bungee border-2 border-yellow-200 cursor-pointer no-underline"
            >
              EVENT SCHEDULE
            </a>
            
            <a 
              href="/teams" 
              className="inline-block bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900 px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl text-base sm:text-lg lg:text-xl font-bold hover:from-blue-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 font-bungee border-2 border-blue-200 cursor-pointer no-underline"
            >
              TEAMS INFO
            </a>
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 to-sand-50 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="text-2xl sm:text-4xl">🏖️</div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-xl sm:text-3xl">🎡</div>
        </div>
        <div className="absolute bottom-12 sm:bottom-20 left-4 sm:left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="text-xl sm:text-3xl">🎪</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-beach text-beach-700 mb-6 sm:mb-8 animate-fade-in">
            Countdown to NJ NAACH 3.0
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-8 sm:mb-12 animate-slide-up px-4">
            Rutgers University's Premier Dance Competition is Coming Soon!
          </p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-sand-200 to-sand-300 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 border-2 sm:border-4 border-sand-400 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-carnival text-sand-800 mb-1 sm:mb-2">{countdown.days}</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-ocean text-sand-700 font-semibold">DAYS</div>
            </div>
            
            <div className="bg-gradient-to-br from-beach-200 to-beach-300 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 border-2 sm:border-4 border-beach-400 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-carnival text-beach-800 mb-1 sm:mb-2">{countdown.hours}</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-ocean text-beach-700 font-semibold">HOURS</div>
            </div>
            
            <div className="bg-gradient-to-br from-seafoam-200 to-seafoam-300 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 border-2 sm:border-4 border-seafoam-400 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-carnival text-seafoam-800 mb-1 sm:mb-2">{countdown.minutes}</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-ocean text-seafoam-700 font-semibold">MINUTES</div>
            </div>
            
            <div className="bg-gradient-to-br from-coral-200 to-coral-300 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 border-2 sm:border-4 border-coral-400 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-carnival text-coral-800 mb-1 sm:mb-2">{countdown.seconds}</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-ocean text-coral-700 font-semibold">SECONDS</div>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-sand-200 shadow-xl animate-slide-up mx-4" style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-beach text-beach-700 mb-3 sm:mb-4">
                  🎭 February 21st, 2026
                </h3>
                <p className="text-base sm:text-lg text-beach-600 font-ocean mb-3 sm:mb-4 leading-relaxed">
                  Get ready for the most exciting dance competition of the year! 
                  Experience the energy, passion, and talent that makes NJ NAACH 
                  the premier event in New Jersey.
                </p>
                <div className="flex items-center justify-center md:justify-start text-beach-600 font-ocean">
                  <span className="text-xl sm:text-2xl mr-2">📍</span>
                  <span className="text-sm sm:text-base">Rutgers University, New Brunswick</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl sm:text-8xl mb-3 sm:mb-4 animate-bounce" style={{ animationDuration: '2s' }}>🎪</div>
                <p className="text-lg sm:text-xl font-ocean text-beach-600 font-semibold">
                  Where Dance Meets the Boardwalk
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-8 sm:mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg sm:text-xl text-beach-600 font-ocean mb-4 sm:mb-6">
              Don't miss out on this spectacular event!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                as={RouterLink}
                to="/tickets"
                size="lg"
                className="bg-gradient-to-r from-coral-400 to-coral-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-comfortaa font-semibold hover:from-coral-500 hover:to-coral-600 transform hover:scale-105 transition-all duration-300"
              >
                🎫 Get Your Tickets
              </Button>
              <Button
                as={RouterLink}
                to="/schedule"
                size="lg"
                variant="bordered"
                className="border-2 border-beach-400 text-beach-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-comfortaa font-semibold hover:bg-beach-400 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                📅 View Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
