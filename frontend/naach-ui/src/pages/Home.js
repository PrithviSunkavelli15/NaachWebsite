import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@heroui/react';

// Inline SVG logo for NJ Naach
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar with hide-on-scroll */}
      <Navbar shouldHideOnScroll isBordered height="4rem" position="sticky">
        <NavbarBrand>
          <AcmeLogo />
          <span className="font-bold text-inherit ml-2">NJ NAACH</span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link as={RouterLink} to="/board" color="foreground">
              Board
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link as={RouterLink} to="/teams" color="foreground">
              Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link as={RouterLink} to="/history" color="foreground">
              History
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link as={RouterLink} to="/login">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={RouterLink} to="/signup" variant="flat" color="primary">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}
      </Navbar>

      {/* Hero Section */}
      <header className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            NAACH 3.0
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            The official NJ NAACH website
          </p>
          <Button
            as={RouterLink}
            to="/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700"
          >
            Team Login
          </Button>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          © 2026 NJ Naach. All rights reserved.
        </div>
      </footer>
    </div>
  );
}