import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Avatar, Chip } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Board() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sand-100 via-beach-100 to-seafoam-100 py-20 px-4 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-20 h-20 bg-sand-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-beach text-sand-700 mb-6 animate-fade-in">
            Executive Board
          </h1>
          <p className="text-xl md:text-2xl text-sand-600 font-ocean mb-8 animate-slide-up">
            Meet the passionate leaders driving NJ NAACH 3.0 forward
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sand-400 to-beach-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-16 px-4 bg-gradient-to-b from-beach-50 to-sand-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Mission</h3>
                <p className="text-beach-600 font-ocean leading-relaxed">
                  To create an inclusive platform that celebrates South Asian dance culture while fostering 
                  community, promoting artistic excellence, and making a positive impact through philanthropy. 
                  We strive to bring the vibrant energy of the Jersey Shore to every aspect of our competition.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-8">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-beach text-beach-700 mb-4">Core Values</h3>
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Excellence:</strong> Striving for the highest quality in everything we do</p>
                  <p><strong>Community:</strong> Building bridges and fostering connections</p>
                  <p><strong>Innovation:</strong> Embracing new ideas and creative solutions</p>
                  <p><strong>Integrity:</strong> Operating with honesty and transparency</p>
                  <p><strong>Impact:</strong> Making a positive difference in our community</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Board Members Grid */}
      <div className="py-16 px-4 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-beach text-beach-700 text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* President */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-beach-400 to-beach-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Prithvi Sunkavelli</h3>
                <Chip color="primary" variant="flat" className="font-ocean">President</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Role:</strong> Overall leadership and strategic direction</p>
                  <p><strong>Background:</strong> 5+ years in dance leadership</p>
                  <p><strong>Focus:</strong> Event planning and team coordination</p>
                  <p><strong>Vision:</strong> Expanding NJ NAACH's reach and impact</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="success" variant="flat" className="font-ocean">Strategic Leader</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Vice President */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Vinit Shenoy</h3>
                <Chip color="secondary" variant="flat" className="font-ocean">Vice President</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Role:</strong> Operations and logistics management</p>
                  <p><strong>Background:</strong> Event management specialist</p>
                  <p><strong>Focus:</strong> Venue coordination and technical setup</p>
                  <p><strong>Vision:</strong> Creating seamless event experiences</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="warning" variant="flat" className="font-ocean">Operations Expert</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Secretary */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="bg-gradient-to-r from-coral-400 to-coral-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Shatkratu Swarnkar</h3>
                <Chip color="success" variant="flat" className="font-ocean">Secretary</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Role:</strong> Communication and documentation</p>
                  <p><strong>Background:</strong> Communications and marketing</p>
                  <p><strong>Focus:</strong> Team outreach and social media</p>
                  <p><strong>Vision:</strong> Building strong community connections</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="danger" variant="flat" className="font-ocean">Communication Lead</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Treasurer */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader className="bg-gradient-to-r from-sand-400 to-sand-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Alex Rodriguez</h3>
                <Chip color="primary" variant="flat" className="font-ocean">Treasurer</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Role:</strong> Financial management and budgeting</p>
                  <p><strong>Background:</strong> Finance and accounting</p>
                  <p><strong>Focus:</strong> Budget planning and financial oversight</p>
                  <p><strong>Vision:</strong> Ensuring sustainable growth</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="secondary" variant="flat" className="font-ocean">Financial Expert</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Marketing Director */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <CardHeader className="bg-gradient-to-r from-beach-400 to-beach-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Sarah Johnson</h3>
                <Chip color="warning" variant="flat" className="font-ocean">Marketing Director</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Role:</strong> Brand promotion and audience engagement</p>
                  <p><strong>Background:</strong> Digital marketing and design</p>
                  <p><strong>Focus:</strong> Social media and promotional campaigns</p>
                  <p><strong>Vision:</strong> Expanding NJ NAACH's reach</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="success" variant="flat" className="font-ocean">Creative Director</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Technical Director */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '1s' }}>
              <CardHeader className="bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-white text-center py-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-beach">Mike Chen</h3>
                <Chip color="danger" variant="flat" className="font-ocean">Technical Director</Chip>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-3 text-beach-600 font-ocean">
                  <p><strong>Role:</strong> Technical infrastructure and support</p>
                  <p><strong>Background:</strong> IT and systems management</p>
                  <p><strong>Focus:</strong> Website and digital platforms</p>
                  <p><strong>Vision:</strong> Leveraging technology for growth</p>
                </div>
                <div className="mt-4 text-center">
                  <Chip color="primary" variant="flat" className="font-ocean">Tech Innovator</Chip>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-sand-500 to-beach-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-beach text-white mb-6">
            Join Our Leadership Team
          </h2>
          <p className="text-xl text-sand-100 mb-8 font-ocean">
            We're always looking for passionate individuals to help us grow and innovate
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              className="bg-white text-sand-700 px-8 py-3 rounded-full font-ocean font-semibold hover:bg-beach-100 transition-all duration-300"
            >
              Contact Us
            </Button>
            <Button
              as={RouterLink}
              to="/volunteer"
              size="lg"
              className="bg-beach-400 text-white px-8 py-3 rounded-full font-ocean font-semibold hover:bg-beach-500 transition-all duration-300"
            >
              Volunteer
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
} 