import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

const Philanthropy = () => {
  return (
    <PageTemplate>
      <div className="min-h-screen bg-gradient-to-br from-sand-100 via-beach-50 to-seafoam-100">
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
              Philanthropy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-seafoam-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4 leading-relaxed max-w-4xl mx-auto">
              Dancing for a cause, making waves of change in our community
            </p>
            
            {/* Enhanced decorative wave line */}
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-transparent via-beach-400 to-transparent rounded-full mx-auto shadow-lg mb-4"></div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
          <div className="max-w-5xl mx-auto text-center">
            <Card className="bg-white/90 backdrop-blur-md border border-sand-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardBody className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-beach text-beach-700 mb-4 sm:mb-6">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-beach-600 font-ocean leading-relaxed px-4 max-w-4xl mx-auto">
                  At NJ NAACH, we believe that dance has the power to create positive change in our communities. Through our annual competition, we raise awareness and funds for important causes and are proud to announce we are partnering with Project Stree this year!
                </p>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Project Stree Section */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content Side */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-beach text-beach-700 mb-6 sm:mb-8">
                  Project Stree
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-beach-600 font-ocean leading-relaxed mb-8 sm:mb-12">
                  Project Stree's mission is to empower Indian women by increasing awareness about hygiene habits and challenging the stigma around women's health.
                </p>
                
                {/* Social Media Links */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <a 
                    href="https://projectstree.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white rounded-full hover:from-seafoam-500 hover:to-seafoam-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-ocean font-semibold text-base sm:text-lg"
                  >
                    <span className="mr-3 text-lg sm:text-xl">🌐</span>
                    Website
                  </a>
                  <a 
                    href="https://www.instagram.com/projstree" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-coral-400 to-coral-500 text-white rounded-full hover:from-coral-500 hover:to-coral-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-ocean font-semibold text-base sm:text-lg"
                  >
                    <span className="mr-3 text-lg sm:text-xl">📸</span>
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/projectstree/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-beach-400 to-beach-500 text-white rounded-full hover:from-beach-500 hover:to-beach-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-ocean font-semibold text-base sm:text-lg"
                  >
                    <span className="mr-3 text-lg sm:text-xl">📘</span>
                    Facebook
                  </a>
                </div>
              </div>
              
              {/* Image Side */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative elements around image */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-seafoam-300 to-coral-300 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-gradient-to-r from-beach-300 to-sand-300 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  <img 
                    src="/images/ProjectStree.jpg" 
                    alt="Project Stree" 
                    className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-beach-500 via-seafoam-500 to-coral-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-white mb-6 sm:mb-8">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-ocean mb-8 sm:mb-12 leading-relaxed">
              A portion of funds NJ NAACH raises goes towards the cause and direct donations can be made through their website.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="/tickets" 
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-beach-700 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-ocean font-semibold text-base sm:text-lg"
              >
                Get Your Tickets
              </a>
              <a 
                href="https://projectstree.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white/20 text-white border-2 border-white rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-ocean font-semibold text-base sm:text-lg"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Philanthropy;
