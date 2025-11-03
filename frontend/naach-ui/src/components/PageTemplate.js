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
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/react';
import { useAuth } from '../AuthContext';

// NaachLogo.png logo for NJ Naach
export const AcmeLogo = () => (
  <img 
    src="/images/NaachLogo.png" 
    alt="NJ Naach Logo" 
    className="h-7 w-auto opacity-90 hover:opacity-100 transition-opacity uration-200"
  />
);

const PageTemplate = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout, userRole, userData } = useAuth();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
    { name: "Philanthropy", path: "/philanthropy" },
    { name: "Board", path: "/board" },
    { name: "Judges", path: "/judges" },
    { name: "Partners", path: "/sponsorship" },
    { name: "Merch", path: "/merch" },
    { name: "History", path: "/history" },
    { name: "Event Schedule", path: "/schedule" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beach-50 via-sand-50 to-seafoam-100 flex flex-col">

      {/* ───────────────────────── Beach-Themed Responsive Navbar ───────────────────────── */}
      <Navbar 
        shouldHideOnScroll 
        isBordered 
        position="sticky"
        className="backdrop-blur-md bg-white/80 border-b border-sand-200 shadow-lg min-h-[5rem] sm:min-h-[6rem] z-50"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 text-beach-700"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <NavbarBrand as={RouterLink} to="/" className="cursor-pointer">
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
          
          {currentUser ? (
            <>
              <NavbarItem>
                <Dropdown>
                  <DropdownTrigger>
                    <Avatar 
                      name={(userData?.username || userData?.teamName || 'U').charAt(0).toUpperCase()} 
                      className="bg-gradient-to-r from-beach-400 to-seafoam-400 cursor-pointer"
                      size="sm"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      classNames={{
                        base: "flex items-center justify-center",
                        name: "flex items-center justify-center !leading-none"
                      }}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User menu">
                    <DropdownItem 
                      key="dashboard"
                      as={RouterLink}
                      to="/portal"
                    >
                      Dashboard
                    </DropdownItem>
                    {userRole === 'admin' && (
                      <DropdownItem 
                        key="admin"
                        as={RouterLink}
                        to="/admin"
                      >
                        Admin Panel
                      </DropdownItem>
                    )}
                    <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            </>
          ) : (
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
          )}
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="pt-8 bg-white shadow-xl fixed top-[5rem] left-0 right-0 bottom-0 z-40 overflow-y-auto">
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
              
              {currentUser ? (
                <>
                  <Link
                    as={RouterLink}
                    to="/portal"
                    className="w-full text-beach-700 hover:text-beach-500 transition-colors duration-200 font-ocean font-medium text-lg py-3 px-4 rounded-lg hover:bg-beach-50 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {userData?.username || userData?.teamName || 'Dashboard'}
                  </Link>
                  <Button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-coral-400 to-coral-500 text-white py-3 rounded-lg hover:from-coral-500 hover:to-coral-600 transition-all duration-200 font-ocean font-semibold"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  as={RouterLink}
                  to="/login"
                  className="w-full bg-gradient-to-r from-beach-400 to-beach-500 text-white py-3 rounded-lg hover:from-beach-500 hover:to-beach-600 transition-all duration-200 font-ocean font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Button>
              )}
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
