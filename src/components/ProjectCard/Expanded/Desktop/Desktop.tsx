import React from "react"
import { Project } from "typings"
import Credentials from "../Credentials"
import Images from "../Images"
import Links from "../Links"

interface Props {
   project: Project
}

const Desktop:React.FC<Props> = ({project}) => {
   return (
      <div className="hidden md:flex">
         <Images
            images={project.images}
         />
         <div className="flex flex-col px-4">
            <p className="uppercase text-xs font-bold mb-2 opacity-50">Created at: {project.date}</p>
            <Links
               github={project.github}
               url={project.url}
            />
            {project.credentials && 
               <Credentials project={project}/>
            }
            <h1 className="font-serif text-5xl tracking-wider">{project.name}</h1>
            <p className="text-lg mt-1">
               {project.description}
            </p>
         </div>
      </div>
   )
}

export default Desktop
