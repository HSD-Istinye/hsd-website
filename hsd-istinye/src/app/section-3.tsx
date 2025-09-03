"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Code, Zap, Mic, Users, Eye, Handshake, ArrowRight } from 'lucide-react';



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

  const eventCards = [
    {
      icon: <Handshake size={28} className="text-white" />,
      iconBg: "bg-gradient-to-br from-yellow-400 to-orange-300",
      title: "Collaborations",
      desc: "Collaborative sessions where students work on projects together with guidance from experts.",
      time: "Weekly • Mondays",
      timeColor: "text-yellow-600",
    },
    {
      icon: <Code size={28} className="text-white" />,
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
      title: "Coding Workshops",
      desc: "Hands-on workshops covering the latest technologies, frameworks, and development practices.",
      time: "Weekly • Saturdays",
      timeColor: "text-purple-600",
    },
    {
      icon: <Zap size={28} className="text-white" />,
      iconBg: "bg-gradient-to-br from-green-400 to-teal-500",
      title: "Hackathons",
      desc: "24-hour coding competitions where teams build innovative solutions to real-world problems.",
      time: "Monthly • Weekends",
      timeColor: "text-green-600",
    },
        {
      icon: <Code size={28} className="text-white" />,
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
      title: "Coding Workshops",
      desc: "Hands-on workshops covering the latest technologies, frameworks, and development practices.",
      time: "Weekly • Saturdays",
      timeColor: "text-purple-600",
    },
        {
      icon: <Zap size={28} className="text-white" />,
      iconBg: "bg-gradient-to-br from-green-400 to-teal-500",
      title: "Hackathons",
      desc: "24-hour coding competitions where teams build innovative solutions to real-world problems.",
      time: "Monthly • Weekends",
      timeColor: "text-green-600",
    },
    
  ];

  // Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700 hover:text-gray-900"
      onClick={onClick}
    >
      <ArrowRight size={28} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700 hover:text-gray-900"
      onClick={onClick}
    >
      <ArrowRight size={28} className="rotate-180" />
    </div>
  );
};

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, eventCards.length),
    slidesToScroll: 1,
    arrows: true,          
    autoplay: true,        
    autoplaySpeed: 3000,   
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          100% { transform: translateX(calc(-100% - 1rem * ${sponsors.length})); }
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

             {/* Events Section */}
          <section className="text-center mb-20">
            <h2 className="text-3xl font-extrabold mb-4">Our Events</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join us for exciting workshops, hackathons, and networking events designed to enhance your coding skills
            </p>

            <div className="event-slider-wrapper relative px-4 sm:px-6 lg:px-8">

              <div className="mt-12  max-w-7xl mx-auto">
                <Slider {...sliderSettings} className="pb-12">
                  {eventCards.map((card, idx) => (
                    <div key={idx} className="px-4">
                      <div className="bg-white rounded-2xl border shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 h-full flex flex-col justify-between text-left">
                        <div>
                          <div className={`p-4 rounded-lg inline-block mb-6 ${card.iconBg}`}>
                            {card.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                          <p className="text-gray-600 mb-6">{card.desc}</p>
                        </div>
                        <div className="text-sm">
                          <span className={`${card.timeColor} font-semibold`}>{card.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
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
