"use client";
import React, { useState, useMemo } from 'react';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Laptop, Trophy, Mic, Users, Eye, Handshake, ArrowRight, ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';

// --- Type Definitions ---
type EventColor = 'purple' | 'green' | 'orange' | 'blue' | 'red';

interface Event {
  id: number;
  date?: string;
  title: string;
  description: string;
  color: EventColor;
  questions?: string | null;
  created_at: string;
}

type CalendarDay =
  | { key: string; type: 'day'; day: number; date: Date; events: Event[] }
  | { key: string; type: 'empty' };

// --- Utility Functions ---
const formatDate = (date: Date | null | undefined): string => {
  if (!date) return '';
  const d = new Date(date);
  // Adjust for timezone to get the correct YYYY-MM-DD
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split('T')[0];
};

// --- Helper Components ---
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


// --- Sample Data ---
const sampleEvents: Event[] = [
    { id: 1001, created_at: '2025-09-06T10:00:00Z', title: 'Intro to React', description: 'Learn the fundamentals of React.', color: 'purple', questions: 'What are hooks?' },
    { id: 1002, created_at: '2025-09-13T12:00:00Z', title: 'Advanced CSS', description: 'Deep dive into Grid and Flexbox.', color: 'green', questions: 'How does CSS Grid work?' },
    { id: 1003, created_at: '2025-09-13T14:00:00Z', title: 'State Management Talk', description: 'Exploring different state management libraries.', color: 'orange', questions: 'Redux or Zustand?' },
    { id: 1004, created_at: '2025-09-20T09:00:00Z', title: 'UI/UX Design Principles', description: 'A workshop on creating intuitive user interfaces.', color: 'blue', questions: 'What is user-centered design?' },
];


// --- Main Component ---
const Section3: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 24));
  const [events, setEvents] = useState<Event[]>(sampleEvents.map(e => ({...e, date: e.created_at.split('T')[0] })));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const HARDCODED_PASSWORD = 'hsd';


  // --- Constants and Configuration ---
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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  const colorClasses: Record<EventColor, string> = {
    purple: 'bg-purple-100 text-purple-800 border-l-4 border-purple-500',
    green: 'bg-green-100 text-green-800 border-l-4 border-green-500',
    orange: 'bg-orange-100 text-orange-800 border-l-4 border-orange-500',
    blue: 'bg-blue-100 text-blue-800 border-l-4 border-blue-500',
    red: 'bg-red-100 text-red-800 border-l-4 border-red-500',
  };


  // --- Calendar Logic ---
  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const performActionWithPassword = (action: () => void) => {
    // In a real app, you'd show a modal here.
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
        setEventTitle('');
        setEventDescription('');
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
      setEvents(events.map(e => e.id === editingEvent.id ? { ...e, title: eventTitle, description: eventDescription, date: formatDate(selectedDate) } : e));
    } else {
      const newEvent: Event = {
        id: Date.now(),
        title: eventTitle,
        description: eventDescription,
        created_at: selectedDate.toISOString(),
        date: formatDate(selectedDate),
        color: (['purple', 'green', 'orange', 'blue', 'red'] as EventColor[])[Math.floor(Math.random() * 5)],
      };
      setEvents([...events, newEvent]);
    }
    closeModal();
  };

  const handleDeleteEvent = (eventId: number) => {
    performActionWithPassword(() => {
        setEvents(events.filter(e => e.id !== eventId));
        closeModal();
    });
  };

  const { monthName, year, daysInMonth, firstDayOfMonth } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    return {
      monthName: currentDate.toLocaleString('default', { month: 'long' }),
      year,
      daysInMonth: new Date(year, month + 1, 0).getDate(),
      firstDayOfMonth: firstDay === 0 ? 6 : firstDay - 1, 
    };
  }, [currentDate]);

  const calendarDays = useMemo((): CalendarDay[] => {
    const days: CalendarDay[] = Array.from({ length: firstDayOfMonth }, (_, i) => ({ key: `empty-${i}`, type: 'empty' }));
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, currentDate.getMonth(), day);
      const dateStr = formatDate(date);
      const dayEvents = events.filter(e => e.date === dateStr);
      days.push({ key: `day-${day}`, type: 'day', day, date, events: dayEvents });
    }
    return days;
  }, [firstDayOfMonth, daysInMonth, year, currentDate, events]);


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
        .event-slider .slick-track { display: flex !important; }
        .event-slider .slick-slide { height: inherit !important; }
        .event-slider .slick-slide > div { height: 100%; display: flex; }
      `}</style>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
                {selectedDate && <p className="text-sm text-gray-500 mb-4">Date: {formatDate(selectedDate)}</p>}
                <input
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="Event Title"
                    className="w-full p-2 border rounded mb-4"
                />
                <textarea
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    placeholder="Event Description"
                    className="w-full p-2 border rounded mb-4"
                    rows={4}
                />
                <div className="flex justify-end gap-2">
                    {editingEvent && (
                        <button onClick={() => handleDeleteEvent(editingEvent.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join us for exciting workshops, hackathons, and networking events designed to enhance your coding skills.
            </p>
                 <div className="max-w-4xl mx-auto">
              <div className="mt-12 bg-white rounded-xl shadow-lg p-4 text-left">
                <div className="flex justify-between items-center mb-4">
                  <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100"><ChevronLeft size={20} className="text-gray-600" /></button>
                  <h3 className="text-xl font-bold text-gray-800">{monthName} {year}</h3>
                  <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100"><ChevronRight size={20} className="text-gray-600" /></button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (<div key={day} className="text-center font-semibold text-gray-500 text-xs py-2">{day}</div>))}
                  {calendarDays.map(dayInfo => {
                    if (dayInfo.type === 'empty') return <div key={dayInfo.key} className="border rounded-md border-transparent"></div>;
                    const { key, day, date, events: dayEvents } = dayInfo;
                    const isToday = formatDate(new Date()) === formatDate(date);
                    return (
                      <div key={key} className="relative border border-gray-200 rounded-md p-1 min-h-[8rem] flex flex-col group bg-gray-50 hover:bg-white transition-colors duration-200">
                        <div className={`text-xs font-semibold self-start mb-1 ${isToday ? 'bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center' : 'text-gray-700'}`}>{day}</div>
                        <div className="flex-grow overflow-y-auto space-y-1 text-xs">
                           {dayEvents.map(event => (
                            <div key={event.id} onClick={() => openEditModal(event)} className={`p-1.5 rounded cursor-pointer ${colorClasses[event.color] || colorClasses.blue}`}>
                              <p className="font-semibold truncate">{event.title}</p>
                            </div>
                           ))}
                        </div>
                         <button onClick={() => openAddModal(date)} className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 text-purple-500 hover:text-purple-700 transition-opacity">
                            <PlusCircle size={18} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-16 relative">
              <Slider {...sliderSettings} className="event-slider">
                {eventCards.map((card) => (
                  <div key={card.key} className="px-3 py-4 h-full">
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col h-full bg-white">
                      <div className={`${card.headerClasses} p-8 text-white flex flex-col items-center text-center gap-4`}>
                        <div className="p-3 rounded-lg bg-white/20">{card.icon}</div>
                        <h3 className="text-xl font-bold">{card.title}</h3>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="text-left">
                            <div className="font-semibold text-gray-800">{card.participants}</div>
                            <div className="text-xs text-gray-500 mt-1">{card.meta}</div>
                          </div>
                          <Link href={card.href} className={`text-sm font-semibold ${card.buttonClasses} text-white px-4 py-2 rounded-full transition-transform hover:scale-105`}>
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          <section className="text-center mt-24">
            <h2 className="text-3xl font-extrabold mb-4">Sponsorships</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
              Partner with us to support the next generation of developers and gain access to top talent.
            </p>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-gray-700 mb-8">Our Sponsors</h3>
              <div className="relative w-full overflow-hidden group py-4">
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
                <div className="flex flex-col items-center text-center p-4">
                  <div className="p-3 bg-purple-100 rounded-full mb-4"><Users className="text-purple-600" size={24} /></div>
                  <h4 className="text-lg font-bold mb-2">Access to Top Talent</h4>
                  <p className="text-gray-600">Connect with skilled students for internships and full-time positions.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="p-3 bg-blue-100 rounded-full mb-4"><Eye className="text-blue-600" size={24} /></div>
                  <h4 className="text-lg font-bold mb-2">Brand Visibility</h4>
                  <p className="text-gray-600">Showcase your company to 150+ active developer students.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="p-3 bg-green-100 rounded-full mb-4"><Handshake className="text-green-600" size={24} /></div>
                  <h4 className="text-lg font-bold mb-2">Innovation Partnership</h4>
                  <p className="text-gray-600">Collaborate on cutting-edge projects and research initiatives.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
                Become a Sponsor
                <ArrowRight className="ml-3" size={20} />
              </button>
              <p className="text-gray-500 mt-4 text-sm">Join leading companies supporting innovation.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Section3;
