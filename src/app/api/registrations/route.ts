import { NextResponse } from 'next/server'
import { createClient as createServerClient } from '../../../../supabase/server'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Geçersiz JSON' }, { status: 400 })
    }

    const { name, surname, mail, specifics } = body
    if (!name || !surname || !mail) {
      return NextResponse.json({ error: 'Eksik alan: name, surname veya mail' }, { status: 400 })
    }

    const supabase = await createServerClient()

    // Prepare row for insertion. Keep original field names to match payload.
    const row = {
      name: String(name),
      surname: String(surname),
      mail: String(mail),
      specifics: specifics ? JSON.stringify(specifics) : null,
      created_at: new Date().toISOString(),
    }

    const { data, error } = await supabase.from('registrations').insert(row)

    if (error) {
      return NextResponse.json({ error: error.message || 'Veritabanı hatası' }, { status: 500 })
    }

    return NextResponse.json({ data }, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Bilinmeyen hata' }, { status: 500 })
  }
}
