"use client"
import React from 'react';

// Etkinlik fotoğrafları: public/images altına eklenen her dosyayı buraya yaz
const IMAGES = [
  '/images/WhatsApp Image 2026-10-17 at 13.10.46.jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.48.jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.50.jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.52.jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.54 (1).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.54 (2).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.54 (3).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.54 (4).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.54 (5).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.54 (6).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.54.jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.55 (1).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.55 (2).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.55 (3).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.55 (4).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.55 (5).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.55 (6).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.55 (7).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.55.jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.56 (1).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.56 (2).jpeg',
  '/images/WhatsApp Image 2026-10-17 at 13.10.56.jpeg',
  '/images/event1.jfif',
];

const COLUMNS = 6;
const TILES_PER_COLUMN = 6;
// Her sütun farklı hızda ve sırayla zıt yönde kayar
const DURATIONS = [55, 42, 60, 48, 52, 45];

const EventMosaic = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-purple-950" aria-hidden="true">
      <div className="absolute -inset-[15%] grid grid-cols-3 md:grid-cols-6 gap-3 -rotate-6">
        {Array.from({ length: COLUMNS }, (_, col) => {
          const tiles = Array.from(
            { length: TILES_PER_COLUMN },
            (_, i) => IMAGES[(col * TILES_PER_COLUMN + i) % IMAGES.length]
          );
          return (
            <div key={col} className={`overflow-hidden ${col >= 3 ? 'hidden md:block' : ''}`}>
              <div
                className={`mosaic-col ${col % 2 ? 'mosaic-col-reverse' : ''}`}
                style={{ animationDuration: `${DURATIONS[col]}s` }}
              >
                {/* Liste iki kez basılıyor, -%50 kayınca dikişsiz döngü oluyor */}
                {[...tiles, ...tiles].map((src, i) => (
                  <div key={i} className="pb-3">
                    <img
                      src={encodeURI(src)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventMosaic;
