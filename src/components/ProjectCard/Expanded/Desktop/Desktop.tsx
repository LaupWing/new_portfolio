import Link from "next/link"
import React from "react"
import { GoEye } from "react-icons/go"
import { SiGithub } from "react-icons/si"
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
            <div className="flex space-x-4">
               <Link 
                  href={project.github} 
                  rel="noopener noreferrer" 
                  target="_blank"
               >
                  <SiGithub className="cursor-pointer hover:text-pink-500" size={30}/>
               </Link>
               <Link
                  href={project.url} 
                  rel="noopener noreferrer" 
                  target="_blank"
               >
                  <GoEye className="cursor-pointer hover:text-pink-500" size={30}/>
               </Link>
            </div>
            <h1 className="font-serif text-5xl tracking-wider">{project.name}</h1>
            <p className="text-lg mt-1">
               {project.description}
            </p>
         </div>
      </div>
   )
}

export default Desktop
