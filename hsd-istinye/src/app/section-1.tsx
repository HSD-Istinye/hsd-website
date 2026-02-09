"use client"
import React, { useCallback } from 'react';

const HuaweiStudentDevelopers = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-screen-2xl w-full mx-auto bg-white rounded-2xl shadow-md overflow-hidden">

        {/* Enhanced Header */}
        <div className="bg-white/80 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-purple-100 sticky top-0 z-50">
          <div className="flex justify-between items-center">

            {/* Logo with actual image */}
            <div className="flex items-center group cursor-pointer">
              <img
                src="/hsd-logo.jpg"
                alt="HSD Logo"
                className="w-11 h-11 rounded-xl object-cover mr-3 shadow-lg shadow-purple-200 group-hover:shadow-purple-300 transition-all duration-300 group-hover:scale-105"
              />
              <h1 className="font-bold text-xl">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">HSD</span>
                <span className="text-gray-300 mx-2">•</span>
                <span className="text-gray-600 font-medium">Istinye</span>
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('who-are-we')}
                className="text-gray-900 hover:text-purple-600 transition-colors"
              >
                Who are we?
              </button>
              <button
                onClick={() => scrollToSection('our-events')}
                className="text-gray-900 hover:text-purple-600 transition-colors"
              >
                Our Events
              </button>
              <button
                onClick={() => scrollToSection('sponsorships')}
                className="text-gray-900 hover:text-purple-600 transition-colors"
              >
                Sponsorships
              </button>
              <button
                onClick={() => scrollToSection('contact-us')}
                className="text-gray-900 hover:text-purple-600 transition-colors"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile menu button - now functional */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
          >
            <nav className="flex flex-col space-y-1 pb-2">
              <button
                onClick={() => scrollToSection('who-are-we')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl font-medium transition-all duration-200"
              >
                Who are we?
              </button>
              <button
                onClick={() => scrollToSection('our-events')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl font-medium transition-all duration-200"
              >
                Our Events
              </button>
              <button
                onClick={() => scrollToSection('sponsorships')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl font-medium transition-all duration-200"
              >
                Sponsorships
              </button>
              <button
                onClick={() => scrollToSection('contact-us')}
                className="w-full text-left px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-purple-200 transition-all duration-200"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>

        {/* Hero (VIDEO BACKGROUND) */}
        <section className="relative overflow-hidden h-screen">
          {/* Video container - Kesin çözüm */}
          <div className="absolute inset-0 w-full h-full">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              aria-hidden="true"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              {/* Tarayıcı video desteklemezse mor arkaplan fallback */}
            </video>
          </div>

          {/* Mor overlay (okunabilirlik için) */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-700/40 to-purple-700/10" />

          {/* Content layer */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Huawei Student Developers</h2>
            <p className="text-2xl mb-6 opacity-90">Istinye University</p>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Empowering the next generation of developers through innovation, collaboration, and cutting-edge technology
            </p>
            <button
              onClick={() => scrollToSection('who-are-we')}
              className="bg-white text-purple-700 font-medium py-3 px-8 rounded-full transition hover:bg-opacity-90 mt-6"
            >
              Learn More
            </button>
          </div>
        </section>

        {/* Who are we + Vision */}
        <section id="who-are-we" className="px-8 py-12">
          {/* Başlık ortada */}
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Who are we?</h3>
          <div className="w-20 h-1 bg-purple-600 mb-12 mx-auto" />

          {/* İçerik: 2 sütun */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sol: metin + istatistikler */}
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are a passionate community of software developers and coding enthusiasts at Istinye University, partnered with Huawei to bridge the gap between academic learning and industry innovation.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our mission is to foster technological excellence, provide hands-on learning experiences, and prepare students for successful careers in the rapidly evolving tech industry.
              </p>

              {/* Kenarlık ve gölge yok */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2 text-purple-600">30+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2 text-purple-600">10+</div>
                  <div className="text-gray-600">Events Hosted</div>
                </div>
              </div>
            </div>

            {/* Sağ: Vision kutusu */}
            <div className="bg-purple-50 rounded-xl p-8 flex flex-col items-center justify-center">
              {/* (Opsiyonel) ikon */}
              <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 3l7 9-7 9-7-9 7-9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8v4l3 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h4>
              <div className="w-16 h-1 bg-purple-600 mb-6" />
              <p className="text-gray-700 leading-relaxed text-center">
                To become the leading student developer community that shapes the future of technology through innovation,
                collaboration, and continuous learning.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HuaweiStudentDevelopers;