export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_id: string | null
          category: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          id: string
          published: boolean | null
          published_at: string | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string | null
          views: number | null
        }
        Insert: {
          author_id?: string | null
          category?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published?: boolean | null
          published_at?: string | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
          views?: number | null
        }
        Update: {
          author_id?: string | null
          category?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published?: boolean | null
          published_at?: string | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          branch: string | null
          created_at: string | null
          email: string
          id: string
          inquiry_type: string | null
          message: string
          name: string
          phone: string | null
          preferred_contact: string | null
          responded_at: string | null
          responded_by: string | null
          response: string | null
          status: string | null
          subject: string
          urgency: string | null
        }
        Insert: {
          branch?: string | null
          created_at?: string | null
          email: string
          id?: string
          inquiry_type?: string | null
          message: string
          name: string
          phone?: string | null
          preferred_contact?: string | null
          responded_at?: string | null
          responded_by?: string | null
          response?: string | null
          status?: string | null
          subject: string
          urgency?: string | null
        }
        Update: {
          branch?: string | null
          created_at?: string | null
          email?: string
          id?: string
          inquiry_type?: string | null
          message?: string
          name?: string
          phone?: string | null
          preferred_contact?: string | null
          responded_at?: string | null
          responded_by?: string | null
          response?: string | null
          status?: string | null
          subject?: string
          urgency?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_messages_responded_by_fkey"
            columns: ["responded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          branch: string
          course_type: Database["public"]["Enums"]["course_type"]
          created_at: string | null
          description: string | null
          duration_weeks: number
          id: string
          is_active: boolean | null
          name: string
          practical_hours: number
          price: number
          theory_hours: number
          updated_at: string | null
        }
        Insert: {
          branch: string
          course_type: Database["public"]["Enums"]["course_type"]
          created_at?: string | null
          description?: string | null
          duration_weeks?: number
          id?: string
          is_active?: boolean | null
          name: string
          practical_hours?: number
          price: number
          theory_hours?: number
          updated_at?: string | null
        }
        Update: {
          branch?: string
          course_type?: Database["public"]["Enums"]["course_type"]
          created_at?: string | null
          description?: string | null
          duration_weeks?: number
          id?: string
          is_active?: boolean | null
          name?: string
          practical_hours?: number
          price?: number
          theory_hours?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          course_id: string | null
          created_at: string | null
          end_date: string | null
          id: string
          instructor_id: string | null
          notes: string | null
          progress: number | null
          start_date: string | null
          status: Database["public"]["Enums"]["enrollment_status"] | null
          student_id: string | null
          updated_at: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          instructor_id?: string | null
          notes?: string | null
          progress?: number | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["enrollment_status"] | null
          student_id?: string | null
          updated_at?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          instructor_id?: string | null
          notes?: string | null
          progress?: number | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["enrollment_status"] | null
          student_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_instructor_id_fkey"
            columns: ["instructor_id"]
            isOneToOne: false
            referencedRelation: "instructors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      instructors: {
        Row: {
          bio: string | null
          certifications: string[] | null
          created_at: string | null
          experience_years: number | null
          id: string
          is_available: boolean | null
          rating: number | null
          specialization: string[] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          bio?: string | null
          certifications?: string[] | null
          created_at?: string | null
          experience_years?: number | null
          id?: string
          is_available?: boolean | null
          rating?: number | null
          specialization?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          bio?: string | null
          certifications?: string[] | null
          created_at?: string | null
          experience_years?: number | null
          id?: string
          is_available?: boolean | null
          rating?: number | null
          specialization?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "instructors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          enrollment_id: string | null
          id: string
          instructor_feedback: string | null
          instructor_id: string | null
          lesson_type: Database["public"]["Enums"]["lesson_type"]
          location: string | null
          notes: string | null
          rating: number | null
          scheduled_date: string
          status: Database["public"]["Enums"]["lesson_status"] | null
          student_feedback: string | null
          title: string
          updated_at: string | null
          vehicle_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          enrollment_id?: string | null
          id?: string
          instructor_feedback?: string | null
          instructor_id?: string | null
          lesson_type: Database["public"]["Enums"]["lesson_type"]
          location?: string | null
          notes?: string | null
          rating?: number | null
          scheduled_date: string
          status?: Database["public"]["Enums"]["lesson_status"] | null
          student_feedback?: string | null
          title: string
          updated_at?: string | null
          vehicle_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          enrollment_id?: string | null
          id?: string
          instructor_feedback?: string | null
          instructor_id?: string | null
          lesson_type?: Database["public"]["Enums"]["lesson_type"]
          location?: string | null
          notes?: string | null
          rating?: number | null
          scheduled_date?: string
          status?: Database["public"]["Enums"]["lesson_status"] | null
          student_feedback?: string | null
          title?: string
          updated_at?: string | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "enrollments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lessons_instructor_id_fkey"
            columns: ["instructor_id"]
            isOneToOne: false
            referencedRelation: "instructors"
            referencedColumns: ["id"]
          },
        ]
      }
      movie_genres: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      movies: {
        Row: {
          adult: boolean | null
          backdrop_path: string | null
          created_at: string | null
          genre_ids: number[] | null
          id: number
          original_language: string | null
          original_title: string | null
          overview: string | null
          popularity: number | null
          poster_path: string | null
          release_date: string | null
          title: string
          tmdb_id: number
          updated_at: string | null
          video: boolean | null
          vote_average: number | null
          vote_count: number | null
        }
        Insert: {
          adult?: boolean | null
          backdrop_path?: string | null
          created_at?: string | null
          genre_ids?: number[] | null
          id?: number
          original_language?: string | null
          original_title?: string | null
          overview?: string | null
          popularity?: number | null
          poster_path?: string | null
          release_date?: string | null
          title: string
          tmdb_id: number
          updated_at?: string | null
          video?: boolean | null
          vote_average?: number | null
          vote_count?: number | null
        }
        Update: {
          adult?: boolean | null
          backdrop_path?: string | null
          created_at?: string | null
          genre_ids?: number[] | null
          id?: number
          original_language?: string | null
          original_title?: string | null
          overview?: string | null
          popularity?: number | null
          poster_path?: string | null
          release_date?: string | null
          title?: string
          tmdb_id?: number
          updated_at?: string | null
          video?: boolean | null
          vote_average?: number | null
          vote_count?: number | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          currency: string | null
          due_date: string | null
          enrollment_id: string | null
          id: string
          notes: string | null
          payment_date: string | null
          payment_method: string | null
          status: Database["public"]["Enums"]["payment_status"] | null
          transaction_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string | null
          due_date?: string | null
          enrollment_id?: string | null
          id?: string
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["payment_status"] | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string | null
          due_date?: string | null
          enrollment_id?: string | null
          id?: string
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["payment_status"] | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "enrollments"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          branch: string
          created_at: string | null
          date_of_birth: string | null
          email: string
          emergency_contact: string | null
          emergency_phone: string | null
          full_name: string
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          branch?: string
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          emergency_contact?: string | null
          emergency_phone?: string | null
          full_name: string
          id: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          branch?: string
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          emergency_contact?: string | null
          emergency_phone?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Relationships: []
      }
      user_movie_favorites: {
        Row: {
          created_at: string | null
          id: string
          movie_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          movie_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          movie_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_movie_favorites_movie_id_fkey"
            columns: ["movie_id"]
            isOneToOne: false
            referencedRelation: "movies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_admin_user: {
        Args: {
          admin_email: string
          admin_password: string
          admin_name: string
        }
        Returns: string
      }
    }
    Enums: {
      course_type: "beginner" | "advanced" | "commercial" | "refresher"
      enrollment_status: "pending" | "active" | "completed" | "cancelled"
      lesson_status: "scheduled" | "completed" | "cancelled" | "rescheduled"
      lesson_type: "theory" | "practical"
      payment_status: "pending" | "completed" | "failed" | "refunded"
      user_role: "student" | "instructor" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      course_type: ["beginner", "advanced", "commercial", "refresher"],
      enrollment_status: ["pending", "active", "completed", "cancelled"],
      lesson_status: ["scheduled", "completed", "cancelled", "rescheduled"],
      lesson_type: ["theory", "practical"],
      payment_status: ["pending", "completed", "failed", "refunded"],
      user_role: ["student", "instructor", "admin"],
    },
  },
} as const
