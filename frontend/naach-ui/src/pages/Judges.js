import React from "react";
import PageTemplate from "../components/PageTemplate";

export default function Judges() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background beach elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-beach-50 to-seafoam-100"></div>
        
        {/* Floating beach elements */}
        <div className="absolute top-20 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-seafoam-300 to-coral-300 rounded-full opacity-60 animate-float">
          <span className="text-2xl sm:text-3xl">🏖️</span>
        </div>
        <div className="absolute top-32 right-16 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-beach-300 to-sand-300 rounded-full opacity-60 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
          <span className="text-lg sm:text-xl">🌊</span>
        </div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 sm:w-14 sm:h-14 lg:w-18 lg:h-18 bg-gradient-to-r from-coral-300 to-seafoam-300 rounded-full opacity-60 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
          <span className="text-xl sm:text-2xl">🐚</span>
        </div>
        
        {/* Additional beach elements */}
        <div className="absolute top-16 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-70 animate-float" style={{ animationDelay: '0.5s' }}>
          <span className="text-sm sm:text-base">⭐</span>
        </div>
        <div className="absolute bottom-16 right-1/4 w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r from-pink-300 to-coral-300 rounded-full opacity-70 animate-float" style={{ animationDelay: '1.5s' }}>
          <span className="text-xs sm:text-sm">💎</span>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in drop-shadow-lg">
            Judges
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-seafoam-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4 leading-relaxed max-w-4xl mx-auto">
            Meet the distinguished panel of dance experts and industry professionals
          </p>
          
          {/* Enhanced decorative wave line */}
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-transparent via-beach-400 to-transparent rounded-full mx-auto shadow-lg mb-4">
          </div>
        </div>
      </div>

      {/* Stay Tuned Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-sand-200 shadow-2xl animate-fade-in">
            {/* Large emoji */}
            <div className="text-8xl sm:text-9xl mb-6 sm:mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
              🎭
            </div>
            
            {/* Main message */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lobster text-beach-700 mb-6 sm:mb-8 animate-slide-up">
              Stay Tuned!
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-8 sm:mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We're working hard to bring you an incredible lineup of judges for this year's competition.
            </p>
            
            {/* Additional info */}
            <div className="bg-gradient-to-r from-beach-100 to-seafoam-100 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-base sm:text-lg text-beach-700 font-comfortaa font-semibold mb-2">
                🎪 Coming Soon
              </p>
              <p className="text-sm sm:text-base text-beach-600 font-ocean">
                Follow us on social media and check back regularly for updates on our judging panel!
              </p>
            </div>
            
            {/* Call to action */}
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-base sm:text-lg text-beach-600 font-ocean mb-4">
                In the meantime, explore our other pages to learn more about the competition!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/teams" 
                  className="inline-block bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bungee font-semibold hover:from-sand-500 hover:to-sand-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  View Teams
                </a>
                <a 
                  href="/schedule" 
                  className="inline-block bg-gradient-to-r from-beach-400 to-beach-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bungee font-semibold hover:from-beach-500 hover:to-beach-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Event Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}