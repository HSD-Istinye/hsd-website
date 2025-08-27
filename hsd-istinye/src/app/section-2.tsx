"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const members = [
    {
      name: "Ata Sesli",
      role: "Ambassador",
      study: "Computer Engineering Student",
      initial: "A",
      gradient: "from-green-500 to-teal-500",
      color: "text-green-600",
      github: "https://github.com/ata-sesli",
      linkedin: "https://www.linkedin.com/in/ata-sesli?trk=blended-typeahead",
    },
    {
    name: "Ebrar Kama",
    role: "Vice Ambassador & Social Media Team Leader",
    study: "Molecular Biology and Genetic Student",
    initial: "E",
    gradient: "from-pink-500 to-purple-500",
    color: "text-green-600",
    linkedin: "https://www.linkedin.com/in/ebrar-kama-3b8226348/?lipi=urn%3Ali%3Apage%3Ap_mwlite_people_connections%3BX%2BWTbxpZQ%2FSFN1X7T5ps%2FQ%3D%3D",
    }, 
    {
    name: "Muhammed Said Tosun",
    role: "Event Team Leader",
    study: "Computer Engineering Student",
    initial: "M",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-600",
    github: "https://github.com/MuhammedSaidTosun",
    linkedin: "https://www.linkedin.com/in/muhammed-said-tosun/",
  },
  {
    name: "Mehmet Doruk Artan",
    role: "Project Team Leader",
    study: "Computer Engineering Student",
    initial: "M",
    gradient: "from-blue-500 to-purple-500",
    color: "text-purple-600",
    github: "https://github.com/DorukArtan",
    linkedin:
      "https://www.linkedin.com/in/doruk-artan/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3Bk3V3jLOyQNq9omp0ZxsjwQ%3D%3D",
  },
  {
    name: "Tuana Kabakçı",
    role: "Event Team Member",
    study: "Psychology Student",
    initial: "T",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-600",
    linkedin: "https://www.linkedin.com/in/tuana-kabakci-8a6799364/",
  },
  {
    name: "Sena Zeytin",
    role: "Event Team Member",
    study: "International Relations Student",
    initial: "S",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-600",
    linkedin: "https://www.linkedin.com/in/sena-zeytin-818423366/",
  },
  {
    name: "Berivan Ertuğrul",
    role: "Event Team Member",
    study: "Software Engineering Student",
    initial: "B",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-600",
    linkedin: "https://www.linkedin.com/in/berivanertugrul/",
  },
  {
    name: "Büşra Ceylan",
    role: "Event Team Member",
    study: "Software Engineering Student",
    initial: "B",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-600",
    github: "https://github.com/busracode",
    linkedin: "https://www.linkedin.com/in/b%C3%BCsraceylan/",
  },
  {
    name: "Musab Ahmed Khan Umair",
    role: "Project Team Member",
    study: "AI Engineering Student",
    initial: "M",
    gradient: "from-blue-500 to-purple-500",
    color: "text-purple-600",
    github: "musabaku",
    linkedin: "https://www.linkedin.com/in/musab-ahmed-khan-umair-77abb5132?trk=blended-typeahead",
  },
  {
    name: "Fatemeh Nasirian",
    role: "Project Team Member",
    study: "Software Engineering Student",
    initial: "F",
    gradient: "from-blue-500 to-purple-500",
    color: "text-purple-600",
    github: "https://github.com/FatimaNsrn",
    linkedin: "https://www.linkedin.com/in/fatemeh-nasirian",
  },
  {
    name: "Berke Durdu",
    role: "Project Team Member",
    study: "Software Engineering Student",
    initial: "B",
    gradient: "from-blue-500 to-purple-500",
    color: "text-purple-600",
    github: "https://github.com/Berke111",
    linkedin:
      "https://www.linkedin.com/in/berke-durdu/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3BXfBAfcidTFy0mEse8fKVaA%3D%3D",
  },
  {
    name: "Esra Bingol",
    role: "Project Team Member",
    study: "Software Engineering Student",
    initial: "E",
    gradient: "from-blue-500 to-purple-500",
    color: "text-purple-600",
    github: "https://github.com/esra-bingol",
    linkedin: "https://www.linkedin.com/in/esra-bingol?trk=blended-typeahead"
  },
  {
    name: "Aylin Ataç",
    role: "Social Media Team Member",
    study: "Radio and Television Student",
    initial: "A",
    gradient: "from-pink-500 to-purple-500",
    color: "text-pink-600",
    linkedin:
      "https://www.linkedin.com/in/aylin-atac-96ba03322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Ece Ayhan",
    role: "Social Media Team Member",
    study: "Psychology Student",
    initial: "E",
    gradient: "from-pink-500 to-purple-500",
    color: "text-pink-600",
    linkedin:
      "https://www.linkedin.com/in/ece-ayhan-687228299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Beyza Coşkun",
    role: "Social Media Team Member",
    study: "Psychology Student",
    initial: "B",
    gradient: "from-pink-500 to-purple-500",
    color: "text-pink-600",
    linkedin:
      "https://www.linkedin.com/in/beyza-co%C5%9Fkun-1a1165334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Sudenaz Orduluoğlu",
    role: "Social Media Team Member",
    study: "Psychology Student",
    initial: "S",
    gradient: "from-pink-500 to-purple-500",
    color: "text-pink-600",
    linkedin: "https://www.linkedin.com/in/sudenaz-orduluo%C4%9Flu-95919b31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  
];

export default function Section2() {
  return (
    <section className="py-12 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-2 mb-4 rounded"></div>
        <p className="text-gray-600">
          Meet the passionate individuals driving innovation and excellence in our developer community
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((m, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className={`bg-gradient-to-r ${m.gradient} h-32 flex justify-center items-center`}>
              <div
                className={`w-16 h-16 bg-white rounded-full flex items-center justify-center ${m.color} text-2xl font-bold`}
              >
                {m.initial}
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
              <p className={`text-sm font-medium ${m.color}`}>{m.role}</p>
              <p className="mt-2 text-sm text-gray-600">{m.study}</p>

              <div className="flex justify-center gap-4 mt-4">
                {m.github && (
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
