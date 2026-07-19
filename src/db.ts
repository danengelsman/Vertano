import { createClient } from '@supabase/supabase-js'

// Determine the environment and get the Supabase URL and anon key
let supabaseUrl: string
let supabaseAnonKey: string

if (import.meta.env) {
  // Running in a Vite client environment
  supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
} else {
  // Running in a Node.js environment (e.g., server.ts)
  // We assume dotenv has been loaded to populate process.env
  supabaseUrl = process.env.VITE_SUPABASE_URL
  supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY
}

// Create a single Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)