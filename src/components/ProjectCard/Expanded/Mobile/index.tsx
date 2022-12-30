import React from "react"
import { Project } from "typings"
import Credentials from "../Credentials"
import Images from "../Images"
import Links from "../Links"

interface Props {
   project: Project
}

const Mobile:React.FC<Props> = ({project}) => {
   return (
      <div className="md:hidden flex flex-col">
         <Images images={project.images}/>
         <Links
            className="my-4"
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
   )
}

export default Mobile
