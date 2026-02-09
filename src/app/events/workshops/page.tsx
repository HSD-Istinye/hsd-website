import Link from "next/link";

export default function WorkshopsPage() {
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
          {/* Card 1
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 text-2xl">
                <span role="img" aria-label="react">⚛️</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">React Fundamentals</h3>
                  <div className="text-sm text-gray-500">10 February 2025</div>
                </div>
                <div className="text-sm font-semibold text-green-600">67 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Complete introduction to React.js including components, hooks, and state management.</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>Component lifecycle and hooks</li>
                  <li>State management with Context API</li>
                  <li>Building a complete todo application</li>
                </ul>
              </div>

              <!-- Register butonu -->
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?event=${encodeURIComponent(
                    "React Fundamentals"
                  )}&category=${encodeURIComponent("Coding Workshops")}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>
          */}

          {/* Card 2
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-2xl">
                <span role="img" aria-label="python">🐍</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Python for Data Science</h3>
                  <div className="text-sm text-gray-500">22 February 2025</div>
                </div>
                <div className="text-sm font-semibold text-green-600">89 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Data analysis and visualization using Python, pandas, and matplotlib.</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>Data manipulation with pandas</li>
                  <li>Creating visualizations</li>
                  <li>Machine learning basics with scikit-learn</li>
                </ul>
              </div>

              <!-- Register butonu -->
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?event=${encodeURIComponent(
                    "Python for Data Science"
                  )}&category=${encodeURIComponent("Coding Workshops")}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>
          */}

          {/* Card 3
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl">
                <span role="img" aria-label="nodejs">🟢</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Node.js & Express</h3>
                  <div className="text-sm text-gray-500">8 March 2025</div>
                </div>
                <div className="text-sm font-semibold text-purple-600">54 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Backend development with Node.js, Express, and MongoDB integration.</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>RESTful API development</li>
                  <li>Database integration with MongoDB</li>
                  <li>Authentication and middleware</li>
                </ul>
              </div>

              <!-- Register butonu -->
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?event=${encodeURIComponent(
                    "Node.js & Express"
                  )}&category=${encodeURIComponent("Coding Workshops")}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>
          */}

          {/* Card 4
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 text-2xl">
                <span role="img" aria-label="mobile">📱</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Flutter Mobile Development</h3>
                  <div className="text-sm text-gray-500">6 April 2025</div>
                </div>
                <div className="text-sm font-semibold text-amber-600">73 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Cross-platform mobile app development using Flutter and Dart.</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>Dart programming fundamentals</li>
                  <li>Widget system and layouts</li>
                  <li>Building and deploying apps</li>
                </ul>
              </div>

              <!-- Register butonu -->
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?event=${encodeURIComponent(
                    "Flutter Mobile Development"
                  )}&category=${encodeURIComponent("Coding Workshops")}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>
          */}

          {/* Card 5
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 text-2xl">
                <span role="img" aria-label="design">🎨</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">UI/UX Design Principles</h3>
                  <div className="text-sm text-gray-500">5 May 2025</div>
                </div>
                <div className="text-sm font-semibold text-red-500">92 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Design thinking and user experience principles for developers.</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>Design thinking methodology</li>
                  <li>Prototyping with Figma</li>
                  <li>User research and testing</li>
                </ul>
              </div>

              <!-- Register butonu -->
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?event=${encodeURIComponent(
                    "UI/UX Design Principles"
                  )}&category=${encodeURIComponent("Coding Workshops")}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>
          */}

          {/* Card 6
          <article className="relative pb-12 bg-white rounded-xl shadow p-6 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 text-2xl">
                <span role="img" aria-label="cloud">☁️</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AWS Cloud Fundamentals</h3>
                  <div className="text-sm text-gray-500">3 October 2025</div>
                </div>
                <div className="text-sm font-semibold text-sky-600">45 Participants</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Introduction to cloud computing and AWS services for developers.</p>
              <div className="mt-4">
                <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                  <li>EC2 and S3 fundamentals</li>
                  <li>Lambda functions and serverless</li>
                  <li>Deployment strategies</li>
                </ul>
              </div>

              <!-- Register butonu -->
              <div className="absolute bottom-4 right-4">
                <Link
                  href={`/events/register?event=${encodeURIComponent(
                    "AWS Cloud Fundamentals"
                  )}&category=${encodeURIComponent("Coding Workshops")}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
                >
                  Register
                </Link>
              </div>
            </div>
          </article>
          */}
        </div>
      </main>
    </div>
  );
}