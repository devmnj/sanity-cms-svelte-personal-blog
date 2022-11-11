import { error } from '@sveltejs/kit';
import client from '$lib/sanity';
 
/** @type {import('./$types').PageLoad} */
export async function load({params} ) {
   const data = await client.fetch(`*[_type == "post" && slug.current =='${params.slug}']{title,_id,content,featured_image,summary,tags,_createdAt,view,references[],recommended[]->{
    title,
    summary,
    tags,
    featured_image,
    _createdAt,
    slug
   },
   'comments':*[_type == "comment" && post._ref == ^._id && approved == true]{
    _id, 
    name, 
    email, 
    comment, 
    _createdAt
   }
  
  }`);
  //  console.log(data);
   return {
        post:(await data),
        slug:params.slug
    };
   
 
  throw error(404, 'Not found');
}