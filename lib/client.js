import { createClient }  from '@sanity/client'; 

import imageUrlBuilder from '@sanity/image-url'
createClient
const client = createClient({
  projectId: 'u9xjwn3v',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
  token:"sk1fetYJLlG17r6krocFTqdM8mX1icJJwRIUzV6PLF9jxtlLhEKjdDXofhnSECRBhJJ4qC2M2ecvWu53Ck897EOfQHEUYz8m8PPzAA10qhsTkHndnivhGj1zBgOAUTwKyJu0V340KMP9gtreVjTP1T1hjDFMsvacxTnDaK7i69Irl3BPvc52"
}); 


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client

