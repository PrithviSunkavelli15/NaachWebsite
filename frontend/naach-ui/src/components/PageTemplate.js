import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@heroui/react';

<<<<<<< HEAD
// Enhanced SVG logo for NJ Naach with beach theme
=======
// Enhanced SVG logo for NJ Naach
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
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

const PageTemplate = ({ children }) => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-beach-50 via-sand-50 to-seafoam-100 flex flex-col">

      {/* ───────────────────────── Beach-Themed Navbar ───────────────────────── */}
      <Navbar 
        shouldHideOnScroll 
        isBordered 
        height="8rem" 
        position="sticky"
        className="h-20 backdrop-blur-md bg-white/80 border-b border-sand-200 shadow-lg"
      >
        <NavbarBrand>
          <AcmeLogo />
          <span className="font-beach font-bold text-beach-700 ml-2 text-xl">
=======
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 flex flex-col">
      {/* ───────────────────────── Enhanced Navbar ───────────────────────── */}
      <Navbar 
        shouldHideOnScroll 
        isBordered 
        height="4rem" 
        position="sticky"
        className="backdrop-blur-md bg-gray-900 border-b border-gray-700"
      >
        <NavbarBrand>
          <AcmeLogo />
          <span className="font-bold text-white ml-2">
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            NJ NAACH
          </span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/" 
<<<<<<< HEAD
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
=======
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/teams" 
<<<<<<< HEAD
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
=======
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/philanthropy" 
<<<<<<< HEAD
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
=======
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              Philanthropy
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/board" 
<<<<<<< HEAD
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
=======
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              Board
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/judges" 
<<<<<<< HEAD
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
=======
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              Judges
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/history" 
<<<<<<< HEAD
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
=======
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              History
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/schedule" 
<<<<<<< HEAD
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
=======
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              Event Schedule
            </Link>
          </NavbarItem>
<<<<<<< HEAD
=======

>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/tickets"
<<<<<<< HEAD
              className="bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 px-6 py-2 rounded-full hover:from-sand-500 hover:to-sand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mr-2 font-ocean font-semibold"
=======
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mr-2"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              Buy Tickets
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/login"
<<<<<<< HEAD
              className="bg-gradient-to-r from-beach-400 to-beach-500 text-white px-6 py-2 rounded-full hover:from-beach-500 hover:to-beach-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-ocean font-semibold"
=======
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
            >
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

<<<<<<< HEAD
      {/* ───────────────────────── Main Content ───────────────────────── */}
      <main className="flex-1">
        {children}
      </main>

      {/* ───────────────────────── Beach-Themed Footer ───────────────────────── */}
      <footer className="bg-gradient-to-r from-beach-600 to-seafoam-600 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="border-t border-beach-400/30 pt-6">
            <p className="text-beach-100 mb-2 font-ocean">
              © 2026 NJ Naach. All rights reserved.
            </p>
            <p className="text-beach-200 text-sm font-ocean">
=======
      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* ───────────────────────── Enhanced Footer ───────────────────────── */}
      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <AcmeLogo />
            <span className="font-bold text-xl ml-2">NJ NAACH</span>
          </div>
          <p className="text-gray-300 mb-4">
            Naach by the boardwalk
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-2">
              © 2026 NJ Naach. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
              Developed by Prithvi Sunkavelli, Vinit Shenoy, and Shatkratu Swarnkar
            </p>
          </div>
        </div>
      </footer>
<<<<<<< HEAD

=======
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
    </div>
  );
};

export default PageTemplate;
