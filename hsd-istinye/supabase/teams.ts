import { createClient } from './server'

export type TeamMember = {
    id: number
    name: string
    role: string | null
    title: string | null
    team: 'leaders' | 'project' | 'events' | 'social'
    github_url: string | null
    linkedin_url: string | null
    photo_url: string | null
}

export async function getTeamMembers(): Promise<TeamMember[]> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('sort_order')

    if (error) {
        console.error('Ekip üyeleri alınamadı:', error.message)
        return []
    }
    return data
}