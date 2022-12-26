import React from "react"
import { urlFor } from "src/sanity"
import { Project } from "typings"
import Images from "../Images"

interface Props {
   project: Project
}

const Desktop:React.FC<Props> = ({project}) => {
   return (
      <div className="hidden md:flex">
         <Images
            images={project.images}
         />
         <div className="flex flex-col px-4 mt-2">
            <h1 className="font-serif text-5xl tracking-wider">{project.name}</h1>
            <p className="text-lg mt-1">
               {project.description}
            </p>
         </div>
      </div>
   )
}

export default Desktop
