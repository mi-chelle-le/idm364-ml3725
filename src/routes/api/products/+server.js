import { supabase } from '$lib/server/supabase_client';
import { json } from '@sveltejs/kit';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');
    
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    return json(data);
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}