import React, { useState, useMemo } from 'react';
import { Code, Zap, Mic, Users, Eye, Handshake, ArrowRight, ChevronLeft, ChevronRight, X, Trash2, PlusCircle, Lock } from 'lucide-react';

// A simple utility to format dates as YYYY-MM-DD
const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const SponsorLogo = ({ name }) => (
  <div className="flex-shrink-0 flex items-center justify-center h-16 w-32 bg-gray-100 rounded-lg mx-4">
    <span className="text-gray-500 font-semibold">{name}</span>
  </div>
);

const App = () => {
  const sponsors = ["Meta", "Apple", "Huawei", "Microsoft", "Google", "Amazon", "Netflix"];
  const scrollWidth = `calc(-${sponsors.length * 10}rem)`;

  // --- Calendar State ---
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 3)); // Setting to Sep 3, 2025
  const [events, setEvents] = useState([
    { id: 1, date: '2025-09-06', title: 'Coding Workshop', description: 'Hands-on workshops covering the latest technologies.', color: 'purple' },
    { id: 2, date: '2025-09-13', title: 'Hackathon', description: '24-hour coding competition.', color: 'green' },
    { id: 3, date: '2025-09-18', title: 'Tech Talk', description: 'Industry experts share insights.', color: 'orange' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [editingEvent, setEditingEvent] = useState(null);

  // --- Password State ---
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [actionToPerform, setActionToPerform] = useState(null);
  const HARDCODED_PASSWORD = 'hsd'; 

  // --- Calendar Logic ---
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const requestPassword = (action) => {
    setActionToPerform(() => action);
    setIsPasswordModalOpen(true);
    setPasswordError('');
    setPassword('');
  };

  const handlePasswordSubmit = () => {
    if (password === HARDCODED_PASSWORD) {
      setIsPasswordModalOpen(false);
      if (actionToPerform) {
        actionToPerform();
      }
      setActionToPerform(null);
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };


  const openAddModal = (date) => {
    const action = () => {
      setIsModalOpen(true);
      setSelectedDate(date);
      setEditingEvent(null);
      setEventTitle('');
      setEventDescription('');
    };
    requestPassword(action);
  };

  const openEditModal = (event) => {
    const action = () => {
      setIsModalOpen(true);
      setEditingEvent(event);
      setSelectedDate(new Date(event.date));
      setEventTitle(event.title);
      setEventDescription(event.description);
    };
     requestPassword(action);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
    setEventTitle('');
    setEventDescription('');
    setSelectedDate(null);
  };

  const handleSaveEvent = () => {
    if (!eventTitle) return;

    if (editingEvent) {
      // Update existing event
      setEvents(events.map(e => e.id === editingEvent.id ? { ...e, title: eventTitle, description: eventDescription, date: formatDate(selectedDate) } : e));
    } else {
      // Add new event
      const newEvent = {
        id: Date.now(),
        title: eventTitle,
        description: eventDescription,
        date: formatDate(selectedDate),
        color: ['purple', 'green', 'orange', 'blue', 'red'][Math.floor(Math.random() * 5)],
      };
      setEvents([...events, newEvent]);
    }
    closeModal();
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(e => e.id !== eventId));
    closeModal();
  };


  const { monthName, year, daysInMonth, firstDayOfMonth } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { monthName, year, daysInMonth, firstDayOfMonth };
  }, [currentDate]);

  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ key: `empty-${i}`, type: 'empty' });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, currentDate.getMonth(), day);
      const dateStr = formatDate(date);
      const dayEvents = events.filter(e => e.date === dateStr);
      days.push({ key: `day-${day}`, type: 'day', day, date, events: dayEvents });
    }
    return days;
  }, [firstDayOfMonth, daysInMonth, year, currentDate, events]);
  
  const colorClasses = {
    purple: 'bg-purple-100 text-purple-800 border-l-4 border-purple-500',
    green: 'bg-green-100 text-green-800 border-l-4 border-green-500',
    orange: 'bg-orange-100 text-orange-800 border-l-4 border-orange-500',
    blue: 'bg-blue-100 text-blue-800 border-l-4 border-blue-500',
    red: 'bg-red-100 text-red-800 border-l-4 border-red-500',
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
        .calendar-grid {
          grid-template-columns: repeat(7, minmax(0, 1fr));
        }
      `}</style>
      
      {/* Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-sm relative">
             <button onClick={() => setIsPasswordModalOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-yellow-100 rounded-full mb-4">
                <Lock className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Authentication Required</h3>
              <p className="text-gray-600 mb-4">Please enter the password to modify events.</p>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
               <button
                onClick={handlePasswordSubmit}
                className="mt-4 w-full bg-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Add Event'}</h3>
            <p className="text-gray-600 mb-4 font-semibold">{selectedDate && formatDate(selectedDate)}</p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Event Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Event Description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                {editingEvent && (
                  <button
                    onClick={() => handleDeleteEvent(editingEvent.id)}
                    className="flex items-center text-red-500 hover:text-red-700 font-semibold"
                  >
                    <Trash2 size={18} className="mr-2" /> Delete
                  </button>
                )}
              </div>
              <button
                onClick={handleSaveEvent}
                className="bg-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="bg-white font-sans text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Our Events Section */}
          <section className="text-center mb-20">
            {/* ... existing code ... */}
            <h2 className="text-3xl font-extrabold mb-4">Our Events</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join us for exciting workshops, hackathons, and networking events designed to enhance your coding skills. Manage and view our upcoming schedule below.
            </p>

            {/* --- Interactive Calendar Start --- */}
            <div className="mt-12 bg-white rounded-xl shadow-lg p-4 md:p-6 text-left">
              <div className="flex justify-between items-center mb-4">
                <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100">
                  <ChevronLeft size={24} className="text-gray-600" />
                </button>
                <h3 className="text-xl font-bold text-gray-700">{monthName} {year}</h3>
                <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100">
                  <ChevronRight size={24} className="text-gray-600" />
                </button>
              </div>

              <div className="grid calendar-grid gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center font-semibold text-gray-500 text-sm py-2">{day}</div>
                ))}

                {calendarDays.map(dayInfo => {
                  if (dayInfo.type === 'empty') {
                    return <div key={dayInfo.key} className="border rounded-md border-transparent"></div>;
                  }
                  
                  const { key, day, date, events } = dayInfo;
                  const isToday = formatDate(new Date()) === formatDate(date);

                  return (
                    <div key={key} className="relative border border-gray-200 rounded-md p-2 h-36 flex flex-col group bg-gray-50 hover:bg-white transition-colors duration-200">
                      <div className={`font-semibold ${isToday ? 'bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center' : 'text-gray-700'}`}>
                        {day}
                      </div>
                      <div className="flex-grow overflow-y-auto mt-1 space-y-1 text-xs">
                         {events.map(event => (
                           <div key={event.id} onClick={() => openEditModal(event)} className={`p-1 rounded cursor-pointer ${colorClasses[event.color] || colorClasses.blue}`}>
                             <p className="font-semibold truncate">{event.title}</p>
                           </div>
                         ))}
                      </div>
                       <button onClick={() => openAddModal(date)} className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 text-purple-500 hover:text-purple-700 transition-opacity">
                         <PlusCircle size={20} />
                       </button>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* --- Interactive Calendar End --- */}


            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Coding Workshops */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-left transform hover:-translate-y-2 transition-transform duration-300">
                {/* ... existing code ... */}
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
                {/* ... existing code ... */}
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
                {/* ... existing code ... */}
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
          <section className="text-center">
            {/* ... existing code ... */}
            <h2 className="text-3xl font-extrabold mb-4">Sponsorships</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
              Partner with us to support the next generation of developers and gain access to top talent
            </p>

            {/* Our Sponsors - Sliding Marquee */}
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

export default App;

