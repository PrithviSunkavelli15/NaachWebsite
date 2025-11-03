import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

const Board1_0 = () => {
  const committees = [
    // Row 1: Directors (1 committee, centered, larger)
    {
      name: "Khush Diora, Ananya Marathe, Nishi Patel",
      image: "/Board1.0/directors1.0.jpg",
      isLarge: true,
      isCentered: true,
      position: "Directors"
    },
    // Row 2: Senior Advisor, Logistics, Registration (3 committees)
    {
      name: "Siddhi Joshi",
      image: "/Board1.0/senioradvisor1.0.jpg",
      position: "Senior Advisor"
    },
    {
      name: "Isha Shah, Jasmine Patel, Viren Sharma",
      image: "/Board1.0/logistics1.0.jpg",
      position: "Logistics"
    },
    {
      name: "Alaka Rajesh, Alisha Patel",
      image: "/Board1.0/registration1.0.jpg",
      position: "Registration"
    },
    // Row 3: Head Liaisons, PR/Graphic Design, Finance (3 committees)
    {
      name: "Amoli Kapadia, Vaibhavi Kapadia",
      image: "/Board1.0/headliaison1.0.jpg",
      position: "Head Liaisons"
    },
    {
      name: "Sareena Patel, Harshil Thaker, Navya Vij",
      image: "/Board1.0/pr:graphicdesign1.0.jpg",
      position: "PR/Graphic Design"
    },
    {
      name: "Ojal Khubchandani, Samiha Hasan",
      image: "/Board1.0/finance1.0.jpg",
      position: "Finance"
    },
    // Row 4: Hospitality, Sponsorship, Tech (3 committees)
    {
      name: "Nami Jain, Vidhi Shah, Saumya Mauvuri",
      image: "/Board1.0/hospitality1.0.jpg",
      position: "Hospitality"
    },
    {
      name: "Param Parikh, Preya Patel",
      image: "/Board1.0/sponsorship1.0.jpg",
      position: "Sponsorship"
    },
    {
      name: "Bhavin Mistry, Farhan Shah",
      image: "/Board1.0/tech1.0.jpg",
      position: "Tech"
    },
    // Row 5: Philanthropy, Judging, Social (3 committees)
    {
      name: "Khushmeet Vassan",
      image: "/Board1.0/philanthropy1.0.jpg",
      position: "Philanthropy"
    },
    {
      name: "Aman Patel",
      image: "/Board1.0/judging1.0.jpg",
      position: "Judging"
    },
    {
      name: "Meghna Prakash, Kush Bansal, Supriya Puthezhath",
      image: "/Board1.0/social1.0.jpg",
      position: "Social"
    }
  ];

  const renderCommitteeCard = (committee, index, isLarge = false) => {
    const cardSize = isLarge ? "w-96 h-96 sm:w-[36rem] sm:h-[28rem] lg:w-[48rem] lg:h-[28rem]" : "w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96";
    
    return (
      <Card
        key={index}
        className={`${cardSize} bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Committee Picture with Hover Effect */}
        <div className="relative h-[85%] overflow-hidden group">
          <img 
            src={committee.image} 
            alt={committee.position}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
            <div className="p-3 sm:p-4 w-full">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                {committee.position}
              </h3>
            </div>
          </div>
        </div>
        
        <CardBody className="h-[15%] p-2 text-center flex flex-col justify-center overflow-hidden">
          {/* Member Names */}
          <p className="text-beach-700 font-beach text-xs sm:text-sm line-clamp-1">
            {committee.name.split(', ').map((name, nameIndex) => {
              const nameWithNonBreakingSpaces = name.replace(/ /g, '\u00A0');
              return (
                <span key={nameIndex}>
                  {nameWithNonBreakingSpaces}
                  {nameIndex < committee.name.split(', ').length - 1 && <span>, </span>}
                </span>
              );
            })}
          </p>
        </CardBody>
      </Card>
    );
  };

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
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in">
            NAACH 1.0 Board
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Meet the inaugural team that started it all
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-beach-400 to-coral-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Board Members */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 via-beach-50 to-seafoam-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Row 1: Directors (Large, Centered) */}
          <div className="flex justify-center mb-8 sm:mb-12">
            {renderCommitteeCard(committees[0], 0, true)}
          </div>

          {/* Row 2: Senior Advisor, Logistics, Registration */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {committees.slice(1, 4).map((committee, index) => renderCommitteeCard(committee, index + 1))}
          </div>

          {/* Row 3: Head Liaisons, PR/Graphic Design, Finance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {committees.slice(4, 7).map((committee, index) => renderCommitteeCard(committee, index + 4))}
          </div>

          {/* Row 4: Hospitality, Sponsorship, Tech */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {committees.slice(7, 10).map((committee, index) => renderCommitteeCard(committee, index + 7))}
          </div>

          {/* Row 5: Philanthropy, Judging, Social */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {committees.slice(10, 13).map((committee, index) => renderCommitteeCard(committee, index + 10))}
          </div>
        </div>
      </div>

      {/* Navigation to Other Board Pages */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-white mb-6 sm:mb-8">
            Explore Other Boards
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as="a"
              href="/board-2-0"
              size="lg"
              className="bg-white text-beach-700 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300"
            >
              NAACH 2.0 Board
            </Button>
            <Button
              as="a"
              href="/board"
              size="lg"
              className="bg-sand-400 text-sand-900 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-500 transition-all duration-300"
            >
              Current Board
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Board1_0;
