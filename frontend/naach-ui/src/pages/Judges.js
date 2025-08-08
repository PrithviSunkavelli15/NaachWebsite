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
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meet Our Judges
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Distinguished dance professionals and scholars who bring expertise, 
            experience, and passion to evaluate every performance with fairness and insight.
          </p>
        </div>
      </section>

      {/* ───────────────────────── Judges Grid ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <Card 
                key={index}
                className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <Avatar 
                      name={judge.name}
                      className="w-20 h-20 text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {judge.name}
                    </h3>
                    <Chip 
                      color="primary" 
                      variant="flat" 
                      size="sm"
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    >
                      {judge.specialty}
                    </Chip>
                  </div>
                </CardHeader>

                <CardBody className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                    {judge.bio}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{judge.credentials}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{judge.experience} experience</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Call to Action ───────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fair & Expert Evaluation
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our judges bring diverse perspectives and deep expertise to ensure 
            every performance is evaluated with the highest standards of fairness and professionalism.
          </p>
        </div>
      </section>
    </PageTemplate>
  );
}
