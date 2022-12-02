import React from "react"
import { Skills } from "typings"
import Skill from "./Skill"

interface Props {
   skills: Skills[]
   tutorial: boolean
   image: string
}

const ProjectCard:React.FC<Props> = ({ skills, tutorial, image }) => {
   return (
      <div className="bg-background-secundair p-4 border-accent border text-accent rounded-2xl">
         <div
            className="relative"
            style={{
               paddingBottom: "115%",
            }}
         >
            <div className="absolute inset-0 duration-500 hover:blur-md flex flex-col justify-between">
               <div className="flex items-start justify-between">
                  <div className="flex">
                     {skills.map((s, i) => (
                        <Skill
                           index={i}
                           name={s}
                        />
                     ))}
                  </div>
                  {  tutorial 
                     ? (
                        <p className="text-sm bg-indigo-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest">
                           tutorial
                        </p>
                     )
                     :  (
                        <p className="text-sm bg-teal-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest">
                           Self
                        </p>
                     )}
               </div>
               <h1 className="font-serif text-xl tracking-wider">
                  ProjectCard
               </h1>
               <p className="text-xs mt-1 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  sit doloribus ab ipsa maiores ad dolorum.
               </p>
               <img
                  src={image}
                  className="aspect-video w-full object-cover rounded mt-4"
                  alt="Project image"
               />
            </div>
         </div>
      </div>
   )
}

export default ProjectCard
