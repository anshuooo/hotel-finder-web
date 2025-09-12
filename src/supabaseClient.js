import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jbpbjmjnazxvwlsxirrr.supabase.co"; // apna project url daalo
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpicGJqbWpuYXp4dndsc3hpcnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NjQxMzMsImV4cCI6MjA3MjE0MDEzM30.TO_6qGfsASn1Op5a4ickEn4KYaCP5P-n6t0eezi1Tus"; // anon public key daalo

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
