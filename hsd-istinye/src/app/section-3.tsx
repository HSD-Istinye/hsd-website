"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Code, Zap, Trophy, Laptop, Mic, Users, Eye, Handshake, ArrowRight } from "lucide-react";

interface SponsorLogoProps {
  name: string;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ name }) => (
  <div className="flex-shrink-0 flex items-center justify-center h-16 w-32 bg-gray-100 rounded-lg mx-4">
    <span className="text-gray-500 font-semibold">{name}</span>
  </div>
);

const NextArrow: React.FC<any> = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next"
    onClick={onClick}
    className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50"
  >
    <ArrowRight size={20} />
  </button>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous"
    onClick={onClick}
    className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50"
  >
    <ArrowRight size={20} className="rotate-180" />
  </button>
);

const Section3: React.FC = () => {
  const sponsors: string[] = ["Meta", "Apple", "Huawei", "Microsoft", "Google", "Amazon", "Netflix"];

  const scrollWidth = `calc(-${sponsors.length * 10}rem)`;

  const eventCards = [
    {
      key: "workshops-1",
      title: "Coding Workshops",
      icon: <Laptop size={36} />,
      headerClasses: "bg-gradient-to-br from-blue-400 to-indigo-600",
      description:"Hands-on workshops covering the latest technologies, frameworks, and development practices.",
      participants: "250+ Participants",
      meta: "Weekly • Saturdays • 8 Workshops Held",
      href: "/events/workshops",
      buttonClasses: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      key: "hackathons-1",
      title: "Hackathons",
      icon: <Trophy size={36} />,
      headerClasses: "bg-gradient-to-br from-pink-500 to-purple-500",
      description:
        "24-hour coding competitions where teams build innovative solutions to real-world problems.",
      participants: "250+ Participants",
      meta: "Monthly • Weekends • 5 Events Completed",
      href: "/events/hackathons",
      buttonClasses: "bg-pink-600 hover:bg-pink-700",
    },
    {
      key: "talks-1",
      title: "Tech Talks",
      icon: <Mic size={36} />,
      headerClasses: "bg-gradient-to-br from-green-400 to-teal-400",
      description: "Industry experts share insights on emerging technologies and career development.",
      participants: "250+ Participants",
      meta: "Bi-weekly • Thursdays • 12 Talks Given",
      href: "/events/tech-talks",
      buttonClasses: "bg-green-600 hover:bg-green-700",
    },
    {
      key: "workshops-2",
      title: "Coding Workshops",
      icon: <Laptop size={36} />,
      headerClasses: "bg-gradient-to-br from-blue-400 to-indigo-600",
      description:"Hands-on workshops covering the latest technologies, frameworks, and development practices.",
      participants: "250+ Participants",
      meta: "Weekly • Saturdays • 8 Workshops Held",
      href: "/events/workshops",
      buttonClasses: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      key: "hackathons-2",
      title: "Hackathons",
      icon: <Trophy size={36} />,
      headerClasses: "bg-gradient-to-br from-pink-500 to-purple-500",
      description:
        "24-hour coding competitions where teams build innovative solutions to real-world problems.",
      participants: "250+ Participants",
      meta: "Monthly • Weekends • 5 Events Completed",
      href: "/events/hackathons",
      buttonClasses: "bg-pink-600 hover:bg-pink-700",
    },
    {
      key: "talks-2",
      title: "Tech Talks",
      icon: <Mic size={36} />,
      headerClasses: "bg-gradient-to-br from-green-400 to-teal-400",
      description: "Industry experts share insights on emerging technologies and career development.",
      participants: "250+ Participants",
      meta: "Bi-weekly • Thursdays • 12 Talks Given",
      href: "/events/tech-talks",
      buttonClasses: "bg-green-600 hover:bg-green-700",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, eventCards.length),
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(3, eventCards.length) } },
      { breakpoint: 768, settings: { slidesToShow: Math.min(2, eventCards.length) } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

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
        .event-slider .slick-track { display: flex !important; align-items: stretch; }
        .event-slider .slick-slide { height: auto; display: flex; align-items: stretch; }
        .event-slider .slick-slide > div { width: 100%; display: flex; flex-direction: column; }

      `}</style>

      <div className="bg-white font-sans text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Our Events Section */}
          <section className="text-center mb-20">
            <h2 className="text-3xl font-extrabold mb-4">Our Events</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join us for exciting workshops, hackathons, and networking events designed to enhance your coding skills
            </p>

            {/* Carousel replacing the original grid but keeping cards content */}
            <div className="mt-12 relative">
              <Slider {...sliderSettings} className="event-slider">
                {eventCards.map((card) => (
                  <div key={card.key} className="px-3 h-full">
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                      <div className={`${card.headerClasses} p-8 text-white flex flex-col items-center gap-4`}>
                        <div className="p-3 rounded-lg bg-white/10">{card.icon}</div>
                        <h3 className="text-xl font-bold">{card.title}</h3>
                      </div>

                      <div className="bg-white p-6 flex flex-col flex-1">
                        <div className="flex-1">
                          <p className="text-gray-600 mb-6">{card.description}</p>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="text-left">
                            <div className="font-semibold text-gray-800">{card.participants}</div>
                            <div className="text-xs text-gray-500 mt-1">{card.meta}</div>
                          </div>

                          <Link href={card.href} className={`text-sm ${card.buttonClasses} text-white px-3 py-2 rounded-full`}>
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* Sponsorships Section */}
          <section className="text-center">
            <h2 className="text-3xl font-extrabold mb-4">Sponsorships</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
              Partner with us to support the next generation of developers and gain access to top talent
            </p>

            {/* Our Sponsors*/}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-gray-700 mb-8">Our Sponsors</h3>
              <div className="relative w-full overflow-hidden group">
                <div className="flex w-max animate-scroll">
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


