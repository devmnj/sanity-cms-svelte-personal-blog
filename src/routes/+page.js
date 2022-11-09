import { error } from '@sveltejs/kit';
import client from '$lib/sanity';
 
/** @type {import('./$types').PageLoad} */
export async function load() {
   const data = await client.fetch(`*[_type == "post"]{title,_createdAt,slug,summary,featured_image}`);
    return {
        posts:(await data),
       
    };
   
 
  throw error(404, 'Not found');
}