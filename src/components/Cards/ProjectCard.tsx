import { Variants, motion } from "framer-motion"
import React, { useState } from "react"
import { useAppSelector } from "src/app/hooks"
import { urlFor } from "src/sanity"
import { Project, Skills } from "typings"
import icons from "src/utils/skills"
import { AiFillEye, AiFillGithub } from "react-icons/ai"

interface Props {
   project: Project
   active_skills: string[]
}

const projectVariant: Variants = {
   hidden: {  top: 50, opacity: 0 },
   show: {  top: 0, opacity: 1 }
}

export const ProjectCard:React.FC<Props> = ({ project }) => {
   const [hover, setHover] = useState(false) 
   const {darkMode} = useAppSelector(state => state.theme)
   
   return (
      <motion.div
         className={`overflow-hidden relative duration-200 max-w-sm p-4 rounded-2xl ${
            darkMode 
               ? "bg-background-secundair border-accent border text-accent" 
               : "bg-emerald-300 border-2 border-black sm:hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[10px_10px_0px_2px_rgba(0,0,0,1)]" 
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
         }}
         variants={projectVariant}
      >
         {hover && <ProjectCardOverlay/>}
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

interface SkillProps {
   name: Skills
   index: number
}

const Skill:React.FC<SkillProps> = ({ name, index }) => {
   const Icon = (icons as any)[name]
   const {darkMode} = useAppSelector(state => state.theme)
   return (
      <div 
         className={"w-8 h-8 flex justify-center items-center border-2 bg-white rounded-full transform " + 
            `-translate-x-${index * 2} ` +
            (darkMode ? "border-accent" : "border-black")
         }
         id="test"
      >
         <Icon className="text-background-secundair" size={20}/>
      </div>
   )
}


const ProjectCardOverlay = () => {
   const { darkMode } = useAppSelector(state => state.theme)

   return (
      <motion.div 
         className="absolute cursor-pointer inset-0 z-50 flex justify-center items-center flex-col space-y-10"
         initial={{
            scale: 1.5,
            opacity: 0
         }}
         animate={{
            scale: 1,
            opacity: 1
         }}
         transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120
         }}
      >
         <motion.p
            className={"absolute bg-pink-100 px-2 rounded bg-opacity-70 top-4 text-center font-bold uppercase " + (
               darkMode ?
                  "text-violet-500" : 
                  "text-pink-400"
            )}
            initial={{
               y: -20,
            }}
            animate={{
               y: 0,
            }}
            transition={{
               delay: 0.2
            }}
         >
            Click me to learn more 🖱️ 
         </motion.p>
         <motion.div
            whileHover={{
               scale: [1, 0.85],
            }}
            transition={{
               duration: 0.25,
            }}
         >
            <AiFillEye
               size={50} 
               className={"cursor-pointer hover:text-pink-500 " + (
                  darkMode ? 
                     "text-indigo-500" :
                     "text-yellow-400"
               )}
            />
         </motion.div>
         <motion.div
            whileHover={{
               scale: [1, 0.85],
            }}
            transition={{
               duration: 0.25,
            }}
         >
            <AiFillGithub 
               size={50} 
               className={"cursor-pointer hover:text-pink-500 " + (
                  darkMode ? 
                     "text-indigo-500" :
                     "text-yellow-400"
               )}
            />
         </motion.div>
      </motion.div>
   )
}