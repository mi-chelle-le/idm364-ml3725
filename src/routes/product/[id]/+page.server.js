import { supabase } from "$lib/server/supabase_client";
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const id = params.id;
    console.log("Fetching product with ID:", id);
    
    const { data, error: supabaseError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

    if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        throw error(404, {
            message: `Product with ID ${id} not found`
        });
    }
    
    console.log("Retrieved product:", data);
    
    return {
        product: data
    };
}