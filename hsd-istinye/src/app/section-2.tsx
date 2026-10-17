"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
// section-4.tsx ile aynı import yolu (dosya src/app içinde değilse yolu ona göre düzeltin)
import { createClient } from "../../supabase/client";

interface Member {
  name: string;
  role: string;
  study: string;
  image: string;
  initial: string;
  gradient: string;
  color: string;
  github?: string;
  linkedin?: string;
}

interface TeamGroup {
  title: string;
  emoji: string;
  members: Member[];
  accentGradient: string;
  dotColor: string;
}

// ---- Supabase'deki team_members tablosunun satır yapısı ----
type TeamKey = "leaders" | "project" | "events" | "social";

interface DbMember {
  id: number;
  name: string;
  role: string | null;
  title: string | null;
  team: TeamKey;
  github_url: string | null;
  linkedin_url: string | null;
  photo_url: string | null;
  sort_order: number | null;
}

// Kart renkleri otomatik atanır (istediğiniz gibi değiştirebilirsiniz)
const TEAM_STYLES: Record<TeamKey, { gradient: string; color: string }> = {
  leaders: { gradient: "from-green-500 to-teal-500", color: "text-green-600" },
  project: { gradient: "from-blue-500 to-purple-500", color: "text-purple-600" },
  events: { gradient: "from-orange-500 to-red-500", color: "text-orange-600" },
  social: { gradient: "from-pink-500 to-purple-500", color: "text-pink-600" },
};

// Liderler kendi ekiplerinin rengini alır (ör. "Event Team Leader" → turuncu)
function styleFor(d: DbMember) {
  const role = (d.role ?? "").toLowerCase();
  if (role.includes("event")) return TEAM_STYLES.events;
  if (role.includes("project")) return TEAM_STYLES.project;
  if (role.includes("social")) return TEAM_STYLES.social;
  return TEAM_STYLES[d.team] ?? TEAM_STYLES.project;
}

// Sekme başlıkları ve renkleri kodda kalır, üyeler veritabanından gelir
const TEAM_CONFIG: (Omit<TeamGroup, "members"> & { key: TeamKey })[] = [
  {
    key: "leaders",
    title: "Team Leaders",
    emoji: "👑",
    accentGradient: "from-amber-400 via-yellow-500 to-orange-500",
    dotColor: "bg-amber-500",
  },
  {
    key: "project",
    title: "Project Team",
    emoji: "💻",
    accentGradient: "from-blue-500 via-indigo-500 to-purple-600",
    dotColor: "bg-indigo-500",
  },
  {
    key: "events",
    title: "Events Team",
    emoji: "🎪",
    accentGradient: "from-orange-400 via-red-500 to-pink-500",
    dotColor: "bg-red-500",
  },
  {
    key: "social",
    title: "Social Media Team",
    emoji: "📱",
    accentGradient: "from-pink-500 via-fuchsia-500 to-purple-600",
    dotColor: "bg-pink-500",
  },
];

function toMember(d: DbMember): Member {
  const style = styleFor(d);
  return {
    name: d.name,
    role: d.role ?? "",
    study: d.title ?? "",
    image: d.photo_url ?? "",
    initial: d.name.charAt(0).toUpperCase(),
    gradient: style.gradient,
    color: style.color,
    github: d.github_url ?? undefined,
    linkedin: d.linkedin_url ?? undefined,
  };
}

const SLIDE_INTERVAL = 3500;

export default function Section2() {
  // ---- Üyeleri Supabase'den çek ----
  const [rows, setRows] = useState<DbMember[]>([]);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("team_members")
      .select("*")
      .order("sort_order")
      .then(({ data, error }) => {
        if (error) {
          console.error("Ekip üyeleri alınamadı:", error.message);
          return;
        }
        setRows((data ?? []) as DbMember[]);
      });
  }, []);

  const teamGroups: TeamGroup[] = TEAM_CONFIG.map(({ key, ...group }) => ({
    ...group,
    members: rows.filter((r) => r.team === key).map(toMember),
  }));

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const elapsedRef = useRef(0); // tracks ms elapsed before pause
  const startTimeRef = useRef(Date.now());

  const totalSlides = teamGroups.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setProgress(0);
      elapsedRef.current = 0;
      setTimeout(() => {
        setActiveSlide(index);
        startTimeRef.current = Date.now();
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % totalSlides);
  }, [activeSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + totalSlides) % totalSlides);
  }, [activeSlide, totalSlides, goToSlide]);

  // Auto-advance timer — schedules only the remaining time after a pause
  useEffect(() => {
    if (isPaused || isTransitioning) {
      // Save how much time has elapsed so far before pausing
      if (!isPaused) return; // only save on pause, not on transition
      elapsedRef.current += Date.now() - startTimeRef.current;
      return;
    }

    // Resuming — schedule the remaining time
    const remaining = Math.max(SLIDE_INTERVAL - elapsedRef.current, 0);
    startTimeRef.current = Date.now();

    slideRef.current = setTimeout(() => {
      nextSlide();
    }, remaining);

    return () => {
      if (slideRef.current) clearTimeout(slideRef.current);
    };
  }, [activeSlide, isPaused, isTransitioning, nextSlide]);

  // Progress bar animation — resumes from the saved progress
  useEffect(() => {
    if (isPaused || isTransitioning) {
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    const step = 100 / (SLIDE_INTERVAL / 30);
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + step;
      });
    }, 30);

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [activeSlide, isPaused, isTransitioning]);

  const currentGroup = teamGroups[activeSlide];

  return (
    <section className="py-16 bg-gray-50 text-gray-800 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-2 mb-4 rounded"></div>
        <p className="text-gray-600">
          Meet the passionate individuals driving innovation and excellence in our developer community
        </p>
      </div>

      {/* Carousel container */}
      <div
        className="max-w-7xl mx-auto px-4 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous team"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next team"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Slide content */}
        <div className="mx-12">
          {/* Group badge */}
          <div
            className={`flex items-center justify-center gap-3 mb-8 transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
          >
            <span className="text-3xl">{currentGroup.emoji}</span>
            <h3
              className={`text-2xl font-bold bg-gradient-to-r ${currentGroup.accentGradient} bg-clip-text text-transparent`}
            >
              {currentGroup.title}
            </h3>
            <span className="text-3xl">{currentGroup.emoji}</span>
          </div>

          {/* Members grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500 ease-out ${isTransitioning
              ? "opacity-0 scale-95 translate-y-4"
              : "opacity-100 scale-100 translate-y-0"
              }`}
          >
            {currentGroup.members.map((m, index) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient header with avatar */}
                <div className={`bg-gradient-to-r ${m.gradient} h-32 flex justify-center items-center relative`}>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                  {m.image ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white/30 shadow-lg relative z-10">
                      <Image
                        src={m.image}
                        alt={m.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-20 h-20 bg-white rounded-full flex items-center justify-center ${m.color} text-3xl font-bold shadow-lg relative z-10`}
                    >
                      {m.initial}
                    </div>
                  )}
                </div>

                {/* Info section */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                  <p className={`text-sm font-medium ${m.color} mt-1`}>{m.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{m.study}</p>

                  <div className="flex justify-center gap-4 mt-4">
                    {m.github && (
                      <a
                        href={m.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots & progress */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            {teamGroups.map((group, index) => (
              <button
                key={group.title}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${group.title}`}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${index === activeSlide
                  ? "bg-gray-900 text-white shadow-md scale-105"
                  : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 shadow-sm"
                  }`}
              >
                <span className="text-xs">{group.emoji}</span>
                <span className="hidden sm:inline">{group.title}</span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${currentGroup.accentGradient} rounded-full transition-none`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}