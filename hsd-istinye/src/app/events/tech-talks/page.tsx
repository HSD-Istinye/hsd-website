import Link from "next/link";
import { createClient } from "../../../../supabase/server";

type EventContent = {
  id: number;
  title: string;
  description: string;
};

async function getAllEventContent() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("events")
    .select("id, title, description");

  if (error) {
    console.error("Error fetching event content:", error);
    return [];
  }
  return data;
}


export default async function TechTalksPage() {
    const allEvents = await getAllEventContent();

    const getContent = (title: string): Partial<EventContent> => {
        return allEvents.find(e => e.title === title) || { id: 0, title: title, description: "Loading..." };
    };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-4 shadow">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">HS</div>
            <div className="text-white">
              <div className="text-xl font-semibold">HSD Istinye</div>
              <div className="text-sm opacity-90">Tech Community Events</div>
            </div>
          </div>
          <div className="ml-4">
            <Link
              href="/"
              className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
            >
              ← Back to Main
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">🎤Tech Talks</h1>
          <p className="text-gray-600 mt-2">Short talks by industry experts on cutting-edge topics.</p>
        </header>

        <div className="space-y-6">
          {/* Card 1: The Future of AI */}
          <div className="relative pb-12 bg-white rounded-xl shadow p-6 flex items-center justify-between gap-6">
            <div className="absolute right-4 top-4"><div className="text-xs px-3 py-1 rounded-full text-white bg-gradient-to-br from-purple-500 to-indigo-600 shadow-sm ring-1 ring-white/20">234 Attendees</div></div>
            <div className="flex items-start gap-6">
              <div className="w-28 h-28 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-sm bg-gradient-to-br from-purple-500 to-indigo-600">
                <div className="text-3xl mb-2" role="img" aria-label="robot">🤖</div>
                <div>AI & Future</div>
                <div className="text-xs opacity-90 mt-1">15 March 2025</div>
              </div>
              <div className="max-w-[56rem]">
                <h3 className="text-lg font-semibold text-gray-900">{getContent("The Future of AI in Software Development").title}</h3>
                <p className="text-sm text-gray-600 mt-2">{getContent("The Future of AI in Software Development").description}</p>
                <div className="mt-3 text-sm text-gray-500">Dr. Sarah Chen • Senior AI Researcher at Google</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link
                 href={`/events/register?eventId=${getContent("The Future of AI in Software Development").id}`}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
              >
                Register
              </Link>
            </div>
          </div>
          
          {/* Card 2: Green Computing */}
          <div className="relative pb-12 bg-white rounded-xl shadow p-6 flex items-center justify-between gap-6">
            <div className="absolute right-4 top-4"><div className="text-xs px-3 py-1 rounded-full text-white bg-gradient-to-br from-green-400 to-emerald-600 shadow-sm ring-1 ring-white/20">187 Attendees</div></div>
            <div className="flex items-start gap-6">
              <div className="w-28 h-28 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-sm bg-gradient-to-br from-green-400 to-emerald-600">
                <div className="text-3xl mb-2" role="img" aria-label="leaf">🍃</div>
                <div>Sustainability</div>
                <div className="text-xs opacity-90 mt-1">11 May 2025</div>
              </div>
              <div className="max-w-[56rem]">
                <h3 className="text-lg font-semibold text-gray-900">{getContent("Green Computing: Building Sustainable Software").title}</h3>
                <p className="text-sm text-gray-600 mt-2">{getContent("Green Computing: Building Sustainable Software").description}</p>
                <div className="mt-3 text-sm text-gray-500">Mark Rodriguez • CTO at EcoTech Solutions</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link
                 href={`/events/register?eventId=${getContent("Green Computing: Building Sustainable Software").id}`}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Card 3: Modern Web Security */}
          <div className="relative pb-12 bg-white rounded-xl shadow p-6 flex items-center justify-between gap-6">
            <div className="absolute right-4 top-4"><div className="text-xs px-3 py-1 rounded-full text-white bg-gradient-to-br from-pink-500 to-rose-500 shadow-sm ring-1 ring-white/20">156 Attendees</div></div>
            <div className="flex items-start gap-6">
              <div className="w-28 h-28 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-sm bg-gradient-to-br from-pink-500 to-rose-500">
                <div className="text-3xl mb-2" role="img" aria-label="cybersecurity">🛡️</div>
                <div>Cybersecurity</div>
                <div className="text-xs opacity-90 mt-1">10 June 2025</div>
              </div>
              <div className="max-w-[56rem]">
                <h3 className="text-lg font-semibold text-gray-900">{getContent("Modern Web Security: Protecting User Data").title}</h3>
                <p className="text-sm text-gray-600 mt-2">{getContent("Modern Web Security: Protecting User Data").description}</p>
                <div className="mt-3 text-sm text-gray-500">Alex Thompson • Security Engineer at Microsoft</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link
                 href={`/events/register?eventId=${getContent("Modern Web Security: Protecting User Data").id}`}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Card 4: Building Tech Startups */}
          <div className="relative pb-12 bg-white rounded-xl shadow p-6 flex items-center justify-between gap-6">
            <div className="absolute right-4 top-4"><div className="text-xs px-3 py-1 rounded-full text-white bg-gradient-to-br from-orange-400 to-red-500 shadow-sm ring-1 ring-white/20">206 Attendees</div></div>
            <div className="flex items-start gap-6">
              <div className="w-28 h-28 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-sm bg-gradient-to-br from-orange-400 to-red-500">
                <div className="text-3xl mb-2" role="img" aria-label="startups">🚀</div>
                <div>Startups</div>
                <div className="text-xs opacity-90 mt-1">26 July 2025</div>
              </div>
              <div className="max-w-[56rem]">
                <h3 className="text-lg font-semibold text-gray-900">{getContent("From Idea to IPO: Building Tech Startups").title}</h3>
                <p className="text-sm text-gray-600 mt-2">{getContent("From Idea to IPO: Building Tech Startups").description}</p>
                <div className="mt-3 text-sm text-gray-500">Lisa Park • Founder & CEO of TechVentures</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link
                 href={`/events/register?eventId=${getContent("From Idea to IPO: Building Tech Startups").id}`}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Card 5: High-Performance Web Applications */}
          <div className="relative pb-12 bg-white rounded-xl shadow p-6 flex items-center justify-between gap-6">
            <div className="absolute right-4 top-4"><div className="text-xs px-3 py-1 rounded-full text-white bg-gradient-to-br from-sky-500 to-blue-600 shadow-sm ring-1 ring-white/20">167 Attendees</div></div>
            <div className="flex items-start gap-6">
              <div className="w-28 h-28 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-sm bg-gradient-to-br from-sky-500 to-blue-600">
                <div className="text-3xl mb-2" role="img" aria-label="performance">⚡</div>
                <div>Performance</div>
                <div className="text-xs opacity-90 mt-1">26 December 2025</div>
              </div>
              <div className="max-w-[56rem]">
                <h3 className="text-lg font-semibold text-gray-900">{getContent("High-Performance Web Applications").title}</h3>
                <p className="text-sm text-gray-600 mt-2">{getContent("High-Performance Web Applications").description}</p>
                <div className="mt-3 text-sm text-gray-500">David Kim • Principal Engineer at Netflix</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Link
                 href={`/events/register?eventId=${getContent("High-Performance Web Applications").id}`}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

