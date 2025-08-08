import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Home() {
  return (
    <PageTemplate>
      {/* ───────────────────────── Enhanced Hero Section ───────────────────────── */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                NAACH
              </span>
              <span className="block text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-300 mt-2">
                3.0
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              The official NJ NAACH website - Where tradition meets innovation in competitive dance
            </p>
            
            <div className="flex justify-center items-center">
              <Button
                as={RouterLink}
                to="/teams"
                size="lg"
                variant="bordered"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                View Teams
              </Button>
            </div>
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}
