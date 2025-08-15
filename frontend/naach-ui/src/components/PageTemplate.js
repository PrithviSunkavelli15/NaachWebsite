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

// Enhanced SVG logo for NJ Naach with beach theme
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
            NJ NAACH
          </span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/" 
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/teams" 
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
            >
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/philanthropy" 
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
            >
              Philanthropy
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/board" 
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
            >
              Board
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/judges" 
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
            >
              Judges
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/history" 
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
            >
              History
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/schedule" 
              className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium"
            >
              Event Schedule
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/tickets"
              className="bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 px-6 py-2 rounded-full hover:from-sand-500 hover:to-sand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mr-2 font-ocean font-semibold"
            >
              Buy Tickets
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/login"
              className="bg-gradient-to-r from-beach-400 to-beach-500 text-white px-6 py-2 rounded-full hover:from-beach-500 hover:to-beach-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-ocean font-semibold"
            >
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

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
              Developed by Prithvi Sunkavelli, Vinit Shenoy, and Shatkratu Swarnkar
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PageTemplate;
