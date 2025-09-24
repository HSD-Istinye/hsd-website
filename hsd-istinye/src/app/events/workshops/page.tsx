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

export default async function WorkshopsPage() {
  const allEvents = await getAllEventContent();

  const getContent = (title: string): Partial<EventContent> => {
    return allEvents.find(e => e.title === title) || { id: 0, title: title, description: "Loading description..." };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Üst bar */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">HS</div>
            <div className="text-white">
              <div className="text-xl font-semibold">HSD Istinye</div>
              <div className="text-sm opacity-90">Workshops</div>
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
            <span className="text-2xl">💻</span>
            Coding Workshops
          </h1>
          <p className="text-gray-600 mt-2">Hands-on learning experiences for developers of all levels</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: React Fundamentals */}
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 text-2xl">
                <span role="img" aria-label="react">⚛️</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{getContent("React Fundamentals").title}</h3>
                  <div className="text-sm text-gray-500">10 February 2025</div>
                </div>
                <div className="text-sm font-semibold text-green-600">67 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">{getContent("React Fundamentals").description}</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>Component lifecycle and hooks</li>
                  <li>State management with Context API</li>
                  <li>Building a complete todo application</li>
                </ul>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?eventId=${getContent("React Fundamentals").id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2: Python for Data Science */}
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-2xl">
                <span role="img" aria-label="python">🐍</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{getContent("Python for Data Science").title}</h3>
                    <div className="text-sm text-gray-500">22 February 2025</div>
                </div>
                <div className="text-sm font-semibold text-green-600">89 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">{getContent("Python for Data Science").description}</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>Data manipulation with pandas</li>
                  <li>Creating visualizations</li>
                  <li>Machine learning basics with scikit-learn</li>
                </ul>
              </div>
              <div className="absolute bottom-4 right-4">
                 <Link
                  href={`/events/register?eventId=${getContent("Python for Data Science").id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>

          {/* Card 3: Node.js & Express */}
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl">
                <span role="img" aria-label="nodejs">🟢</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{getContent("Node.js & Express").title}</h3>
                  <div className="text-sm text-gray-500">8 March 2025</div>
                </div>
                <div className="text-sm font-semibold text-purple-600">54 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">{getContent("Node.js & Express").description}</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>RESTful API development</li>
                  <li>Database integration with MongoDB</li>
                  <li>Authentication and middleware</li>
                </ul>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?eventId=${getContent("Node.js & Express").id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>

          {/* Card 4: Flutter Mobile Development */}
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 text-2xl">
                <span role="img" aria-label="mobile">📱</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{getContent("Flutter Mobile Development").title}</h3>
                  <div className="text-sm text-gray-500">6 April 2025</div>
                </div>
                <div className="text-sm font-semibold text-amber-600">73 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">{getContent("Flutter Mobile Development").description}</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>Dart programming fundamentals</li>
                  <li>Widget system and layouts</li>
                  <li>Building and deploying apps</li>
                </ul>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?eventId=${getContent("Flutter Mobile Development").id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>

          {/* Card 5: UI/UX Design Principles */}
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 text-2xl">
                <span role="img" aria-label="design">🎨</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{getContent("UI/UX Design Principles").title}</h3>
                  <div className="text-sm text-gray-500">5 May 2025</div>
                </div>
                <div className="text-sm font-semibold text-red-500">92 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">{getContent("UI/UX Design Principles").description}</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>Design thinking methodology</li>
                  <li>Prototyping with Figma</li>
                  <li>User research and testing</li>
                </ul>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?eventId=${getContent("UI/UX Design Principles").id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>

          {/* Card 6: AWS Cloud Fundamentals */}
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 text-2xl">
                <span role="img" aria-label="cloud">☁️</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{getContent("AWS Cloud Fundamentals").title}</h3>
                  <div className="text-sm text-gray-500">3 October 2025</div>
                </div>
                <div className="text-sm font-semibold text-sky-600">45 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">{getContent("AWS Cloud Fundamentals").description}</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>EC2 and S3 fundamentals</li>
                  <li>Lambda functions and serverless</li>
                  <li>Deployment strategies</li>
                </ul>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?eventId=${getContent("AWS Cloud Fundamentals").id}`}
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

