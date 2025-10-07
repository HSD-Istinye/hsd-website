// app/api/sponsorship/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ ok: false, error: 'INVALID_JSON' }, { status: 400 })
    }

    const { ad, soyad, email, telefon, aciklama } = body
    if (!ad || !soyad || !email || !telefon) {
      return NextResponse.json({ ok: false, error: 'VALIDATION_ERROR' }, { status: 400 })
    }

    // 🔑 Environment değişkenlerini kontrol et
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    console.log('ENV kontrol:', { 
      hasUrl: !!url, 
      hasServiceKey: !!serviceKey,
      urlLength: url?.length,
      keyLength: serviceKey?.length
    })

    if (!url || !serviceKey) {
      console.error('ENV eksik:', { hasUrl: !!url, hasServiceKey: !!serviceKey })
      return NextResponse.json({ ok: false, error: 'ENV_MISSING' }, { status: 500 })
    }

    const supabase = createClient(url, serviceKey, { 
      auth: { persistSession: false } 
    })

    const { data, error } = await supabase.from('sponsorships').insert({
      ad,
      soyad,
      email,
      telefon,
      aciklama: aciklama || null,
    }).select()

    if (error) {
      console.error('❌ Supabase insert hatası:', error)
      return NextResponse.json({ ok: false, error: 'DB_ERROR', detail: error.message }, { status: 500 })
    }

    console.log('✅ Başarıyla eklendi:', data)
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err: any) {
    console.error('❌ Route hata:', err)
    return NextResponse.json({ ok: false, error: 'INTERNAL', detail: err?.message }, { status: 500 })
  }
}