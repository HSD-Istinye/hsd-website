import React from 'react';
import Link from "next/link";
import { Code, Zap, Trophy, Laptop, Mic, Users, Eye, Handshake, ArrowRight } from 'lucide-react';

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
          <section className="text-center mb-20">
            <h2 className="text-3xl font-extrabold mb-4">Our Events</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join us for exciting workshops, hackathons, and networking events designed to enhance your coding skills
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Coding Workshops (reworked layout) */}
              <div className="rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-8 text-white flex flex-col items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/10">
                    <Laptop size={36} />
                  </div>
                  <h3 className="text-xl font-bold">Coding Workshops</h3>
                </div>

                <div className="bg-white p-6">
                  <p className="text-gray-600 mb-6">
                    Hands-on workshops covering the latest technologies, frameworks, and development practices.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">250+ Participants</div>
                      <div className="text-xs text-gray-500 mt-1">Weekly • Saturdays • 8 Workshops Held</div>
                    </div>

                    <Link href="/events/workshops" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-full">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Hackathons (reworked layout) */}
              <div className="rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-8 text-white flex flex-col items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/10">
                    <Trophy size={36} />
                  </div>
                  <h3 className="text-xl font-bold">Hackathons</h3>
                </div>

                <div className="bg-white p-6">
                  <p className="text-gray-600 mb-6">
                    24-hour coding competitions where teams build innovative solutions to real-world problems.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">250+ Participants</div>
                      <div className="text-xs text-gray-500 mt-1">Monthly • Weekends • 5 Events Completed</div>
                    </div>

                    <Link href="/events/hackathons" className="text-sm bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 rounded-full">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3: Tech Talks (reworked layout) */}
              <div className="rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-green-400 to-teal-400 p-8 text-white flex flex-col items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/10">
                    <Mic size={36} />
                  </div>
                  <h3 className="text-xl font-bold">Tech Talks</h3>
                </div>

                <div className="bg-white p-6">
                  <p className="text-gray-600 mb-6">
                    Industry experts share insights on emerging technologies and career development.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">250+ Participants</div>
                      <div className="text-xs text-gray-500 mt-1">Bi-weekly • Thursdays • 12 Talks Given</div>
                    </div>

                    <Link href="/events/tech-talks" className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sponsorships Section */}
          <section className="text-center">
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
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
                <span role="img" aria-label="rocket" className="mr-2">🚀</span>
                Become a Sponsor
                <ArrowRight className="ml-3" size={20} />
              </button>
              <p className="text-gray-500 mt-4 text-sm">Join leading companies supporting innovation</p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Section3;


