import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Reset password request
export const resetPassword = async (email) => {
  return await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '/reset-password-confirm',
  });
};

// Update user password
export const updatePassword = async (newPassword) => {
  return await supabase.auth.updateUser({
    password: newPassword
  });
};

export default supabase;