import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

/**
 * @param {import("@sanity/image-url/lib/types/types").SanityImageSource} src
 */
export function urlFor(src){
    return builder.image(src)
}