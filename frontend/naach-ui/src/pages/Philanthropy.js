import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Philanthropy() {
  return (
    <PageTemplate>
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Philanthropy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Making a difference through dance and community service
          </p>
        </div>
      </section>

      {/* ───────────────────────── Mission Section ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                NJ NAACH is committed to using the power of dance to create positive change in our community. 
                Through various philanthropic initiatives, we strive to support local causes, promote arts education, 
                and inspire the next generation of dancers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our events not only showcase incredible talent but also raise funds for important causes, 
                making every performance meaningful beyond the stage.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl rounded-2xl p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Community Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Every ticket sold and every performance given contributes to our mission of supporting 
                local arts education and community development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Initiatives Section ───────────────────────── */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Arts Education</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Supporting dance education programs in local schools and community centers, 
                  making the arts accessible to all students regardless of background.
                </p>
              </CardBody>
            </Card>

            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Community Outreach</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Partnering with local organizations to provide dance workshops, 
                  performances, and cultural enrichment programs for underserved communities.
                </p>
              </CardBody>
            </Card>

            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cultural Preservation</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Promoting and preserving traditional dance forms while encouraging 
                  innovation and fusion with contemporary styles.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Call to Action ───────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Support our philanthropic efforts by attending events, volunteering, 
            or making a donation to help us continue making a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={RouterLink}
              to="/tickets"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Buy Tickets
            </Button>
            <Button
              as={RouterLink}
              to="/board"
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              Contact Board
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
