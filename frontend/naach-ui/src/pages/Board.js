import React from "react";
import { Card, CardBody, Avatar, Chip } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

// Executive Board members data grouped by role
const boardMembersByRole = {
  "Director": [
    { name: "Himit Shah", image: "temp-image-1.jpg" },
    { name: "Khushmeet Vassan", image: "temp-image-2.jpg" },
    { name: "Adarsh Patel", image: "temp-image-3.jpg" }
  ],
  "Senior Advisor": [
    { name: "Jasmine Patel", image: "temp-image-4.jpg" },
    { name: "Meghna Prakash", image: "temp-image-5.jpg" }
  ],
  "Head Liaison": [
    { name: "Netra Patel", image: "temp-image-6.jpg" },
    { name: "Maitri Bhupatkar", image: "temp-image-7.jpg" },
    { name: "Kriti Tyagi", image: "temp-image-8.jpg" }
  ],
  "Finance": [
    { name: "Nikhilesh Machan", image: "temp-image-9.jpg" },
    { name: "Ashna Karthik", image: "temp-image-10.jpg" }
  ],
  "Tech": [
    { name: "Sahil Mittal", image: "temp-image-11.jpg" },
    { name: "Kavya Jain", image: "temp-image-12.jpg" }
  ],
  "PR": [
    { name: "Sana Raza", image: "temp-image-13.jpg" },
    { name: "Disha Patel", image: "temp-image-14.jpg" },
    { name: "Sanskriti Ramji", image: "temp-image-15.jpg" }
  ],
  "Logistics": [
    { name: "Riddhi Gandhi", image: "temp-image-16.jpg" },
    { name: "Shatkratu Swarnkar", image: "temp-image-17.jpg" },
    { name: "Ria Sharma", image: "temp-image-18.jpg" }
  ],
  "Registration": [
    { name: "Prithvi Sunkavelli", image: "temp-image-19.jpg" },
    { name: "Purva Unhale", image: "temp-image-20.jpg" }
  ],
  "Judging": [
    { name: "Nishi Patel", image: "temp-image-21.jpg" },
    { name: "Sancharitha Ramji", image: "temp-image-22.jpg" }
  ],
  "Hospitality": [
    { name: "Chandni Shah", image: "temp-image-23.jpg" },
    { name: "Preya Patel", image: "temp-image-24.jpg" },
    { name: "Anvi Pofale", image: "temp-image-25.jpg" }
  ],
  "Sponsorship": [
    { name: "Nisarg Mehta", image: "temp-image-26.jpg" },
    { name: "Vinit Shenoy", image: "temp-image-27.jpg" }
  ],
  "Social": [
    { name: "Diya Kumar", image: "temp-image-28.jpg" },
    { name: "Sahaana Shastri", image: "temp-image-29.jpg" },
    { name: "Laksh Panchal", image: "temp-image-30.jpg" }
  ],
  "Philanthropy": [
    { name: "Siya Deshmukh", image: "temp-image-31.jpg" }
  ],
  "Board Rep": [
    { name: "Khushi Shah", image: "temp-image-32.jpg" },
    { name: "Kenz Mehaboob", image: "temp-image-33.jpg" },
    { name: "Nayan Yadav", image: "temp-image-34.jpg" }
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

export default function Board() {
  return (
    <PageTemplate>
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Executive Board
            </span>
          </h1>

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
                          className="w-24 h-24 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 mb-6"
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
    </PageTemplate>
  );
} 