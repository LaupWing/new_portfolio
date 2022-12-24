import React from "react"
import { urlFor } from "src/sanity"
import { Project } from "typings"

interface Props {
   project: Project
}

const Desktop:React.FC<Props> = ({project}) => {
   return (
      <div className="hidden md:flex">
         <img
            src={urlFor(project.image).url()}
            className="object-cover w-1/2 rounded mt-4"
            alt="Project image"
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
