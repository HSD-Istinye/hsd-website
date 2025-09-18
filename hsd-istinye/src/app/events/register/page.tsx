"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../../supabase/client"; 


export default function RegisterPage({
  searchParams,
}: {
  searchParams?: { event?: string; category?: string };
}) {
  const router = useRouter();

  const unwrappedSearchParams = (React as any).use
    ? (React as any).use(searchParams)
    : searchParams;

  const eventName = (unwrappedSearchParams && unwrappedSearchParams.event) || "Workshop";
  const category = (unwrappedSearchParams && unwrappedSearchParams.category) || "Registration";

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [specifics, setSpecifics] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function validate() {
    if (!name.trim() || !surname.trim() || !email.trim()) {
      setError("Lütfen ad, soyad ve e-posta bilgilerini doldurun.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Lütfen geçerli bir e-posta adresi giriniz.");
      return false;
    }
    setError("");
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setError("");
    const payload = {
      name,
      surname,
      mail: email,
      specifics,
    };

    try {
      // Use the API route which should use the server-side Supabase client.
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody?.error || "Kayıt yapılamadı");
      }

      setSubmitted(true);
      setTimeout(() => router.push("/events/workshops"), 2000);
    } catch (err: any) {
      setError(err?.message || "Gönderim başarısız");
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* ...existing header... */}
        <main className="flex-1 px-6 py-20">
          <div className="max-w-4xl mx-auto h-full">
            <div className="bg-white rounded-xl shadow p-10 text-center h-full">
              <div className="text-lg font-bold text-gray-900 mb-2">{category}</div>
              <h2 className="text-2xl font-semibold text-gray-900">Teşekkürler!</h2>
              <p className="mt-3 text-gray-600">Etkinliğe kaydınız alınmıştır: <strong>{eventName}</strong>.</p>
              <p className="mt-4 text-sm text-gray-500">Atölyelere yönlendiriliyorsunuz...</p>
              <div className="mt-6">
                <button onClick={() => router.push("/events/workshops")} className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Atölyelere Dön
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ...existing header... */}
      <main className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto h-full">
          <div className="bg-white rounded-xl shadow p-10 h-full">
            <div className="text-xl font-bold text-gray-900 mb-2">{category}</div>

            <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              <span className="text-3xl">📝</span>
              Register: {eventName}
            </h1>
            <p className="text-gray-600 mt-2">Lütfen aşağıdaki bilgileri eksiksiz doldurun.</p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {/* ...existing form fields... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <div className="text-sm text-gray-600 mb-1">Ad</div>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Adınız" />
                </label>
                <label className="block">
                  <div className="text-sm text-gray-600 mb-1">Soyad</div>
                  <input value={surname} onChange={(e) => setSurname(e.target.value)} className="w-full border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Soyadınız" />
                </label>
              </div>

              <label className="block">
                <div className="text-sm text-gray-600 mb-1">E-posta</div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="email@ornek.com" type="email" />
              </label>

              <label className="block">
                <div className="text-sm text-gray-600 mb-1">Notlar / Ek Bilgi</div>
                <textarea value={specifics} onChange={(e) => setSpecifics(e.target.value)} className="w-full border-gray-200 rounded-lg px-4 py-3 h-36 overflow-y-auto resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Herhangi bir özel gereksinim veya not..." aria-label="Notes" />
              </label>

              {error && <div className="text-sm text-red-500">{error}</div>}

              <div className="flex items-center justify-between gap-4">
                <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90">Kaydı Gönder</button>
                <button type="button" onClick={() => router.back()} className="text-sm px-4 py-2 rounded-full border border-gray-200 text-gray-700">İptal</button>
              </div>

              <div className="text-xs text-gray-400 mt-2">Etkinlik: {eventName}</div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
