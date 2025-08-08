import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardBody,
  Avatar,
  Chip,
  Link,
} from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

// Executive Board members data for NAACH 2.0 (2025)
const boardMembersByRole = {
  "Director": [
    { name: "TBD", image: "temp-image-1.jpg" },
    { name: "TBD", image: "temp-image-2.jpg" },
    { name: "TBD", image: "temp-image-3.jpg" }
  ],
  "Senior Advisor": [
    { name: "TBD", image: "temp-image-4.jpg" },
    { name: "TBD", image: "temp-image-5.jpg" }
  ],
  "Head Liaison": [
    { name: "TBD", image: "temp-image-6.jpg" },
    { name: "TBD", image: "temp-image-7.jpg" },
    { name: "TBD", image: "temp-image-8.jpg" }
  ],
  "Finance": [
    { name: "TBD", image: "temp-image-9.jpg" },
    { name: "TBD", image: "temp-image-10.jpg" }
  ],
  "Tech": [
    { name: "TBD", image: "temp-image-11.jpg" },
    { name: "TBD", image: "temp-image-12.jpg" }
  ],
  "PR": [
    { name: "TBD", image: "temp-image-13.jpg" },
    { name: "TBD", image: "temp-image-14.jpg" },
    { name: "TBD", image: "temp-image-15.jpg" }
  ],
  "Logistics": [
    { name: "TBD", image: "temp-image-16.jpg" },
    { name: "TBD", image: "temp-image-17.jpg" },
    { name: "TBD", image: "temp-image-18.jpg" }
  ],
  "Registration": [
    { name: "TBD", image: "temp-image-19.jpg" },
    { name: "TBD", image: "temp-image-20.jpg" }
  ],
  "Judging": [
    { name: "TBD", image: "temp-image-21.jpg" },
    { name: "TBD", image: "temp-image-22.jpg" }
  ],
  "Hospitality": [
    { name: "TBD", image: "temp-image-23.jpg" },
    { name: "TBD", image: "temp-image-24.jpg" },
    { name: "TBD", image: "temp-image-25.jpg" }
  ],
  "Sponsorship": [
    { name: "TBD", image: "temp-image-26.jpg" },
    { name: "TBD", image: "temp-image-27.jpg" }
  ],
  "Social": [
    { name: "TBD", image: "temp-image-28.jpg" },
    { name: "TBD", image: "temp-image-29.jpg" },
    { name: "TBD", image: "temp-image-30.jpg" }
  ],
  "Philanthropy": [
    { name: "TBD", image: "temp-image-31.jpg" }
  ],
  "Board Rep": [
    { name: "TBD", image: "temp-image-32.jpg" },
    { name: "TBD", image: "temp-image-33.jpg" },
    { name: "TBD", image: "temp-image-34.jpg" }
  ]
};

const getRoleColor = (role) => {
  switch (role) {
    case "Director": return "danger";
    case "Senior Advisor": return "warning";
    case "Head Liaison": return "primary";
    case "Finance": return "success";
    case "Tech": return "secondary";
    case "PR": return "default";
    case "Logistics": return "primary";
    case "Registration": return "secondary";
    case "Judging": return "warning";
    case "Hospitality": return "success";
    case "Sponsorship": return "danger";
    case "Social": return "default";
    case "Philanthropy": return "success";
    case "Board Rep": return "primary";
    default: return "default";
  }
};

export default function Board2_0() {
  return (
    <PageTemplate>
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              NAACH 2.0 Executive Board
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            The Digital Evolution Era (2021-2023)
          </p>
        </div>
      </section>

      {/* ───────────────────────── Board Members Grid ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {Object.entries(boardMembersByRole).map(([role, members]) => (
              <div key={role}>
                <div className="flex flex-wrap justify-center gap-8">
                  {members.map((member, index) => (
                    <Card 
                      key={index}
                      className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-80 flex flex-col justify-center w-64"
                    >
                      <CardBody className="text-center flex flex-col items-center justify-center h-full">
                        <Avatar 
                          name={member.name}
                          className="w-24 h-24 text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 mb-6"
                        />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {member.name}
                        </h3>
                        <Chip 
                          color={getRoleColor(role)}
                          variant="flat" 
                          size="sm"
                          className="font-semibold"
                        >
                          {role}
                        </Chip>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Back to History ───────────────────────── */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            as={RouterLink}
            to="/history"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
          >
            ← Back to History Timeline
          </Link>
        </div>
      </section>
    </PageTemplate>
  );
}
