
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gajwaouvggievsikmfpo.supabase.co'
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhandhb3V2Z2dpZXZzaWttZnBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NTkwNjcsImV4cCI6MjA2NzMzNTA2N30.gTR5MtylViuATD9k4LCW_kS0WCMAYoZafaAldX7m2Sc
const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase
  .from('users')
  .insert([
    { mail: 'test@mail.com', password: '123456' }
  ]);