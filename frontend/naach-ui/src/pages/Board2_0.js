import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

const Board2_0 = () => {
  const committees = [
    // Row 1: Directors (1 committee, centered, larger)
    {
      name: "Meghna Prakash, Farhan Shah, Jasmine Patel",
      image: "/Board2.0/15.png",
      isLarge: true,
      isCentered: true,
      position: "Directors"
    },
    // Row 2: Senior Advisors, Judging, Registration (3 committees)
    {
      name: "Ananya Marathe, Khush Diora, Nishi Patel",
      image: "/Board2.0/1.png",
      position: "Senior Advisors"
    },
    {
      name: "Saumya Mavuri",
      image: "/Board2.0/2.png",
      position: "Judging"
    },
    {
      name: "Adarsh Patel, Preya Patel",
      image: "/Board2.0/3.png",
      position: "Registration"
    },
    // Row 3: Logistics, Finance, Social (3 committees)
    {
      name: "Ria Sharma, Shatkratu Swarnkar, Riddhi Gandhi",
      image: "/Board2.0/4.png",
      position: "Logistics"
    },
    {
      name: "Himit Shah, Ojal Khubchandani",
      image: "/Board2.0/5.png",
      position: "Finance"
    },
    {
      name: "Kenz Mehaboob, Diya Kumar, Sahil Mittal",
      image: "/Board2.0/8.png",
      position: "Social"
    },
    // Row 4: Public Relations/Graphic Design, Head Liaisons, Tech (3 committees)
    {
      name: "Sana Raza, Srikar Kandulapati, Sancharitha Ramji",
      image: "/Board2.0/13.png",
      position: "Public Relations & Graphic Design"
    },
    {
      name: "Adviatha Kamalakkannan, Nikhilesh Machan",
      image: "/Board2.0/7.png",
      position: "Head Liaisons"
    },
    {
      name: "Nisarg Mehta, Jay Patel",
      image: "/Board2.0/10.png",
      position: "Tech"
    },
    // Row 5: Hospitality, Philanthropy, Creative (3 committees)
    {
      name: "Chandni Shah, Sahaana Shastri, Khushmeet Vassan",
      image: "/Board2.0/14.png",
      position: "Hospitality"
    },
    {
      name: "Vinit Shenoy",
      image: "/Board2.0/9.png",
      position: "Philanthropy"
    },
    {
      name: "Kavya Jain",
      image: "/Board2.0/12.png",
      position: "Creative"
    },
    // Row 6: Sponsorship, Freshman Reps (2 committees)
    {
      name: "Khushi Shah, Aman Thakkar, Netra Patel",
      image: "/Board2.0/11.png",
      position: "Sponsorship"
    },
    {
      name: "Nayan Yadav, Rajvi Maniar, Sanskriti Ramji, Prithvi Sunkavelli",
      image: "/Board2.0/6.png",
      position: "Freshman Representatives"
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
        {/* Committee Image */}
        <div className="w-full h-[85%] relative overflow-hidden group">
          <img
            src={committee.image}
            alt={committee.name}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
            <div className="p-3 sm:p-4 w-full">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                {committee.position || committee.hoverText || committee.name}
              </h3>
            </div>
          </div>
        </div>
        
        {/* Committee Name */}
        <CardBody className="h-[15%] p-2 text-center flex flex-col justify-center overflow-hidden">
          <p className="text-beach-700 font-beach text-xs sm:text-sm line-clamp-1">
            {committee.name}
          </p>
        </CardBody>
      </Card>
    );
  };

  return (
    <PageTemplate>
      <div className="min-h-screen bg-gradient-to-br from-sand-100 via-beach-50 to-seafoam-100 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
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
          
          <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in drop-shadow-lg">
              NAACH 2.0 Board
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-seafoam-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4 leading-relaxed max-w-4xl mx-auto">
              Meet the dedicated team behind NJ NAACH 2.0
            </p>
            
            {/* Enhanced decorative wave line */}
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-transparent via-beach-400 to-transparent rounded-full mx-auto shadow-lg mb-4"></div>
          </div>
        </div>

        {/* Committee Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1: Directors (1 committee, centered, larger) */}
          <div className="flex justify-center mb-16 sm:mb-20 lg:mb-24 mt-8 sm:mt-12 lg:mt-16">
            {renderCommitteeCard(committees[0], 0, true)}
          </div>

          {/* Row 2: Senior Advisors, Judging, Registration (3 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(1, 4).map((committee, index) => 
              renderCommitteeCard(committee, index + 1)
            )}
          </div>

          {/* Row 3: Logistics, Finance, Social (3 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(4, 7).map((committee, index) => 
              renderCommitteeCard(committee, index + 4)
            )}
          </div>

          {/* Row 4: Public Relations/Graphic Design, Head Liaisons, Tech (3 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(7, 10).map((committee, index) => 
              renderCommitteeCard(committee, index + 7)
            )}
          </div>

          {/* Row 5: Hospitality, Philanthropy, Creative (3 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(10, 13).map((committee, index) => 
              renderCommitteeCard(committee, index + 10)
            )}
          </div>

          {/* Row 6: Sponsorship, Freshman Reps (2 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(13, 15).map((committee, index) => 
              renderCommitteeCard(committee, index + 13)
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-white/90 backdrop-blur-md border border-sand-200 shadow-2xl">
            <CardBody className="p-8 sm:p-10 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-beach text-beach-700 mb-6">
                🌊 Get Involved with NJ NAACH
              </h2>
              <p className="text-lg sm:text-xl text-seafoam-600 font-ocean mb-8 leading-relaxed">
                Interested in joining our team or learning more about our committees? 
                Reach out to any committee member or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  as="a"
                  href="/history"
                  className="bg-gradient-to-r from-beach-400 to-beach-500 text-white font-ocean font-semibold px-8 sm:px-10 py-4 sm:py-5 hover:from-beach-500 hover:to-beach-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📚 Back to History
                </Button>
                <Button
                  as="a"
                  href="mailto:info@njnaach.org"
                  className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white font-ocean font-semibold px-8 sm:px-10 py-4 sm:py-5 hover:from-seafoam-500 hover:to-seafoam-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📧 Contact Us
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Board2_0;
