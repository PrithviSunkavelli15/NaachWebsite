import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Chip,
} from "@heroui/react";

// ─── Enhanced SVG logo for NJ Naach ─────────────────────────────────────────────
export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

// Sample board members data
const boardMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "President",
    image: null,
    email: "sarah.johnson@njnaach.com",
    phone: "+1 (555) 123-4567",
    description: "Leading NJ NAACH with over 10 years of dance experience and a passion for competitive excellence.",
    yearJoined: "2020"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Vice President",
    image: null,
    email: "michael.chen@njnaach.com",
    phone: "+1 (555) 234-5678",
    description: "Oversees team operations and coordinates with participating dance teams across the region.",
    yearJoined: "2021"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Secretary",
    image: null,
    email: "emily.rodriguez@njnaach.com",
    phone: "+1 (555) 345-6789",
    description: "Manages communications and maintains official records for all NAACH events and competitions.",
    yearJoined: "2019"
  },
  {
    id: 4,
    name: "David Kim",
    position: "Treasurer",
    image: null,
    email: "david.kim@njnaach.com",
    phone: "+1 (555) 456-7890",
    description: "Handles financial planning and budget management for competitions and team activities.",
    yearJoined: "2022"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Events Coordinator",
    image: null,
    email: "lisa.thompson@njnaach.com",
    phone: "+1 (555) 567-8901",
    description: "Organizes competitions, workshops, and community events throughout the year.",
    yearJoined: "2021"
  },
  {
    id: 6,
    name: "James Wilson",
    position: "Technical Director",
    image: null,
    email: "james.wilson@njnaach.com",
    phone: "+1 (555) 678-9012",
    description: "Manages technical aspects of competitions including sound, lighting, and stage setup.",
    yearJoined: "2020"
  }
];

export default function Board() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* ───────────────────────── Enhanced Navbar ───────────────────────── */}
      <Navbar 
        shouldHideOnScroll 
        isBordered 
        height="4rem" 
        position="sticky"
        className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <NavbarBrand>
          <AcmeLogo />
          <span className="font-bold text-inherit ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NJ NAACH
          </span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/board" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200 font-semibold"
            >
              Board
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/teams" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/history" 
              color="foreground"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              History
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/login"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Team Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Board of Directors
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders who guide NJ NAACH and ensure the success of our competitive dance community.
          </p>
        </div>
      </section>

      {/* ───────────────────────── Board Members Grid ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <Card 
                key={member.id}
                className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <Avatar 
                      name={member.name}
                      className="w-24 h-24 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <Chip 
                      color="primary" 
                      variant="flat" 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    >
                      {member.position}
                    </Chip>
                  </div>
                </CardHeader>

                <CardBody className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">Joined {member.yearJoined}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="bordered"
                      className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      startContent={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                    >
                      Contact {member.name.split(' ')[0]}
                    </Button>
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
            Join Our Community
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Ready to be part of the most exciting competitive dance experience? 
            Connect with our board members or explore our teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={RouterLink}
              to="/teams"
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              View Teams
            </Button>
            <Button
              as={RouterLink}
              to="/login"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Team Login
            </Button>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Enhanced Footer ───────────────────────── */}
      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <AcmeLogo />
            <span className="font-bold text-xl ml-2">NJ NAACH</span>
          </div>
          <p className="text-gray-300 mb-4">
            Empowering dancers through technology and tradition
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2026 NJ Naach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 