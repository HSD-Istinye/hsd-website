import { NextResponse } from 'next/server'
import { createClient as createServerClient } from '../../../../supabase/server'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Geçersiz JSON' }, { status: 400 })
    }

    const { name, surname, mail, specifics, eventId } = body
    if (!name || !surname || !mail || !eventId) {
      return NextResponse.json({ error: 'Eksik alan: name, surname, mail veya eventId' }, { status: 400 })
    }

    const supabase = await createServerClient()

    const row = {
      name: String(name),
      surname: String(surname),
      mail: String(mail),
      specifics: specifics ? specifics : null, 
      created_at: new Date().toISOString(),
      event_id: Number(eventId),
    }

    const { data, error } = await supabase.from('registrations').insert(row)

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json({ error: error.message || 'Veritabanı hatası' }, { status: 500 })
    }

    return NextResponse.json({ message: "Registration successful", data }, { status: 201 })
  } catch (err: any) {
    console.error("API route error:", err);
    return NextResponse.json({ error: err?.message || 'Bilinmeyen hata' }, { status: 500 })
  }
}
