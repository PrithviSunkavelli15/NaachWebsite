import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Board() {
  const committees = [
    {
      title: "Directors",
      image: "/Board3.0/Directors.jpeg",
      members: [
        { name: "Adarsh Patel" },
        { name: "Khushmeet Vassan" },
        { name: "Himit Shah" }
      ],
      committeeEmail: "directors@njnaach.com"
    },
    {
      title: "Logistics",
      image: "/Board3.0/Logistics Committee Picture .jpg",
      members: [
        { name: "Ria Sharma" },
        { name: "Shatkratu Swarnkar" },
        { name: "Riddhi Gandhi" }
      ],
      committeeEmail: "logistics@njnaach.com"
    },
    {
      title: "Finance",
      image: "/Board3.0/Finance Chairs.jpg",
      members: [
        { name: "Nikhilesh Machan" },
        { name: "Ashna Karthik" }
      ],
      committeeEmail: "finance@njnaach.com"
    },
    {
      title: "Head Liaison",
      image: "/Board3.0/HeadLiaisons.jpeg",
      members: [
        { name: "Kriti Tyagi" },
        { name: "Netra Patel" },
        { name: "Maitri Bhupatkar" }
      ],
      committeeEmail: "headliaisons@njnaach.com"
    },
    {
      title: "Board Rep",
      image: "/Board3.0/Board Representatives.jpg",
      members: [
        { name: "Nayan Yadav" },
        { name: "Khushi Shah" },
        { name: "Kenz Mehaboob" }
      ],
      committeeEmail: "boardreps@njnaach.com"
    },
    {
      title: "Sponsorship",
      image: "/Board3.0/Sponsorship Chairs.jpg",
      members: [
        { name: "Vinit Shenoy" },
        { name: "Nisarg Mehta" }
      ],
      committeeEmail: "sponsorship@njnaach.com"
    },
    {
      title: "Tech",
      image: "/Board3.0/Tech.JPG",
      members: [
        { name: "Sahil Mittal" },
        { name: "Kavya Jain" }
      ],
      committeeEmail: "tech@njnaach.com"
    },
    {
      title: "Registration",
      image: "/Board3.0/Registration Chairs.jpeg",
      members: [
        { name: "Prithvi Sunkavelli" },
        { name: "Purva Unhale" }
      ],
      committeeEmail: "registration@njnaach.com"
    },
    {
      title: "Philanthropy",
      image: "/Board3.0/Philanthropy Chair.jpg",
      members: [
        { name: "Siya Deshmukh" }
      ],
      committeeEmail: "philanthropy@njnaach.com"
    },
    {
      title: "Hospitality",
      image: "/Board3.0/Hosp.jpg",
      members: [
        { name: "Anvi Pofale" },
        { name: "Chandni Shah" },
        { name: "Preya Patel" }
      ],
      committeeEmail: "hospitality@njnaach.com"
    },
    {
      title: "Public Relations",
      image: "/Board3.0/PR chairs.jpg",
      members: [
        { name: "Sanskriti Ramji" },
        { name: "Sana Raza" },
        { name: "Disha Patel" }
      ],
      committeeEmail: "publicrelations@njnaach.com"
    },
    {
      title: "Social",
      image: "/Board3.0/Social Chairs.jpeg",
      members: [
        { name: "Diya Kumar" },
        { name: "Laksh Panchal" },
        { name: "Sahaana Shastri" }
      ],
      committeeEmail: "social@njnaach.com"
    },
    {
      title: "Judging",
      image: "/Board3.0/Judging Chairs.jpeg",
      members: [
        { name: "Nishi Patel" },
        { name: "Sancharitha Ramji" }
      ],
      committeeEmail: "judging@njnaach.com"
    },
    {
      title: "Freshmen Rep",
      image: "/Board3.0/Freshmen Representative Board.jpg",
      members: [
        { name: "Rohan Shah" },
        { name: "Mehakjot Kaur" }
      ],
      committeeEmail: null // No email provided for this committee
    },
    {
      title: "Senior Advisors",
      image: "/Board3.0/Senior Advisors.JPG_",
      members: [
        { name: "Meghna Prakash" },
        { name: "Jasmine Patel" }
      ],
      committeeEmail: "senioradvisors@njnaach.com"
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
            Our Board
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Meet the dedicated committees behind NJ NAACH 3.0
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
          {/* Row 1: Directors (1 committee, centered, larger) */}
          <div className="flex justify-center mb-16 sm:mb-20 lg:mb-24 mt-8 sm:mt-12 lg:mt-16">
            <Card 
              className="w-96 h-96 sm:w-[36rem] sm:h-[28rem] lg:w-[48rem] lg:h-[28rem] bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden"
            >
              {/* Committee Picture with Hover Effect */}
              <div className="relative h-[92%] overflow-hidden group">
                <img 
                  src={committees[0].image} 
                  alt={committees[0].title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  style={{ objectPosition: 'center 65%' }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-3 sm:p-4 w-full">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                      {committees[0].title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <CardBody className="h-[15%] p-1 text-center flex flex-col justify-center overflow-hidden">
                {/* Member Names */}
                <p className="text-beach-700 font-beach text-xs sm:text-sm mb-1 line-clamp-1">
                  {committees[0].members.map((member, memberIndex) => {
                    const nameWithNonBreakingSpaces = member.name.replace(/ /g, '\u00A0');
                    return (
                      <span key={memberIndex}>
                        {nameWithNonBreakingSpaces}
                        {memberIndex < committees[0].members.length - 1 && <span>, </span>}
                      </span>
                    );
                  })}
                </p>
                
                {/* Committee Email Link */}
                {committees[0].committeeEmail && (
                  <a
                    href={`mailto:${committees[0].committeeEmail}`}
                    className="text-xl hover:scale-110 transition-transform duration-200 inline-block leading-none"
                    title="Email Directors"
                    style={{ lineHeight: '0.5', marginTop: '-4px' }}
                  >
                    📧
                  </a>
                )}
              </CardBody>
            </Card>
          </div>

          {/* Row 2: Logistics, Finance, Head Liaison (3 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(1, 4).map((committee, index) => (
              <Card 
                key={index}
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96 bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Committee Picture with Hover Effect */}
                <div className="relative h-[85%] overflow-hidden group">
                  <img 
                    src={committee.image} 
                    alt={committee.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    style={committee.title === "Logistics" ? { transform: 'scale(1.3)', objectPosition: 'center 80%' } : {}}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-3 sm:p-4 w-full">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                        {committee.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardBody className="h-[15%] p-2 text-center flex flex-col justify-center overflow-hidden">
                  {/* Member Names */}
                  <p className="text-beach-700 font-beach text-xs sm:text-sm mb-1 line-clamp-1">
                    {committee.members.map((member, memberIndex) => {
                      const nameWithNonBreakingSpaces = member.name.replace(/ /g, '\u00A0');
                      return (
                        <span key={memberIndex}>
                          {nameWithNonBreakingSpaces}
                          {memberIndex < committee.members.length - 1 && <span>, </span>}
                        </span>
                      );
                    })}
                  </p>
                  
                  {/* Committee Email Link */}
                  {committee.committeeEmail && (
                    <a
                      href={`mailto:${committee.committeeEmail}`}
                      className="text-xl hover:scale-110 transition-transform duration-200 inline-block leading-none"
                      title={`Email ${committee.title}`}
                      style={{ lineHeight: '0.5', marginTop: '-4px' }}
                    >
                      📧
                    </a>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Row 3: Board Rep, Sponsorship, Tech (3 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(4, 7).map((committee, index) => (
              <Card 
                key={index}
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96 bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {/* Committee Picture with Hover Effect */}
                <div className="relative h-[85%] overflow-hidden group">
                  <img 
                    src={committee.image} 
                    alt={committee.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    style={
                      committee.title === "Board Rep" ? { objectPosition: 'center 80%' } :
                      committee.title === "Tech" ? {transform: 'scale(1.3)', objectPosition: 'center 90%' } :
                      committee.title === "Sponsorship" ? { transform: 'scale(1.8)', objectPosition: 'center 80%' } : {}
                    }
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-3 sm:p-4 w-full">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                        {committee.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardBody className="h-[15%] p-2 text-center flex flex-col justify-center overflow-hidden">
                  {/* Member Names */}
                  <p className="text-beach-700 font-beach text-xs sm:text-sm mb-1 line-clamp-1">
                    {committee.members.map((member, memberIndex) => {
                      const nameWithNonBreakingSpaces = member.name.replace(/ /g, '\u00A0');
                      return (
                        <span key={memberIndex}>
                          {nameWithNonBreakingSpaces}
                          {memberIndex < committee.members.length - 1 && <span>, </span>}
                        </span>
                      );
                    })}
                  </p>
                  
                  {/* Committee Email Link */}
                  {committee.committeeEmail && (
                    <a
                      href={`mailto:${committee.committeeEmail}`}
                      className="text-xl hover:scale-110 transition-transform duration-200 inline-block leading-none"
                      title={`Email ${committee.title}`}
                      style={{ lineHeight: '0.5', marginTop: '-4px' }}
                    >
                      📧
                    </a>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Row 4: Registration, Philanthropy, Hospitality (3 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(7, 10).map((committee, index) => (
              <Card 
                key={index}
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96 bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 7) * 0.1}s` }}
              >
                {/* Committee Picture with Hover Effect */}
                <div className="relative h-[85%] overflow-hidden group">
                  <img 
                    src={committee.image} 
                    alt={committee.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    style={
                      committee.title === "Registration" ? { transform: 'scale(1.3)', transformOrigin: 'center 30%' } :
                      committee.title === "Philanthropy" ? { transform: 'scale(1.3)', objectPosition: 'center 80%' } :
                      committee.title === "Hospitality" ? { objectPosition: 'center 80%' } : {}
                    }
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-3 sm:p-4 w-full">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                        {committee.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardBody className="h-[15%] p-2 text-center flex flex-col justify-center overflow-hidden">
                  {/* Member Names */}
                  <p className="text-beach-700 font-beach text-xs sm:text-sm mb-1 line-clamp-1">
                    {committee.members.map((member, memberIndex) => {
                      const nameWithNonBreakingSpaces = member.name.replace(/ /g, '\u00A0');
                      return (
                        <span key={memberIndex}>
                          {nameWithNonBreakingSpaces}
                          {memberIndex < committee.members.length - 1 && <span>, </span>}
                        </span>
                      );
                    })}
                  </p>
                  
                  {/* Committee Email Link */}
                  {committee.committeeEmail && (
                    <a
                      href={`mailto:${committee.committeeEmail}`}
                      className="text-xl hover:scale-110 transition-transform duration-200 inline-block leading-none"
                      title={`Email ${committee.title}`}
                      style={{ lineHeight: '0.5', marginTop: '-4px' }}
                    >
                      📧
                    </a>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Row 5: Public Relations, Social, Judging (3 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(10, 13).map((committee, index) => (
              <Card 
                key={index}
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96 bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 10) * 0.1}s` }}
              >
                {/* Committee Picture with Hover Effect */}
                <div className="relative h-[85%] overflow-hidden group">
                  <img 
                    src={committee.image} 
                    alt={committee.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    style={
                      committee.title === "Public Relations" ? { objectPosition: 'center 75%' } :
                      committee.title === "Social" ? { transform: 'scale(1.4)' } :
                      committee.title === "Judging" ? { objectPosition: 'center 85%' } : {}
                    }
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-3 sm:p-4 w-full">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                        {committee.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardBody className="h-[15%] p-2 text-center flex flex-col justify-center overflow-hidden">
                  {/* Member Names */}
                  <p className="text-beach-700 font-beach text-xs sm:text-sm mb-1 line-clamp-1">
                    {committee.members.map((member, memberIndex) => {
                      const nameWithNonBreakingSpaces = member.name.replace(/ /g, '\u00A0');
                      return (
                        <span key={memberIndex}>
                          {nameWithNonBreakingSpaces}
                          {memberIndex < committee.members.length - 1 && <span>, </span>}
                        </span>
                      );
                    })}
                  </p>
                  
                  {/* Committee Email Link */}
                  {committee.committeeEmail && (
                    <a
                      href={`mailto:${committee.committeeEmail}`}
                      className="text-xl hover:scale-110 transition-transform duration-200 inline-block leading-none"
                      title={`Email ${committee.title}`}
                      style={{ lineHeight: '0.5', marginTop: '-4px' }}
                    >
                      📧
                    </a>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Row 6: Freshmen Rep, Senior Advisors (2 committees) */}
          <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16 mb-16 sm:mb-20 lg:mb-24">
            {committees.slice(13, 15).map((committee, index) => (
              <Card 
                key={index}
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96 bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 13) * 0.1}s` }}
              >
                {/* Committee Picture with Hover Effect */}
                <div className="relative h-[85%] overflow-hidden group">
                  <img 
                    src={committee.image} 
                    alt={committee.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    style={committee.title === "Senior Advisors" ? { transform: 'scale(1.3)' } : {}}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-3 sm:p-4 w-full">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-beach text-white text-center drop-shadow-lg">
                        {committee.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardBody className="h-[15%] p-2 text-center flex flex-col justify-center overflow-hidden">
                  {/* Member Names */}
                  <p className="text-beach-700 font-beach text-xs sm:text-sm mb-1 line-clamp-1">
                    {committee.members.map((member, memberIndex) => {
                      const nameWithNonBreakingSpaces = member.name.replace(/ /g, '\u00A0');
                      return (
                        <span key={memberIndex}>
                          {nameWithNonBreakingSpaces}
                          {memberIndex < committee.members.length - 1 && <span>, </span>}
                        </span>
                      );
                    })}
                  </p>
                  
                  {/* Committee Email Link */}
                  {committee.committeeEmail && (
                    <a
                      href={`mailto:${committee.committeeEmail}`}
                      className="text-xl hover:scale-110 transition-transform duration-200 inline-block leading-none"
                      title={`Email ${committee.title}`}
                      style={{ lineHeight: '0.5', marginTop: '-4px' }}
                    >
                      📧
                    </a>
                  )}
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
                  community connections and supporting philanthropic causes across Jersey.
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

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-white mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-beach-100 mb-6 sm:mb-8 font-ocean px-4">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              className="bg-white text-beach-700 px-6 sm:px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300"
            >
              Contact Us
            </Button>
            <Button
              as={RouterLink}
              to="/volunteer"
              size="lg"
              className="bg-sand-400 text-sand-900 px-6 sm:px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-500 transition-all duration-300"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
} 