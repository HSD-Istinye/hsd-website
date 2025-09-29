"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "../../../../supabase/client";

function RegisterComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  const [eventName, setEventName] = useState("Event");
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!eventId) {
      setError("Event ID is missing.");
      setIsLoading(false);
      return;
    }

    const fetchEventDetails = async () => {
      setIsLoading(true);
      const supabase = createClient();
      const { data, error } = await supabase
        .from("events")
        .select("title, questions")
        .eq("id", eventId)
        .single();

      if (error || !data) {
        console.error("Error fetching event details:", error);
        setError("Could not load event details.");
      } else {
        const rawQuestions = data.questions || "";
        

        const fetchedQuestions = rawQuestions
          .split('\n') 
          .flatMap(line => line.split(/\s*(?=\d+\.\s)/)) 
          .filter(q => q.trim() !== '');
        
        setEventName(data.title);
        setQuestions(fetchedQuestions);
        setAnswers(new Array(fetchedQuestions.length).fill(""));
      }
      setIsLoading(false);
    };

    fetchEventDetails();
  }, [eventId]);
  
  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !email.trim()) {
        setError("Please fill in your name, surname, and email.");
        return;
    }
    setError("");
    
    const formattedSpecifics = questions.map((q, index) => 
        `Question: ${q}\nAnswer: ${answers[index] || "Not answered."}`
    ).join('\n\n');

    const payload = {
      name,
      surname,
      mail: email,
      specifics: formattedSpecifics,
      eventId: Number(eventId),
    };

    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody?.error || "Registration failed");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err?.message || "Submission failed");
    }
  }

  if (submitted) {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-900">Thank You!</h2>
                <p className="mt-3 text-gray-600">Your registration for <strong>{eventName}</strong> has been received.</p>
                <div className="mt-6">
                    <button onClick={() => router.back()} className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90">
                    ← Go Back
                    </button>
                </div>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 px-6 py-12 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-10">
            {isLoading ? (
                <p>Loading event details...</p>
            ) : error && !questions.length ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                <h1 className="text-3xl font-extrabold text-gray-900">📝 Register: {eventName}</h1>
                <p className="text-gray-600 mt-2">Please fill out the information below.</p>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="block">
                            <div className="text-sm text-gray-600 mb-1">Name</div>
                            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Your Name" />
                        </label>
                        <label className="block">
                            <div className="text-sm text-gray-600 mb-1">Surname</div>
                            <input value={surname} onChange={(e) => setSurname(e.target.value)} className="w-full border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Your Surname" />
                        </label>
                    </div>
                    <label className="block">
                        <div className="text-sm text-gray-600 mb-1">Email</div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="email@example.com" type="email" />
                    </label>
                    
                    {questions.length > 0 && (
                        <div className="space-y-5 pt-2">
                            <h3 className="font-semibold text-gray-700">Event Questions:</h3>
                            {questions.map((q, index) => (
                                <label key={index} className="block">
                                    <div className="text-sm text-gray-700 mb-2">
                                        <span className="font-medium">Q:</span> {q}
                                    </div>
                                    <textarea 
                                        value={answers[index]} 
                                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                                        className="w-full border-gray-200 rounded-lg px-4 py-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" 
                                        placeholder="Your answer..." 
                                    />
                                </label>
                            ))}
                        </div>
                    )}

                    {error && <div className="text-sm text-red-500">{error}</div>}

                    <div className="flex items-center justify-between gap-4 pt-2">
                        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90">Submit Registration</button>
                        <button type="button" onClick={() => router.back()} className="text-sm px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50">Cancel</button>
                    </div>
                </form>
                </>
            )}
        </div>
      </main>
    </div>
  );
}

export default function RegisterPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegisterComponent />
        </Suspense>
    )
}
