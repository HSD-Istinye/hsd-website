import React from 'react';
import { Code, Zap, Mic, Users, Eye, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SponsorLogoProps {
  name: string;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ name }) => (
  <div className="flex-shrink-0 flex items-center justify-center h-16 w-32 bg-gray-100 rounded-lg mx-4">
    <span className="text-gray-500 font-semibold">{name}</span>
  </div>
);

const Section3: React.FC = () => {
  const sponsors: string[] = ["Meta", "Apple", "Huawei", "Microsoft", "Google", "Amazon", "Netflix"];

  const scrollWidth = `calc(-${sponsors.length * 10}rem)`;

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(${scrollWidth}); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-white font-sans text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Our Events Section */}
          <section id="our-events" className="text-center mb-20">
            <h2 className="text-3xl font-extrabold mb-4">Our Events</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join us for exciting workshops, hackathons, and networking events designed to enhance your coding skills
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Coding Workshops */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-left transform hover:-translate-y-2 transition-transform duration-300">
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 inline-block mb-6">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Coding Workshops</h3>
                <p className="text-gray-600 mb-6">
                  Hands-on workshops covering the latest technologies, frameworks, and development practices.
                </p>
                <div className="text-sm">
                  <span className="text-purple-600 font-semibold">Weekly • Saturdays</span>
                </div>
              </div>

              {/* Card 2: Hackathons */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-left transform hover:-translate-y-2 transition-transform duration-300">
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-400 to-teal-500 inline-block mb-6">
                  <Zap className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Hackathons</h3>
                <p className="text-gray-600 mb-6">
                  24-hour coding competitions where teams build innovative solutions to real-world problems.
                </p>
                <div className="text-sm">
                  <span className="text-green-600 font-semibold">Monthly • Weekends</span>
                </div>
              </div>

              {/* Card 3: Tech Talks */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-left transform hover:-translate-y-2 transition-transform duration-300">
                <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 inline-block mb-6">
                  <Mic className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Tech Talks</h3>
                <p className="text-gray-600 mb-6">
                  Industry experts share insights on emerging technologies and career development.
                </p>
                <div className="text-sm">
                  <span className="text-orange-600 font-semibold">Bi-weekly • Thursdays</span>
                </div>
              </div>
            </div>
          </section>

          {/* Sponsorships Section */}
          <section id="sponsorships" className="text-center">
            <h2 className="text-3xl font-extrabold mb-4">Sponsorships</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
              Partner with us to support the next generation of developers and gain access to top talent
            </p>

            {/* Our Sponsors - Sliding Marquee */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-gray-700 mb-8">Our Sponsors</h3>
              <div className="relative w-full overflow-hidden group">
                <div className="flex w-max animate-scroll">
                  {/* Render logos twice for a seamless loop */}
                  {[...sponsors, ...sponsors].map((sponsor, index) => (
                    <SponsorLogo key={`${sponsor}-${index}`} name={sponsor} />
                  ))}
                </div>
              </div>
            </div>

            {/* Why Sponsor Us? */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-700 mb-10">Why Sponsor Us?</h3>
              <div className="grid md:grid-cols-3 gap-10 text-left">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-purple-100 rounded-full mb-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Access to Top Talent</h4>
                  <p className="text-gray-600">Connect with skilled students for internships and full-time positions</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-100 rounded-full mb-4">
                    <Eye className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Brand Visibility</h4>
                  <p className="text-gray-600">Showcase your company to 150+ active developer students</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-green-100 rounded-full mb-4">
                    <Handshake className="text-green-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Innovation Partnership</h4>
                  <p className="text-gray-600">Collaborate on cutting-edge projects and research initiatives</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <Link href="/form" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
                <span role="img" aria-label="rocket" className="mr-2">🚀</span>
                Become a Sponsor
                <ArrowRight className="ml-3" size={20} />
              </Link>
              <p className="text-gray-500 mt-4 text-sm">Join leading companies supporting innovation</p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Section3;