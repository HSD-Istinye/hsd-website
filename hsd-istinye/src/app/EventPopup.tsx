"use client";
import React, { useState, useEffect } from "react";

const EVENT_POPUP_KEY = "hsd_event_popup_dismissed";

export default function EventPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem(EVENT_POPUP_KEY)) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      // Trigger entrance animation on next frame
      requestAnimationFrame(() => setIsAnimating(true));
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem(EVENT_POPUP_KEY, "true");
    }, 300);
  };

  const handleRegister = () => {
    closePopup();
    setTimeout(() => {
      const el = document.getElementById("latest-event");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 350);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${isAnimating ? "bg-black/60 backdrop-blur-sm" : "bg-black/0"
        }`}
      onClick={closePopup}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg transform transition-all duration-300 ease-out ${isAnimating
          ? "scale-100 opacity-100 translate-y-0"
          : "scale-95 opacity-0 translate-y-4"
          }`}
      >
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20">
          {/* Top image banner */}
          <div className="relative bg-gray-100">
            {/* Event image - show full image */}
            <img
              src="/images/event1.jfif"
              alt="Upcoming Event"
              className="w-full object-contain"
            />

            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 z-10 text-gray-500 hover:text-gray-800 transition-colors p-1.5 rounded-full bg-white/80 hover:bg-white shadow-md"
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Bottom section */}
          <div className="bg-transparent px-8 py-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-5">
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleRegister}
                className="flex-1 bg-white/90 backdrop-blur-sm text-purple-700 font-semibold py-3 px-6 rounded-xl shadow-lg shadow-black/10 hover:bg-white hover:shadow-black/20 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 border border-white/50"
              >
                <span></span>
                Register Now
              </button>
              <button
                onClick={closePopup}
                className="flex-1 bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/50 transition-all duration-200 border border-white/30"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
