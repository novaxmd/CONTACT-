// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Hapa weka Supabase URL na ANON key yako
const SUPABASE_URL = "https://iocpwvxoovybakjrahkd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nGecq00haP-onam4jv2GcA_lcbhSzHa";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
