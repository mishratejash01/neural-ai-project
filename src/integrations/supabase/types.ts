export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      team_members: {
        Row: {
          id: string
          name: string
          role: string
          category: 'Founders' | 'Engineering' | 'Mentors'
          university: string | null
          image_url: string | null
          linkedin_url: string | null
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          category: 'Founders' | 'Engineering' | 'Mentors'
          university?: string | null
          image_url?: string | null
          linkedin_url?: string | null
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          category?: 'Founders' | 'Engineering' | 'Mentors'
          university?: string | null
          image_url?: string | null
          linkedin_url?: string | null
          display_order?: number
          created_at?: string
        }
      }
      clients: {
        Row: {
          id: string
          name: string
          logo_url: string
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          logo_url: string
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          logo_url?: string
          display_order?: number
          created_at?: string
        }
      }
      case_studies: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          category: string | null
          author: string | null
          date_published: string | null
          read_time: string | null
          image_url: string | null
          featured: boolean | null
          content: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          category?: string | null
          author?: string | null
          date_published?: string | null
          read_time?: string | null
          image_url?: string | null
          featured?: boolean | null
          content?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          category?: string | null
          author?: string | null
          date_published?: string | null
          read_time?: string | null
          image_url?: string | null
          featured?: boolean | null
          content?: string | null
          created_at?: string
        }
      }
      careers: {
        Row: {
          id: string
          title: string
          department: string | null
          location: string | null
          type: string | null
          salary_range: string | null
          experience_required: string | null
          description: string | null
          requirements: string[] | null
          responsibilities: string[] | null
          is_active: boolean | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          department?: string | null
          location?: string | null
          type?: string | null
          salary_range?: string | null
          experience_required?: string | null
          description?: string | null
          requirements?: string[] | null
          responsibilities?: string[] | null
          is_active?: boolean | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          department?: string | null
          location?: string | null
          type?: string | null
          salary_range?: string | null
          experience_required?: string | null
          description?: string | null
          requirements?: string[] | null
          responsibilities?: string[] | null
          is_active?: boolean | null
          created_at?: string
        }
      }
      job_applications: {
        Row: {
          id: string
          career_id: string | null
          first_name: string
          last_name: string
          email: string
          phone: string | null
          resume_link: string
          cover_letter: string | null
          position_interest: string | null
          experience_level: string | null
          created_at: string
        }
        Insert: {
          id?: string
          career_id?: string | null
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          resume_link: string
          cover_letter?: string | null
          position_interest?: string | null
          experience_level?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          career_id?: string | null
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          resume_link?: string
          cover_letter?: string | null
          position_interest?: string | null
          experience_level?: string | null
          created_at?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          company: string | null
          phone: string | null
          subject: string | null
          message: string | null
          budget_range: string | null
          status: string | null
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          company?: string | null
          phone?: string | null
          subject?: string | null
          message?: string | null
          budget_range?: string | null
          status?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          company?: string | null
          phone?: string | null
          subject?: string | null
          message?: string | null
          budget_range?: string | null
          status?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
