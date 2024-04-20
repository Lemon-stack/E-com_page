import { createClient } from "@supabase/supabase-js";

const apiUrl =import.meta.env.VITE_API_URL
const anonKey =import.meta.env.VITE_API_KEY


export default createClient(apiUrl, anonKey);