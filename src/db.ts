import { createClient } from '@supabase/supabase-js'

// Determine the environment and get the Supabase URL and anon key
let supabaseUrl: string
let supabaseAnonKey: string
let supabaseServiceRoleKey: string

// In Node.js (server), use process.env. In browser (Vite), use import.meta.env
if (typeof process !== 'undefined' && process.env) {
  // Running in Node.js environment
  supabaseUrl = process.env.VITE_SUPABASE_URL || ''
  supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || ''
  supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
} else if (typeof import.meta !== 'undefined' && import.meta.env) {
  // Running in a Vite client environment
  supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
  supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
  // Service role key should never be exposed to client
  supabaseServiceRoleKey = ''
} else {
  supabaseUrl = ''
  supabaseAnonKey = ''
  supabaseServiceRoleKey = ''
}

// Create a single Supabase client instance for general use (anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client for server-side only (service role key)
// Will be null on client or if service role key not set
export const supabaseAdmin = typeof process !== 'undefined' && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null