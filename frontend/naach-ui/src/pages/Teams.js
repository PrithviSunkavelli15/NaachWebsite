import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Teams() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-seafoam-100 via-coral-100 to-beach-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="text-2xl sm:text-4xl">🎭</div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-xl sm:text-3xl">🏖️</div>
        </div>
        <div className="absolute bottom-12 sm:bottom-20 left-4 sm:left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="text-xl sm:text-3xl">🎪</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-coral-700 mb-4 sm:mb-6 animate-fade-in">
            Participating Teams
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-coral-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Stay on the lookout for the participating teams for NJ NAACH 2026
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-coral-400 to-seafoam-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardBody className="p-6 sm:p-8 lg:p-12">
              <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">🎭</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-coral-700 mb-4 sm:mb-6">Teams Coming Soon</h2>
              <p className="text-base sm:text-lg lg:text-xl text-coral-600 font-ocean mb-6 sm:mb-8 leading-relaxed text-center max-w-3xl mx-auto px-4">
                We're currently finalizing the participating teams for NJ NAACH 2026. Check back soon to meet the incredible dance teams that will be competing in this year's event!
              </p>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-coral-400 to-seafoam-400 mx-auto rounded-full mb-6 sm:mb-8"></div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Check Out Past Participants Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-seafoam-50 to-coral-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border border-seafoam-200 shadow-xl">
            <CardBody className="p-6 sm:p-8">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🏆</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-beach text-seafoam-700 mb-4 sm:mb-6">
                In the Meantime...
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-seafoam-600 font-ocean mb-6 sm:mb-8 leading-relaxed px-4">
                While we finalize this year's participating teams, check out our past participants 
                and winners to see the incredible talent that has graced the NJ NAACH stage!
              </p>
              
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-seafoam-400 to-coral-400 mx-auto rounded-full mb-6 sm:mb-8"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-seafoam-50 to-seafoam-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-seafoam-200">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">👑</div>
                  <h3 className="text-base sm:text-lg font-beach text-seafoam-700 mb-2">Past Champions</h3>
                  <p className="text-xs sm:text-sm text-seafoam-600 font-ocean">Discover the teams that took home the top prizes</p>
                </div>
                
                <div className="bg-gradient-to-br from-coral-50 to-coral-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-coral-200">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🌟</div>
                  <h3 className="text-base sm:text-lg font-beach text-coral-700 mb-2">Memorable Performances</h3>
                  <p className="text-xs sm:text-sm text-coral-600 font-ocean">Relive the most spectacular dance moments</p>
                </div>
                
                <div className="bg-gradient-to-br from-beach-50 to-beach-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-beach-200 sm:col-span-2 lg:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📚</div>
                  <h3 className="text-base sm:text-lg font-beach text-beach-700 mb-2">Event History</h3>
                  <p className="text-xs sm:text-sm text-beach-600 font-ocean">Learn about the evolution of NJ NAACH</p>
                </div>
              </div>
              
              <Button
                as={RouterLink}
                to="/history"
                size="lg"
                className="bg-gradient-to-r from-seafoam-400 to-coral-400 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-ocean font-semibold hover:from-seafoam-500 hover:to-coral-500 transform hover:scale-105 transition-all duration-300"
              >
                Explore Our History
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-beach-700 mb-6 sm:mb-8">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl text-beach-600 font-ocean mb-8 sm:mb-12 px-4">
            Follow us for the latest updates on this years competition on our social media platforms
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-xl sm:text-2xl font-beach text-beach-700 mb-3 sm:mb-4">Follow Us on TikTok</h3>
                <p className="text-sm sm:text-base lg:text-lg text-beach-600 font-ocean mb-4 sm:mb-6">
                  Watch behind-the-scenes content, dance highlights, and exclusive competition moments
                </p>
                <Button
                  as="a"
                  href="https://www.tiktok.com/@nj.naach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-400 to-pink-500 text-white font-ocean font-semibold hover:from-pink-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 w-full pt-2"
                >
                  🎵 Follow on TikTok
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📺</div>
                <h3 className="text-xl sm:text-2xl font-beach text-beach-700 mb-3 sm:mb-4">Subscribe on YouTube</h3>
                <p className="text-sm sm:text-base lg:text-lg text-beach-600 font-ocean mb-4 sm:mb-6">
                  Full performances and competition highlights
                </p>
                <Button
                  as="a"
                  href="https://www.youtube.com/@NJNaach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-400 to-red-500 text-white font-ocean font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300 w-full pt-2"
                >
                  ▶️ Subscribe on YouTube
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📸</div>
                <h3 className="text-xl sm:text-2xl font-beach text-beach-700 mb-3 sm:mb-4">Follow on Instagram</h3>
                <p className="text-sm sm:text-base lg:text-lg text-beach-600 font-ocean mb-4 sm:mb-6">
                  Stunning photos, stories, and updates from the NJ NAACH community
                </p>
                <Button
                  as="a"
                  href="https://www.instagram.com/njnaach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-400 to-purple-500 text-white font-ocean font-semibold hover:from-purple-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 w-full pt-2"
                >
                  📷 Follow on Instagram
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔗</div>
                <h3 className="text-xl sm:text-2xl font-beach text-beach-700 mb-3 sm:mb-4">All Our Links</h3>
                <p className="text-sm sm:text-base lg:text-lg text-beach-600 font-ocean mb-4 sm:mb-6">
                  Find everything NJ NAACH in one place - tickets, merch, and more
                </p>
                <Button
                  as="a"
                  href="https://linktr.ee/njnaach?fbclid=PAZXh0bgNhZW0CMTEAAaYg7q7Bn-rcz1MuT5LSq_kxEJOjKstkbTu0klepy_VbaA_e9xKo1aF_YHw_aem_XwFPCHJiDFw3K1eh2P65sQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-400 to-green-500 text-white font-ocean font-semibold hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition-all duration-300 w-full pt-2"
                >
                  🌐 View All Links
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
} 