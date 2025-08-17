import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
    { name: "Philanthropy", path: "/philanthropy" },
    { name: "Board", path: "/board" },
    { name: "Judges", path: "/judges" },
    { name: "History", path: "/history" },
    { name: "Event Schedule", path: "/schedule" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-beach-50 via-sand-50 to-seafoam-100 flex flex-col">

      {/* ───────────────────────── Beach-Themed Responsive Navbar ───────────────────────── */}
      <Navbar 
        shouldHideOnScroll 
        isBordered 
        position="sticky"
        className="backdrop-blur-md bg-white/80 border-b border-sand-200 shadow-lg min-h-[5rem] sm:min-h-[6rem]"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <span className="font-beach font-bold text-beach-700 ml-2 text-lg sm:text-xl">
              NJ NAACH
            </span>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Navigation */}
        <NavbarContent className="hidden sm:flex gap-4 lg:gap-6" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.name}>
              <Link 
                as={RouterLink} 
                to={item.path} 
                className="text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium text-sm lg:text-base py-2"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Desktop Buttons */}
        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/tickets"
              size="sm"
              className="bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 px-4 lg:px-6 py-3 rounded-full hover:from-sand-500 hover:to-sand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mr-2 font-ocean font-semibold text-xs lg:text-sm"
            >
              Buy Tickets
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/login"
              size="sm"
              className="bg-gradient-to-r from-beach-400 to-beach-500 text-white px-4 lg:px-6 py-3 rounded-full hover:from-beach-500 hover:to-beach-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-ocean font-semibold text-xs lg:text-sm"
            >
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="pt-8 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <NavbarMenuItem key={item.name}>
                <Link
                  as={RouterLink}
                  to={item.path}
                  className="w-full text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium text-lg py-3 px-4 rounded-lg hover:bg-beach-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
            
            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-sand-200">
              <Button
                as={RouterLink}
                to="/tickets"
                className="w-full bg-gradient-to-r from-sand-400 to-sand-500 text-sand-900 py-3 rounded-lg hover:from-sand-500 hover:to-sand-600 transition-all duration-200 font-ocean font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy Tickets
              </Button>
              <Button
                as={RouterLink}
                to="/login"
                className="w-full bg-gradient-to-r from-beach-400 to-beach-500 text-white py-3 rounded-lg hover:from-beach-500 hover:to-beach-600 transition-all duration-200 font-ocean font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Button>
            </div>
          </div>
        </NavbarMenu>
      </Navbar>

      {/* ───────────────────────── Main Content ───────────────────────── */}
      <main className="flex-1">
        {children}
      </main>

      {/* ───────────────────────── Beach-Themed Footer ───────────────────────── */}
      <footer className="bg-gradient-to-r from-beach-600 to-seafoam-600 text-white py-6 sm:py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="border-t border-beach-400/30 pt-4 sm:pt-6">
            <p className="text-beach-100 mb-2 font-ocean text-sm sm:text-base">
              © 2026 NJ Naach. All rights reserved.
            </p>
            <p className="text-beach-200 text-xs sm:text-sm font-ocean">
              Developed by Prithvi Sunkavelli, Vinit Shenoy, and Shatkratu Swarnkar
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PageTemplate;
