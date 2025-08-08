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

// Enhanced SVG logo for NJ Naach
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
            NJ NAACH
          </span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/teams" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/philanthropy" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Philanthropy
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/board" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Board
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/judges" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              Judges
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/history" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
            >
              History
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              as={RouterLink} 
              to="/schedule" 
              className="text-white !text-white hover:text-indigo-300 transition-colors duration-200 font-medium"
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
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mr-2"
            >
              Buy Tickets
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/login"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

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
              Developed by Prithvi Sunkavelli, Vinit Shenoy, and Shatkratu Swarnkar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageTemplate;
