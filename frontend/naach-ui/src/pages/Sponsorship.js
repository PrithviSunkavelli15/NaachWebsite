import React from "react";
import { Card, CardBody } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Sponsorship() {
  const partners = [
    { 
      name: "Brez", 
      logo: "/images/Brez.png", 
      website: "https://www.drinkbrez.com/" 
    },
    { 
      name: "Bubblr", 
      logo: "/images/Bubblr.jpeg", 
      website: "https://www.drinkbubblr.com/" 
    },
    { 
      name: "Nuun Hydration", 
      logo: "/images/NuunHydration.png", 
      website: "https://nuunlife.com/" 
    }
  ];

  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-beach-100 via-seafoam-100 to-sand-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-8 sm:top-12 left-6 sm:left-12 animate-float">
          <div className="text-4xl sm:text-6xl">🏖️</div>
        </div>
        <div className="absolute top-16 sm:top-24 right-6 sm:right-16 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-3xl sm:text-5xl">🌊</div>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 animate-float" style={{ animationDelay: '4s' }}>
          <div className="text-3xl sm:text-5xl">⚓</div>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 right-6 sm:right-12 animate-float" style={{ animationDelay: '3s' }}>
          <div className="text-3xl sm:text-5xl">🐚</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in">
            Our Partners
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Thank you to all of our amazing partners that help put our show together!
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-beach-400 to-seafoam-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-sand-50 via-beach-50 to-seafoam-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-r from-beach-300 to-seafoam-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-coral-300 to-sand-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap justify-center gap-20 sm:gap-32 lg:gap-40">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="text-center">
                  <Card 
                    className="w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 bg-white/90 backdrop-blur-sm border-2 border-beach-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden relative mb-4"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <CardBody className="p-4 flex items-center justify-center relative z-10">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    </CardBody>
                  </Card>
                  <h3 className="text-lg sm:text-xl font-beach text-beach-700">{partner.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-beach-500 via-seafoam-500 to-coral-500 py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-beach text-white mb-6 sm:mb-8 drop-shadow-lg">
            Interested in Partnering?
          </h2>
          <p className="text-xl sm:text-2xl text-beach-100 mb-8 sm:mb-10 font-ocean px-4 leading-relaxed">
            Join us in supporting the vibrant South Asian dance community! Contact us to learn more about partnership opportunities.
          </p>
          
          <a
            href="mailto:sponsorship@njnaach.com"
            className="inline-block bg-white text-beach-700 px-10 py-5 rounded-full font-ocean font-bold hover:bg-sand-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-xl"
          >
            📧 Contact Us
          </a>
        </div>
      </div>

    </PageTemplate>
  );
}
