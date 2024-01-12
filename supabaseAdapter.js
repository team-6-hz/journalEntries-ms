import { createClient } from '@supabase/supabase-js';
import { key } from './key.js';

const supabase = createClient("https://qsoobnawmpnqstignbjy.supabase.co", key());

export async function getEntriesData() {
    const { data, error } = await supabase.from('journalEntries').select('*');
    if (error) console.log('query error', error);
    else return data;
}