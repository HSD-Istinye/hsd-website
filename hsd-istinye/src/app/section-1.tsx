import React from 'react';

const HuaweiStudentDevelopers = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-md overflow-hidden">
        
        <div className="bg-white px-8 py-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
           
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <span className="font-bold text-purple-600">H</span>
              </div>
              <h1 className="font-bold text-lg">
                HSD <span className="text-gray-400">•</span>{' '}
                <span className="text-gray-600">Istinye</span>
              </h1>
            </div>

            {}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">Who are we?</a>
              <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">Our Events</a>
              <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">Sponsorships</a>
              <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">Contact Us</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-900" aria-label="Open menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hero (VIDEO BACKGROUND) */}
        <section className="relative overflow-hidden">
          {/* Video layer */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            poster="/videos/hero-poster.jpg"  // opsiyonel poster
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
            {/* Tarayıcı video desteklemezse mor arkaplan fallback */}
          </video>

          {/* Mor overlay (okunabilirlik için) */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-700/40 to-purple-700/10" />

          {/* Content layer */}
          <div className="relative px-8 py-20 md:py-28 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Huawei Student Developers</h2>
            <p className="text-2xl mb-6 opacity-90">Istinye University</p>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Empowering the next generation of developers through innovation, collaboration, and cutting-edge technology
            </p>
            {/* Çizgi KALDIRILDI */}
            <button className="bg-white text-purple-700 font-medium py-3 px-8 rounded-full transition hover:bg-opacity-90 mt-6">
              Learn More
            </button>
          </div>
        </section>

        {/* Who are we + Vision */}
        <section className="px-8 py-12">
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
                  <div className="text-4xl font-bold mb-2 text-purple-600">150+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2 text-purple-600">25+</div>
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
