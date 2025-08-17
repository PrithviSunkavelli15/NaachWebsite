import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Chip,
} from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

// Judges data
const judges = [
  {
    name: "Dr. Priya Sharma",
    credentials: "Ph.D. in Dance Studies, NYU",
    experience: "15+ years",
    bio: "Renowned dance scholar and former professional dancer with expertise in classical Indian dance forms and contemporary fusion styles.",
    specialty: "Classical & Contemporary Fusion"
  },
  {
    name: "Marcus Rodriguez",
    credentials: "MFA in Choreography, Juilliard",
    experience: "12+ years",
    bio: "Award-winning choreographer and former principal dancer with extensive experience in urban dance and hip-hop culture.",
    specialty: "Urban Dance & Hip-Hop"
  },
  {
    name: "Sarah Chen",
    credentials: "BFA in Dance Performance, UCLA",
    experience: "10+ years",
    bio: "Professional dancer and choreographer specializing in contemporary dance with a focus on innovative movement and storytelling.",
    specialty: "Contemporary & Modern"
  },
  {
    name: "Raj Patel",
    credentials: "Masters in Dance Education, Columbia",
    experience: "18+ years",
    bio: "Esteemed dance educator and former competitive dancer with deep knowledge of traditional Indian dance forms and their modern adaptations.",
    specialty: "Traditional Indian Dance"
  },
  {
    name: "Jennifer Williams",
    credentials: "Ph.D. in Performance Studies, Stanford",
    experience: "20+ years",
    bio: "Distinguished dance historian and critic with expertise in evaluating technical precision, artistic expression, and cultural authenticity.",
    specialty: "Technical Analysis & Cultural Context"
  },
  {
    name: "Carlos Mendez",
    credentials: "Professional Dancer & Choreographer",
    experience: "14+ years",
    bio: "Versatile dancer and choreographer with experience in multiple dance styles, from classical ballet to contemporary fusion.",
    specialty: "Multi-Style Evaluation"
  }
];

export default function Judges() {
  return (
    <PageTemplate>
      {/* Hero Section with Beach Background */}
      <div className="bg-gradient-to-br from-coral-100 via-sand-100 to-beach-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-coral-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-sand-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-coral-700 mb-4 sm:mb-6 animate-fade-in">
            Meet Our Judges
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-coral-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Distinguished dance professionals and scholars who bring expertise, 
            experience, and passion to evaluate every performance with fairness and insight.
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-coral-400 to-sand-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Judges Grid */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {judges.map((judge, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <Avatar 
                      name={judge.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 text-lg sm:text-xl font-bold bg-gradient-to-r from-beach-400 to-seafoam-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-beach text-beach-700 mb-1 sm:mb-2">
                      {judge.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-beach-500 font-ocean mb-1 sm:mb-2">
                      {judge.credentials}
                    </p>
                    <Chip 
                      color="primary" 
                      variant="flat" 
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      {judge.experience}
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-beach-600 font-ocean mb-3 sm:mb-4 leading-relaxed">
                    {judge.bio}
                  </p>
                  <div className="text-center">
                    <Chip 
                      color="secondary" 
                      variant="flat" 
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      {judge.specialty}
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-beach text-white mb-6">
            Fair & Expert Evaluation
          </h2>
          <p className="text-xl text-beach-100 mb-8 font-ocean">
            Our judges bring diverse perspectives and deep expertise to ensure 
            every performance is evaluated with the highest standards of fairness and professionalism.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
