"use client";
import React from "react";

export default function Section4() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent (demo)");
  };

  return (
    <>
      {/* SECTION - Ana iletişim alanı: arka plan ve genel padding */}
      <section className="bg-[#0b1220] text-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADER - Başlık ve küçük açıklama */}
          <div className="text-center mb-10">
            {/* Bölüm başlığı */}
            <h2 className="text-4xl font-semibold text-white">Contact Us</h2>
            {/* Görsel ayraç / accent bar */}
            <div className="w-20 h-1 bg-purple-500 mx-auto mt-3 rounded"></div>
            {/* Kısa açıklama */}
            <p className="mt-4 text-gray-300">Ready to join our community or partner with us? Get in touch!</p>
          </div>

          {/* GRID - Sol: iletişim bilgileri, Sağ: form kartı */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* SOL SÜTUN - İletişim bilgileri */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>

                {/* İLETİŞİM LİSTESİ
                    Email ve Location gösteriliyor.*/}
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-purple-600 p-3 rounded-md flex items-center justify-center">
                      {/* Mail icon */}
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 8.5l9 6 9-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white">hsd@istinye.edu.tr</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-purple-600 p-3 rounded-md flex items-center justify-center">
                      {/* Location icon */}
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 6-9 12-9 12S3 16 3 10A9 9 0 0 1 21 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="text-white">Istinye University, Istanbul</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* SOSYAL - Takip butonları
                  - X, Instagram, LinkedIn linkleri var.
                  - Her buton new tab açıyor (target + rel) ve onClick ile window.open güvenliği sağlanıyor. */}
              <div>
                <h4 className="text-white font-medium mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {/* X button (placeholder link).*/}
                  <a className="bg-[#6b21a8] p-3 rounded-md inline-flex items-center justify-center" aria-label="X" href="#" title="X">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23 3a1 1 0 0 0-1.3-.1L13 9.4 8.4 5 3.7 9.7A1 1 0 0 0 5 12.1l4.7-4.7L13 13l8.7-8.7A1 1 0 0 0 23 3z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    className="bg-[#6b21a8] p-3 rounded-md inline-flex items-center justify-center cursor-pointer"
                    aria-label="Instagram"
                    href="https://www.instagram.com/hsdistinye/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.instagram.com/hsdistinye/", "_blank", "noopener,noreferrer");
                    }}
                  >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth="1.5" stroke="currentColor" fill="currentColor"></rect>
                      <circle cx="12" cy="12" r="3" fill="#0b1220"></circle>
                      <circle cx="17.5" cy="6.5" r="0.8" fill="#0b1220"></circle>
                    </svg>
                  </a>

                  {/* LinkedIn  */}
                  <a
                    className="bg-[#6b21a8] p-3 rounded-md inline-flex items-center justify-center cursor-pointer"
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/company/huawei-student-developers-hsd-istinye-university/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.linkedin.com/company/huawei-student-developers-hsd-istinye-university/",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.98h4.6V24H.2zM8.98 8.98h4.4v2.07h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.01V24h-4.6v-7.2c0-1.72-.03-3.92-2.38-3.92-2.38 0-2.75 1.86-2.75 3.78V24h-4.6z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* SAĞ SÜTUN - Form kartı*/}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-gray-800">
                <h3 className="text-lg font-semibold mb-4">Send us a Message</h3>

                {/* BİLGİ KUTUSU -*/}
                <div className="bg-[#e6f2ff] border border-[#cfe6ff] rounded-md p-3 text-[#1b6fbf] mb-6 flex items-start gap-3">
                  <div className="min-w-[32px] min-h-[32px] flex items-center justify-center bg-white rounded-full">
                    <svg className="w-5 h-5 text-[#1b6fbf]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8v5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="16" r="0.6" fill="#1b6fbf"></circle>
                    </svg>
                  </div>
                  <div>
                    <strong className="block">Demo Contact Form</strong>
                    <span className="text-sm block">This is a sample form for demonstration purposes.</span>
                  </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="sr-only">Name</label>
                    <input required name="name" placeholder="Your name" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  </div>

                  <div>
                    <label className="sr-only">Email</label>
                    <input required type="email" name="email" placeholder="your.email@example.com" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  </div>

                  <div>
                    <label className="sr-only">Subject</label>
                    <select name="subject" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Events</option>
                    </select>
                  </div>

                  <div>
                    <label className="sr-only">Message</label>
                    <textarea name="message" placeholder="Tell us about your inquiry..." rows={5} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
                  </div>

                  <div>
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium py-2 rounded-md hover:from-purple-700 transition">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH FOOTER */}
      <footer className="w-full bg-[#07080a] text-gray-100 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-semibold text-lg md:text-xl">Huawei Student Developers - Istinye University</div>
          <div className="text-sm md:text-base text-gray-300 mt-2">
            © 2024 HSD Istinye. Empowering the next generation of developers.
          </div>
        </div>
      </footer>
    </>
  );
}
