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
      <div className="md:w-1/2 md:mb-0 mb-2 w-full flex-shrink-0">
         <ImageGallery items={_images} />
      </div>
   )
}

export default Images