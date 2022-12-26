import { Variants, motion } from "framer-motion"
import React, { useState } from "react"
import { useAppSelector } from "src/app/hooks"
import { urlFor } from "src/sanity"
import { Project, Skills } from "typings"
import Overlay from "./Overlay"
import Skill from "./Skill"

interface Props {
   project: Project
   active_skills: string[]
   setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const projectVariant: Variants = {
   hidden: {  top: 50, opacity: 0 },
   show: {  top: 0, opacity: 1 }
 }

const Normal:React.FC<Props> = ({ project, setExpanded }) => {
   const [hover, setHover] = useState(false) 
   const {darkMode} = useAppSelector(state => state.theme)
   
   return (
      <motion.div 
         layoutId="expandable-card"
         className={`overflow-hidden relative duration-200 max-w-sm p-4 rounded-2xl ${
            darkMode ? 
               "bg-background-secundair border-accent border text-accent" : 
               "bg-emerald-300 border-2 border-black hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[10px_10px_0px_2px_rgba(0,0,0,1)]" 
            }`
         }
         onMouseOver={()=> setHover(true)}
         onMouseOut={()=> setHover(false)}
         onClick={() => setExpanded(true)}
         variants={projectVariant}
      >
         {hover && <Overlay/>}
         <div
            className="relative"
            style={{
               paddingBottom: "115%",
            }}
         >
            <div className={"absolute inset-0 duration-500 flex flex-col justify-between " + (hover ? "blur" : "" )}>
               <div className="flex items-start justify-between">
                  <div className="flex">
                     {project.skills.map((s, i) => (
                        <Skill
                           index={i}
                           key={i}
                           name={s}
                        />
                     ))}
                  </div>
                  {  project.tutorial 
                     ? (
                        <p className={
                           "text-sm bg-indigo-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest " + 
                           (darkMode ? "" : "border-2 border-black")
                        }>
                           tutorial
                        </p>
                     )
                     :  (
                        <p 
                           className={"text-sm bg-teal-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest " +
                           (darkMode ? "" : "border-2 border-black")
                        }
                        >
                           Self
                        </p>
                     )}
               </div>
               <h1 className="font-serif text-xl tracking-wider">
                  {project.name}
               </h1>
               <p className="text-xs mt-1 line-clamp-3">
                  {project.description}
               </p>
               <img
                  src={urlFor(project.images[0]).url()}
                  className="aspect-video w-full object-cover rounded mt-4"
                  alt="Project image"
               />
            </div>
         </div>
      </motion.div>
   )
}

export default Normal
