// import { error } from '@sveltejs/kit';
import client from '$lib/sanity';
import { postsStore } from '$lib/store';
 
/** @type {import('./$types').PageLoad} */
export async function load() {
   const data = await client.fetch(`*[_type == "post"]{title,_createdAt,slug,summary,featured_image}`);
   const posts =await data;
   postsStore.set(posts) 
    return {

    };
   
 
}