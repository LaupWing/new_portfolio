import sanityClient from "@sanity/client"

export const client = sanityClient({
   projectId: "",
   dataset: "production",
   apiVersion: "",
   useCdn: true,
   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

