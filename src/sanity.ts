import sanityClient from "@sanity/client"
import imageBuilder from "@sanity/image-url"

export const client = sanityClient({
   projectId: "",
   dataset: "production",
   apiVersion: "",
   useCdn: true,
   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageBuilder(client)

export const urlFor = (source:string) => builder.image(source)