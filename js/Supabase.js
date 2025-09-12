import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://gajwaouvggievsikmfpo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhandhb3V2Z2dpZXZzaWttZnBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NTkwNjcsImV4cCI6MjA2NzMzNTA2N30.gTR5MtylViuATD9k4LCW_kS0WCMAYoZafaAldX7m2Sc'; // НЕ service_role!
export const supabase = createClient(supabaseUrl, supabaseKey);
