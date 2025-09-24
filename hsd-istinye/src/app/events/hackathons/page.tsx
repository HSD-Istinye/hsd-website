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

export default async function HackathonsPage() {
    const allEvents = await getAllEventContent();

    const getContent = (title: string): Partial<EventContent> => {
        return allEvents.find(e => e.title === title) || { id: 0, title: title, description: "Loading..." };
    };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">HS</div>
            <div className="text-white">
              <div className="text-xl font-semibold">HSD Istinye</div>
              <div className="text-sm opacity-90">Tech Community Events</div>
            </div>
          </div>
          <Link href="/" className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90">
            ← Back to Main
          </Link>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-3">
            <span className="text-2xl">🏆</span>
            Hackathons
          </h1>
          <p className="text-gray-600 mt-2">Competitive coding events that push creativity and innovation</p>
        </header>

        <div className="space-y-6">
          {/* Card 1: AI Innovation Hackathon */}
          <article className="relative pb-12 flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-56 flex items-center justify-center p-6 bg-gradient-to-br from-pink-500 to-purple-500 text-white">
              <div className="text-center">
                <div className="text-3xl mb-2" role="img" aria-label="rocket">🚀</div>
                <div className="font-semibold text-lg">AI Innovation Hackathon</div>
                <div className="text-sm opacity-90 mt-1">12 March 2025</div>
              </div>
            </div>
            <div className="flex-1 p-6 md:py-6 md:px-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{getContent("AI Innovation Hackathon").title}</h2>
                  <p className="text-gray-600 mt-2 max-w-2xl text-sm">{getContent("AI Innovation Hackathon").description}</p>
                </div>
                <div className="ml-4"><span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">Completed</span></div>
              </div>
              <div className="mt-6"><div className="text-left"><div className="text-xl font-bold text-purple-600">127</div><div className="text-xs text-gray-500">Participants</div></div></div>
              <div className="mt-4 text-sm text-gray-500">Winner: <span className="font-medium text-gray-700">EcoAI</span> — an environmental monitoring system.</div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?eventId=${getContent("AI Innovation Hackathon").id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>
          
          {/* Card 2: Web3 & Blockchain Hackathon */}
          <article className="relative pb-12 flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-56 flex items-center justify-center p-6 bg-gradient-to-br from-blue-500 to-indigo-400 text-white">
              <div className="text-center">
                <div className="text-3xl mb-2" role="img" aria-label="network">🌐</div>
                <div className="font-semibold text-lg">Web3 Hackathon</div>
                <div className="text-sm opacity-90 mt-1">5 January 2025</div>
              </div>
            </div>
            <div className="flex-1 p-6 md:py-6 md:px-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{getContent("Web3 & Blockchain Hackathon").title}</h2>
                  <p className="text-gray-600 mt-2 max-w-2xl text-sm">{getContent("Web3 & Blockchain Hackathon").description}</p>
                </div>
                <div className="ml-4"><span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">Completed</span></div>
              </div>
              <div className="mt-6"><div className="text-left"><div className="text-xl font-bold text-blue-600">89</div><div className="text-xs text-gray-500">Participants</div></div></div>
              <div className="mt-4 text-sm text-gray-500">Winner: <span className="font-medium text-gray-700">CommunityDAO</span> — a decentralized community management platform.</div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?eventId=${getContent("Web3 & Blockchain Hackathon").id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>

          {/* Card 3: Mobile Innovation Challenge */}
          <article className="relative pb-12 flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-56 flex items-center justify-center p-6 bg-gradient-to-br from-green-400 to-teal-400 text-white">
              <div className="text-center">
                <div className="text-3xl mb-2" role="img" aria-label="mobile-phone">📱</div>
                <div className="font-semibold text-lg">Mobile App Hackathon</div>
                <div className="text-sm opacity-90 mt-1">3 July 2025</div>
              </div>
            </div>
            <div className="flex-1 p-6 md:py-6 md:px-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{getContent("Mobile Innovation Challenge").title}</h2>
                  <p className="text-gray-600 mt-2 max-w-2xl text-sm">{getContent("Mobile Innovation Challenge").description}</p>
                </div>
                <div className="ml-4"><span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">Completed</span></div>
              </div>
              <div className="mt-6"><div className="text-left"><div className="text-xl font-bold text-green-600">156</div><div className="text-xs text-gray-500">Participants</div></div></div>
              <div className="mt-4 text-sm text-gray-500">Winner: <span className="font-medium text-gray-700">StudyBuddy</span> — a collaborative learning platform for students.</div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?eventId=${getContent("Mobile Innovation Challenge").id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

