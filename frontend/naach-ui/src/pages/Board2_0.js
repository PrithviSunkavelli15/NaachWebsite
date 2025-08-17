import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Board2_0() {
  const committees = [
    // Executive Committee
    {
      title: "Executive Director",
      icon: "🏮",
      description: "Leading the vision and strategic direction of NJ NAACH 2.0, ensuring every event creates waves of excitement and community impact.",
      color: "from-beach-400 to-beach-500",
      textColor: "text-beach-100",
      focus: "Event Strategy & Community Engagement",
      passion: "Building inclusive dance communities",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "executive@njnaach.org"
    },
    {
      title: "Technical Director", 
      icon: "⚓",
      description: "Overseeing all technical aspects of our events, from sound systems to digital experiences that enhance the dance competition.",
      color: "from-seafoam-400 to-seafoam-500",
      textColor: "text-seafoam-100",
      focus: "Technical Excellence & Innovation",
      passion: "Creating seamless event experiences",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "technical@njnaach.org"
    },
    {
      title: "Creative Director",
      icon: "🧭", 
      description: "Crafting the artistic vision and creative direction that makes NJ NAACH 2.0 a unique and memorable experience for all.",
      color: "from-sand-400 to-sand-500",
      textColor: "text-sand-100",
      focus: "Creative Vision & Brand Experience",
      passion: "Artistic expression through dance",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "creative@njnaach.org"
    },
    
    // Operations Committee
    {
      title: "Operations Manager",
      icon: "🛟",
      description: "Ensuring smooth operations and logistics for every NJ NAACH 2.0 event, from planning to execution with precision.",
      color: "from-coral-400 to-coral-500",
      textColor: "text-coral-100",
      focus: "Event Operations & Logistics",
      passion: "Perfect execution of great ideas",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "operations@njnaach.org"
    },
    {
      title: "Logistics Coordinator",
      icon: "🗺️",
      description: "Managing the intricate details of event planning, transportation, and coordination to ensure everything runs smoothly.",
      color: "from-beach-400 to-beach-500",
      textColor: "text-beach-100",
      focus: "Planning & Coordination",
      passion: "Organizing seamless experiences",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "logistics@njnaach.org"
    },
    {
      title: "Venue Coordinator",
      icon: "🏖️",
      description: "Securing and managing the perfect venues that capture the Jersey Shore atmosphere and accommodate our growing community.",
      color: "from-seafoam-400 to-seafoam-500",
      textColor: "text-seafoam-100",
      focus: "Venue Management & Setup",
      passion: "Creating perfect event spaces",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "venue@njnaach.org"
    },
    
    // Event Committee
    {
      title: "Event Coordinator",
      icon: "🐚",
      description: "Orchestrating the flow of events and ensuring every moment of NJ NAACH 2.0 is engaging and memorable for participants.",
      color: "from-sand-400 to-sand-500",
      textColor: "text-sand-100",
      focus: "Event Flow & Engagement",
      passion: "Creating unforgettable moments",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "events@njnaach.org"
    },
    {
      title: "Stage Manager",
      icon: "🏄",
      description: "Managing stage operations and ensuring smooth transitions between performances for the ultimate viewing experience.",
      color: "from-coral-400 to-coral-500",
      textColor: "text-coral-100",
      focus: "Stage Operations & Transitions",
      passion: "Smooth performance flow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "stage@njnaach.org"
    },
    {
      title: "Entertainment Director",
      icon: "🏐",
      description: "Curating entertainment experiences and ensuring the energy stays high throughout the entire NJ NAACH 2.0 event.",
      color: "from-beach-400 to-beach-500",
      textColor: "text-beach-100",
      focus: "Entertainment & Energy",
      passion: "Keeping the vibe alive",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "entertainment@njnaach.org"
    },
    
    // Marketing & Outreach
    {
      title: "Marketing Director",
      icon: "📢",
      description: "Spreading the word about NJ NAACH 2.0 and building excitement for our events through creative marketing strategies.",
      color: "from-seafoam-400 to-seafoam-500",
      textColor: "text-seafoam-100",
      focus: "Brand Marketing & Promotion",
      passion: "Telling compelling stories",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "marketing@njnaach.org"
    },
    {
      title: "Social Media Manager",
      icon: "📸",
      description: "Managing our digital presence and engaging with the NJ NAACH 2.0 community across all social media platforms.",
      color: "from-sand-400 to-sand-500",
      textColor: "text-sand-100",
      focus: "Digital Engagement & Content",
      passion: "Building online communities",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "social@njnaach.org"
    },
    {
      title: "Community Relations",
      icon: "🌉",
      description: "Building strong partnerships with local communities and organizations to expand our reach across the Jersey Shore.",
      color: "from-coral-400 to-coral-500",
      textColor: "text-coral-100",
      focus: "Community Partnerships & Outreach",
      passion: "Connecting people through dance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "community@njnaach.org"
    },
    
    // Support Committee
    {
      title: "Volunteer Coordinator",
      icon: "🛟",
      description: "Recruiting, training, and managing our amazing volunteers who make NJ NAACH 2.0 events possible and successful.",
      color: "from-beach-400 to-beach-500",
      textColor: "text-beach-100",
      focus: "Volunteer Management & Support",
      passion: "Empowering others to help",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "volunteers@njnaach.org"
    },
    {
      title: "Sponsorship Manager",
      icon: "💎",
      description: "Building valuable partnerships with sponsors and securing resources to make NJ NAACH 2.0 bigger and better each year.",
      color: "from-seafoam-400 to-seafoam-500",
      textColor: "text-seafoam-100",
      focus: "Partnership Development & Growth",
      passion: "Building lasting relationships",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "sponsorship@njnaach.org"
    },
    {
      title: "Philanthropy Director",
      icon: "💙",
      description: "Leading our charitable initiatives and ensuring NJ NAACH 2.0 makes a positive impact on the communities we serve.",
      color: "from-sand-400 to-sand-500",
      textColor: "text-sand-100",
      focus: "Charitable Impact & Giving",
      passion: "Making a difference through dance",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      name: "TBD",
      email: "philanthropy@njnaach.org"
    }
  ];

  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-beach-100 via-seafoam-100 to-sand-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="text-2xl sm:text-4xl">🏖️</div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-xl sm:text-3xl">🎪</div>
        </div>
        <div className="absolute bottom-12 sm:bottom-20 left-4 sm:left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="text-xl sm:text-3xl">⚓</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in">
            Our Board - NAACH 2.0
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Meet the passionate leaders behind NJ NAACH 2.0
          </p>
          <p className="text-base sm:text-lg text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Our 15 committees work together like the tides and waves to create the ultimate dance competition experience
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-beach-400 to-seafoam-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Committee Grid */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 to-sand-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-beach-700 text-center mb-8 sm:mb-12">
            Our Committee Structure
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {committees.map((committee, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Committee Picture with Hover Effect */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={committee.image} 
                    alt={committee.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-3 sm:p-4 w-full">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                        {committee.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardBody className="p-4 sm:p-6 text-center">
                  {/* Person's Name */}
                  <h4 className="text-lg sm:text-xl font-beach text-beach-700 mb-2 sm:mb-3">
                    {committee.name}
                  </h4>
                  
                  {/* Committee Description */}
                  <p className="text-beach-700 font-ocean mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    {committee.description}
                  </p>
                  
                  {/* Focus and Passion */}
                  <div className="space-y-1 sm:space-y-2 text-xs text-beach-600 font-ocean mb-4 sm:mb-6">
                    <p className="font-semibold">🎯 {committee.focus}</p>
                    <p className="font-semibold">💙 {committee.passion}</p>
                  </div>
                  
                  {/* Contact Button */}
                  <Button
                    as="a"
                    href={`mailto:${committee.email}`}
                    size="sm"
                    className="w-full bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 font-ocean font-semibold hover:from-sand-500 hover:to-sand-600 transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                  >
                    📧 Contact {committee.name.split(' ')[0]}
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-beach-700 text-center mb-8 sm:mb-12">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-xl sm:text-2xl font-beach text-beach-700 mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-sm sm:text-base lg:text-lg text-beach-600 font-ocean leading-relaxed">
                  To create an inclusive platform that celebrates South Asian dance culture while fostering 
                  community connections and supporting philanthropic causes across the Jersey Shore region.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💎</div>
                <h3 className="text-xl sm:text-2xl font-beach text-beach-700 mb-3 sm:mb-4">Our Values</h3>
                <ul className="text-sm sm:text-base lg:text-lg text-beach-600 font-ocean space-y-1 sm:space-y-2">
                  <li>• Inclusivity & Diversity</li>
                  <li>• Artistic Excellence</li>
                  <li>• Community Impact</li>
                  <li>• Innovation & Growth</li>
                  <li>• Cultural Preservation</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Back to History Button */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-white mb-4 sm:mb-6">
            Back to History
          </h2>
          <p className="text-lg sm:text-xl text-beach-100 mb-6 sm:mb-8 font-ocean px-4">
            Return to explore our complete timeline and journey
          </p>
          <Button
            as={RouterLink}
            to="/history"
            size="lg"
            className="bg-white text-beach-700 px-6 sm:px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300"
          >
            ← Back to History Timeline
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
}
