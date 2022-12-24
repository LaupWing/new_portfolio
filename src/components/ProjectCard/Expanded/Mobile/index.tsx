import React from "react"
import { urlFor } from "src/sanity"
import { Project } from "typings"

interface Props {
   project: Project
}

const Mobile:React.FC<Props> = ({project}) => {
   return (
      <div className="md:hidden flex flex-col">
         <img
            src={urlFor(project.image).url()}
            className="aspect-video w-full object-cover rounded mt-4"
            alt="Project image"
         />
         <h1 className="font-serif text-5xl tracking-wider">{project.name}</h1>
         <p className="text-lg mt-1">
            {project.description}
         </p>
      </div>
   )
}

export default Mobile
