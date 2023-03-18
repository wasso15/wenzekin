import { createClient }  from '@sanity/client'; 
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'u9xjwn3v',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
  token:process.env.NEXT_SANITY_PUBLIC_TOKEN
}); 


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client

