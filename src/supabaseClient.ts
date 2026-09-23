import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://opnswxgdfmprbkvztzyt.supabase.co';
const supabasePublishableKey = 'sb_publishable_905YpW-S-sPLiB2DxYVW9Q_nKLa-Aa1';

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
