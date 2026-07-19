import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Get the Supabase URL and anon key from environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey ? 'present' : 'missing');

// Check if we have the URL and key
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase URL or anon key in .env file');
  process.exit(1);
}

// Create the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test the connection by querying the sprints table
async function testConnection() {
  try {
    const { data, error } = await supabase
      .from('sprints')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Error querying sprints table:', error);
      process.exit(1);
    }

    console.log('Successfully connected to Supabase!');
    console.log('Data from sprints table:', data);
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
}

testConnection();