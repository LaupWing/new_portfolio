import React from "react"
import ImageGallery from "react-image-gallery"
import { urlFor } from "src/sanity"

interface Props {
   images: string[]
}

const Images:React.FC<Props> = ({images}) => {
   const _images = images
      .map((img) => urlFor(img).url())
      .map((x:string)=>({
         original: x,
         thumbnail: x,
      }))
   return (
      <div>Images</div>
   )
}

export default Images