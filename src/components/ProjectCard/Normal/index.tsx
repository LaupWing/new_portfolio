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
         className={`overflow-hidden relative duration-200 max-w-sm p-4 rounded-2xl ${
            darkMode ? 
               "bg-background-secundair border-accent border text-accent" : 
               "bg-emerald-300 border-2 border-black sm:hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[10px_10px_0px_2px_rgba(0,0,0,1)]" 
            }`
         }
         onMouseOver={()=> {
            if(window.innerWidth >= 640){
               setHover(true)
            }
         }}
         onMouseOut={()=> setHover(false)}
         onClick={() => {
            setHover(false)
            setExpanded(true)
         }}
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
               <div className="relative mt-4">
                  <p className="absolute rounded-tl-md rounded-br-md bg-opacity-80  top-0 left-0 text-indigo-500 bg-white px-2 text-sm shadow">{project.date}</p>
                  <img
                     src={urlFor(project.images[0]).url()}
                     className="aspect-video w-full object-cover rounded"
                     alt="Project image"
                  />
               </div>
            </div>
         </div>
      </motion.div>
   )
}

export default Normal
