import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import teamPageImage from "../assets/aakriti.jpg";
import teamPageImage2 from "../assets/laxman bista.jpeg";
import teamPageImage3 from "../assets/puja.png";
import teamPageImage4 from "../assets/devaki.jpeg";
import teamPageImage5 from "../assets/small.jpg";
import teamPageImage6 from "../assets/aakash.jpeg";
// Assuming a generic advisor image exists or using a placeholder
import genericAdvisorImage1 from "../assets/mary.jpg"; 
import genericAdvisorImage2 from "../assets/eddie.jpg"; 
import genericAdvisorImage3 from "../assets/alexandra.jpg"; 


interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [

    {
      name: "Laxman Bista",
      role: "Founder & Chief Financial Officer (CFO)",
      image: teamPageImage2,
      bio: "Laxman, a Dartmouth graduate, understands the true cost of farming because he's lived it. Coming from a farming background in landlocked Nepal, he knows the urgency of addressing food insecurity. As CFO of KrishiMitra, he ensures that every financial decision supports sustainability, dignity, and long-term value for farmers. His leadership is grounded in numbers and in empathy.",
    },

    {
      name: "Puja Khatri",
      role: "Co-Founder & Chief Executive Officer (CEO)",
      image: teamPageImage3,
      bio: "Puja, a current undergraduate at Soka University of America, comes from a long line of farmers. Her mother encouraged her to choose a different path, but that path led her right back to agriculture, with a new purpose. As CEO of KrishiMitra, Puja is reimagining what farming can be: dignified, secure, and future-ready. She leads with vision rooted in experience, ensuring that farming is no longer seen as a last resort, but a proud and promising profession.",
    },
    
    {
      name: "Aakriti Khapung Limbu",
      role: "Co-Founder & Chief Marketing Officer (CMO)",
      image: teamPageImage,
      bio: "Aakriti, a current undergraduate at Soka University of America, brings heart and strategy together in her role as CMO. Hailing from Nepal, she's passionate about empowering marginalized communities and making sure no one is left behind. Through storytelling, outreach, and community-driven campaigns, Aakriti is building a brand that speaks to the people, and for the people driving both awareness and impact.",
    },

  
    {
      name: "Prerit Gautam",
      role: "Tech",
      image: teamPageImage4,
      bio:"Prerit is a highschool graduate. He is looking after the website and the app."
    },
    

    {
      name: "Manish Acharya",
      role: "Chief Technological Officer (CTO)",
      image: teamPageImage5,
      bio: "Manish Acharya is a current undergraduate at Vanderbilt and a passionate tech enthusiast. With a deep understanding of system architecture and product development, Manish oversees KrishiMitra's technological foundation. He is dedicated to building scalable and innovative solutions that meet the real needs of farmers and bring lasting impact through technology.",
    },
  
    {
      name: "Mary Patrick Kavanaugh",
      role: "Advisor",
      image: genericAdvisorImage1,
      bio: "Mary provides valuable guidance and expertise to our team.",
    },
    {
      name: "Eddie Ng",
      role: "Advisor",
      image: genericAdvisorImage2,
      bio: "Eddie offers strategic advice to support KrishiMitra's growth.",
    },
    {
      name: "Alexandra Moaser",
      role: "Advisor",
      image: genericAdvisorImage3,
      bio: "Alexandra contributes her experience to help shape our future directions.",
    },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Meet the passionate individuals behind KrishiMitra
          </p>
        </div>

        <div className="mt-12">
          {/* First row - 3 people */}
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <div className="w-full max-w-sm group relative">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="w-full h-full object-contain object-center transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm px-4 text-center">{teamMembers[0].bio}</span>
                  </div>
                </div>
                <CardContent className="p-5 bg-[#196F3D]/5">
                  <h3 className="text-lg font-medium text-neutral-900">{teamMembers[0].name}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{teamMembers[0].role}</p>
                </CardContent>
              </Card>
            </div>
            <div className="w-full max-w-sm group relative">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={teamMembers[1].image}
                    alt={teamMembers[1].name}
                    className="w-full h-full object-contain object-center transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm px-4 text-center">{teamMembers[1].bio}</span>
                  </div>
                </div>
                <CardContent className="p-5 bg-[#196F3D]/5">
                  <h3 className="text-lg font-medium text-neutral-900">{teamMembers[1].name}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{teamMembers[1].role}</p>
                </CardContent>
              </Card>
            </div>
            <div className="w-full max-w-sm group relative">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={teamMembers[2].image}
                    alt={teamMembers[2].name}
                    className="w-full h-full object-contain object-center transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm px-4 text-center">{teamMembers[2].bio}</span>
                  </div>
                </div>
                <CardContent className="p-5 bg-[#196F3D]/5">
                  <h3 className="text-lg font-medium text-neutral-900">{teamMembers[2].name}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{teamMembers[2].role}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Second row - 2 people centered */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="w-full max-w-sm group relative">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={teamMembers[3].image}
                    alt={teamMembers[3].name}
                    className="w-full h-full object-contain object-center transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm px-4 text-center">{teamMembers[3].bio}</span>
                  </div>
                </div>
                <CardContent className="p-5 bg-[#196F3D]/5">
                  <h3 className="text-lg font-medium text-neutral-900">{teamMembers[3].name}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{teamMembers[3].role}</p>
                </CardContent>
              </Card>
            </div>
            <div className="w-full max-w-sm group relative">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={teamMembers[4].image}
                    alt={teamMembers[4].name}
                    className="w-full h-full object-contain object-center transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm px-4 text-center">{teamMembers[4].bio}</span>
                  </div>
                </div>
                <CardContent className="p-5 bg-[#196F3D]/5">
                  <h3 className="text-lg font-medium text-neutral-900">{teamMembers[4].name}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{teamMembers[4].role}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Third row - All advisors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.slice(5).map((member) => (
              <div key={member.name} className="group relative">
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-72 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain object-center transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm px-4 text-center">{member.bio}</span>
                    </div>
                  </div>
                  <CardContent className="p-5 bg-[#196F3D]/5">
                    <h3 className="text-lg font-medium text-neutral-900">{member.name}</h3>
                    <p className="mt-2 text-sm text-neutral-700">{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;