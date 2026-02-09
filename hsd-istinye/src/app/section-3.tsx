// ...existing code...
"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Trophy,
  Laptop,
  Mic,
  Users,
  Eye,
  Handshake,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
} from "lucide-react";

// ...existing code...
type EventColor = "purple" | "green" | "orange" | "blue" | "red";

interface Event {
  id: number;
  date?: string;
  title: string;
  description: string;
  color: EventColor;
  questions?: string | null;
  created_at: string;
}

type CalendarDay = {
  key: string;
  day: number;
  date: Date;
  events: Event[];
};

// ...existing code...
const formatDate = (date: Date | null | undefined): string => {
  if (!date) return "";
  const d = new Date(date);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split("T")[0];
};

const SponsorLogo: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex-shrink-0 flex items-center justify-center h-16 w-32 bg-gray-100 rounded-lg mx-4">
    <span className="text-gray-500 font-semibold">{name}</span>
  </div>
);

const NextArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next"
    onClick={onClick}
    className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 transition-colors"
  >
    <ChevronRight size={20} />
  </button>
);

const PrevArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous"
    onClick={onClick}
    className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 transition-colors"
  >
    <ChevronLeft size={20} />
  </button>
);

// ...existing code...
const sampleEvents: Event[] = [
  {
    id: 1001,
    created_at: "2025-09-06T10:00:00Z",
    title: "Intro to React",
    description: "Learn the fundamentals of React.",
    color: "purple",
    questions: "What are hooks?",
  },
  {
    id: 1002,
    created_at: "2025-09-13T12:00:00Z",
    title: "Advanced CSS",
    description: "Deep dive into Grid and Flexbox.",
    color: "green",
    questions: "How does CSS Grid work?",
  },
  {
    id: 1003,
    created_at: "2025-09-13T14:00:00Z",
    title: "State Management Talk",
    description: "Exploring different state management libraries.",
    color: "orange",
    questions: "Redux or Zustand?",
  },
  {
    id: 1004,
    created_at: "2025-09-20T09:00:00Z",
    title: "UI/UX Design Principles",
    description: "A workshop on creating intuitive user interfaces.",
    color: "blue",
    questions: "What is user-centered design?",
  },
];

// ...existing code...
const Section3: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 29));
  const [events, setEvents] = useState<Event[]>(
    sampleEvents.map((event) => ({ ...event, date: event.created_at.split("T")[0] }))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const HARDCODED_PASSWORD = "hsd";

  const sponsors = ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"];
  const scrollWidth = `calc(-${sponsors.length * 10}rem)`;

  const eventCards = [
    {
      key: "workshops-1",
      title: "Coding Workshops",
      icon: <Laptop size={36} />,
      headerClasses: "bg-gradient-to-br from-blue-400 to-indigo-600",
      description: "Hands-on workshops covering the latest technologies, frameworks, and development practices.",
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
      description: "24-hour coding competitions where teams build innovative solutions to real-world problems.",
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
      description: "Hands-on workshops covering the latest technologies, frameworks, and development practices.",
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
      description: "Coding competitions where teams build innovative solutions to real-world problems.",
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

  const colorClasses: Record<EventColor, string> = {
    purple: "bg-purple-100 text-purple-800 border-l-4 border-purple-500",
    green: "bg-green-100 text-green-800 border-l-4 border-green-500",
    orange: "bg-orange-100 text-orange-800 border-l-4 border-orange-500",
    blue: "bg-blue-100 text-blue-800 border-l-4 border-blue-500",
    red: "bg-red-100 text-red-800 border-l-4 border-red-500",
  };

  const handlePrevWeek = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  const performActionWithPassword = (action: () => void) => {
    const password = prompt("Please enter the admin password:");
    if (password === HARDCODED_PASSWORD) {
      action();
    } else {
      alert("Incorrect password.");
    }
  };

  const openAddModal = (date: Date) => {
    performActionWithPassword(() => {
      setSelectedDate(date);
      setEditingEvent(null);
      setEventTitle("");
      setEventDescription("");
      setIsModalOpen(true);
    });
  };

  const openEditModal = (event: Event) => {
    performActionWithPassword(() => {
      setEditingEvent(event);
      const date = new Date(event.created_at);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      setSelectedDate(date);
      setEventTitle(event.title);
      setEventDescription(event.description);
      setIsModalOpen(true);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  const handleSaveEvent = () => {
    if (!eventTitle || !selectedDate) return;

    if (editingEvent) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === editingEvent.id
            ? { ...event, title: eventTitle, description: eventDescription, date: formatDate(selectedDate) }
            : event
        )
      );
    } else {
      const newEvent: Event = {
        id: Date.now(),
        title: eventTitle,
        description: eventDescription,
        created_at: selectedDate.toISOString(),
        date: formatDate(selectedDate),
        color: (["purple", "green", "orange", "blue", "red"] as EventColor[])[Math.floor(Math.random() * 5)],
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }

    closeModal();
  };

  const handleDeleteEvent = (eventId: number) => {
    performActionWithPassword(() => {
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
      closeModal();
    });
  };

  const { weekDays, weekRange } = useMemo(() => {
    const startOfWeek = new Date(currentDate);
    const dayOfWeek = startOfWeek.getDay();
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startOfWeek.setDate(startOfWeek.getDate() - diff);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const days: CalendarDay[] = [];
    for (let i = 0; i < 7; i += 1) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      const dateStr = formatDate(date);
      const dayEvents = events.filter((event) => event.date === dateStr);
      days.push({
        key: `day-${i}`,
        day: date.getDate(),
        date,
        events: dayEvents,
      });
    }

    const rangeFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });
    const yearFormatter = new Intl.DateTimeFormat("en-US", { year: "numeric" });
    const range = `${rangeFormatter.format(startOfWeek)} - ${rangeFormatter.format(endOfWeek)}, ${yearFormatter.format(
      startOfWeek
    )}`;

    return { weekDays: days, weekRange: range };
  }, [currentDate, events]);

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
        .event-slider .slick-slide { height: auto; display: flex !important; align-items: stretch; }
        .event-slider .slick-slide > div { width: 100%; display: flex; flex-direction: column; }
      `}</style>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{editingEvent ? "Edit Event" : "Add Event"}</h2>
            {selectedDate && <p className="text-sm text-gray-500 mb-4">Date: {formatDate(selectedDate)}</p>}
            <input
              type="text"
              value={eventTitle}
              onChange={(event) => setEventTitle(event.target.value)}
              placeholder="Event Title"
              className="w-full p-2 border rounded mb-4"
            />
            <textarea
              value={eventDescription}
              onChange={(event) => setEventDescription(event.target.value)}
              placeholder="Event Description"
              className="w-full p-2 border rounded mb-4"
              rows={4}
            />
            <div className="flex justify-end gap-2">
              {editingEvent && (
                <button
                  onClick={() => handleDeleteEvent(editingEvent.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              )}
              <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Cancel
              </button>
              <button onClick={handleSaveEvent} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white font-sans text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-20">
            <h2 className="text-3xl font-extrabold mb-4">Our Events</h2>
            {/*Event registration */}
            <section id="registration-section" className="mt-16 mb-20 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Register for Upcoming Event</h2>

              <div className="relative w-[700px] h-[420px] overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto">

                <iframe
                  src="https://luma.com/embed/event/evt-aICL9XglC4Lr0lh/simple"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    border: "none",
                    display: "block",
                    transform: "scale(1.0)",
                    transformOrigin: "top left",
                    width: "104%",
                    height: "100%"
                  }}
                  allow="fullscreen; payment"
                  scrolling="no"
                ></iframe>
              </div>
            </section>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join us for exciting workshops, hackathons, and networking events designed to enhance your coding skills
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="mt-12 bg-white rounded-xl shadow-lg p-4 text-left">
                <div className="flex justify-between items-center mb-4">
                  <button onClick={handlePrevWeek} className="p-2 rounded-full hover:bg-gray-100">
                    <ChevronLeft size={20} className="text-gray-600" />
                  </button>
                  <h3 className="text-xl font-bold text-gray-800">{weekRange}</h3>
                  <button onClick={handleNextWeek} className="p-2 rounded-full hover:bg-gray-100">
                    <ChevronRight size={20} className="text-gray-600" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-center font-semibold text-gray-500 text-xs py-2">
                      {day}
                    </div>
                  ))}
                  {weekDays.map(({ key, day, date, events: dayEvents }) => {
                    const isToday = formatDate(new Date()) === formatDate(date);
                    return (
                      <div
                        key={key}
                        className="relative border border-gray-200 rounded-md p-1 min-h-[8rem] flex flex-col group bg-gray-50 hover:bg-white transition-colors duration-200"
                      >
                        <div
                          className={`text-xs font-semibold self-start mb-1 ${isToday ? "bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center" : "text-gray-700"
                            }`}
                        >
                          {day}
                        </div>
                        <div className="flex-grow overflow-y-auto space-y-1 text-xs">
                          {dayEvents.map((event) => (
                            <div
                              key={event.id}
                              onClick={() => openEditModal(event)}
                              className={`p-1.5 rounded cursor-pointer ${colorClasses[event.color] || colorClasses.blue}`}
                            >
                              <p className="font-semibold truncate">{event.title}</p>
                            </div>
                          ))}

                        </div>
                        <button
                          onClick={() => openAddModal(date)}
                          className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 text-purple-500 hover:text-purple-700 transition-opacity"
                        >
                          <PlusCircle size={18} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

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

          <section className="text-center">
            <h2 className="text-3xl font-extrabold mb-4">Sponsorships</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
              Partner with us to support the next generation of developers and gain access to top talent
            </p>

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

            <div className="mt-12">
              <Link
                href="/form"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
              >
                <span role="img" aria-label="rocket" className="mr-2">
                  🚀
                </span>
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