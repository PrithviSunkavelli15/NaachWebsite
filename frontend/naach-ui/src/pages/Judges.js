import React from "react";
import { Link as RouterLink } from "react-router-dom";
<<<<<<< HEAD
import { Button, Card, CardBody, CardHeader, Avatar, Chip } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Judges() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-coral-100 via-beach-100 to-sand-100 py-20 px-4 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-20 h-20 bg-coral-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-beach text-coral-700 mb-6 animate-fade-in">
            Meet Our Judges
          </h1>
          <p className="text-xl md:text-2xl text-coral-600 font-ocean mb-8 animate-slide-up">
            Distinguished dance professionals and industry experts who will evaluate NJ NAACH 3.0
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-400 to-beach-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Judges Grid */}
      <div className="py-16 px-4 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Judge 1 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-beach-400 to-beach-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Dr. Priya Sharma</h3>
                <Chip color="primary" variant="flat" className="font-ocean">Head Judge</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Expertise:</strong> Classical Indian Dance</p>
                  <p><strong>Experience:</strong> 25+ years in dance education</p>
                  <p><strong>Background:</strong> Former principal dancer at National Dance Academy</p>
                  <p><strong>Specialty:</strong> Bharatanatyam & Kathak</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="success" variant="flat" className="font-ocean">Technique Expert</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Judge 2 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Marcus Rodriguez</h3>
                <Chip color="secondary" variant="flat" className="font-ocean">Contemporary Expert</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Expertise:</strong> Contemporary & Fusion</p>
                  <p><strong>Experience:</strong> 20+ years in professional dance</p>
                  <p><strong>Background:</strong> Broadway performer & choreographer</p>
                  <p><strong>Specialty:</strong> Modern dance & musical theater</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="warning" variant="flat" className="font-ocean">Creativity Judge</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Judge 3 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="bg-gradient-to-r from-coral-400 to-coral-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Aisha Patel</h3>
                <Chip color="success" variant="flat" className="font-ocean">Bollywood Specialist</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Expertise:</strong> Bollywood & Fusion</p>
                  <p><strong>Experience:</strong> 18+ years in dance industry</p>
                  <p><strong>Background:</strong> International dance competition winner</p>
                  <p><strong>Specialty:</strong> Bollywood & hip-hop fusion</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="danger" variant="flat" className="font-ocean">Performance Judge</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Judge 4 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader className="bg-gradient-to-r from-sand-400 to-sand-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">David Kim</h3>
                <Chip color="primary" variant="flat" className="font-ocean">Technical Judge</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Expertise:</strong> Technical Precision</p>
                  <p><strong>Experience:</strong> 22+ years in dance instruction</p>
                  <p><strong>Background:</strong> Dance professor at Juilliard School</p>
                  <p><strong>Specialty:</strong> Ballet & contemporary technique</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="secondary" variant="flat" className="font-ocean">Technique Expert</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Judge 5 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <CardHeader className="bg-gradient-to-r from-beach-400 to-beach-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Sarah Johnson</h3>
                <Chip color="warning" variant="flat" className="font-ocean">Choreography Expert</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Expertise:</strong> Choreography & Innovation</p>
                  <p><strong>Experience:</strong> 15+ years in creative direction</p>
                  <p><strong>Background:</strong> Emmy-winning choreographer</p>
                  <p><strong>Specialty:</strong> Creative direction & innovation</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="success" variant="flat" className="font-ocean">Innovation Judge</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Judge 6 */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '1s' }}>
              <CardHeader className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Raj Malhotra</h3>
                <Chip color="danger" variant="flat" className="font-ocean">Cultural Expert</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Expertise:</strong> Cultural Authenticity</p>
                  <p><strong>Experience:</strong> 30+ years in cultural dance</p>
                  <p><strong>Background:</strong> Cultural preservation advocate</p>
                  <p><strong>Specialty:</strong> Traditional dance forms</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="primary" variant="flat" className="font-ocean">Cultural Judge</Chip>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Judging Criteria */}
      <div className="py-16 px-4 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Judging Criteria
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl text-center">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-beach text-beach-700 mb-3">Technical Excellence</h3>
                <p className="text-beach-600 font-ocean text-sm">Precision, control, and mastery of dance techniques</p>
                <div className="mt-4">
                  <Chip color="primary" variant="flat" className="font-ocean">40%</Chip>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl text-center">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-beach text-beach-700 mb-3">Creativity</h3>
                <p className="text-beach-600 font-ocean text-sm">Originality, innovation, and artistic expression</p>
                <div className="mt-4">
                  <Chip color="secondary" variant="flat" className="font-ocean">25%</Chip>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl text-center">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-beach text-beach-700 mb-3">Performance</h3>
                <p className="text-beach-600 font-ocean text-sm">Stage presence, energy, and audience engagement</p>
                <div className="mt-4">
                  <Chip color="success" variant="flat" className="font-ocean">20%</Chip>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl text-center">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-beach text-beach-700 mb-3">Cultural Authenticity</h3>
                <p className="text-beach-600 font-ocean text-sm">Respect for traditional forms and cultural integrity</p>
                <div className="mt-4">
                  <Chip color="warning" variant="flat" className="font-ocean">15%</Chip>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-coral-500 to-beach-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-white mb-6">
            Ready to Be Judged by the Best?
          </h2>
          <p className="text-xl text-coral-100 mb-8 font-ocean">
            Our expert panel is ready to evaluate your performance and help you grow as dancers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={RouterLink}
              to="/register"
              size="lg"
              className="bg-white text-coral-700 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-100 transition-all duration-300"
            >
              Register Your Team
            </Button>
            <Button
              as={RouterLink}
              to="/schedule"
              size="lg"
              className="bg-sand-400 text-sand-900 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-sand-500 transition-all duration-300"
            >
              View Schedule
            </Button>
          </div>
        </div>
      </div>
=======
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
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
    </PageTemplate>
  );
}
