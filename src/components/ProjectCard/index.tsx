import { Variants, motion } from "framer-motion"
import { useState } from "react"
import { Skills } from "typings"
import Overlay from "./Overlay"
import Skill from "./Skill"

interface Props {
   skills: Skills[]
   tutorial: boolean
   image: string
   active_skills: string[]
}

const projectVariant: Variants = {
   hidden: {  top: 50, opacity: 0 },
   show: {  top: 0, opacity: 1 }
 }

const ProjectCard:React.FC<Props> = ({ skills, tutorial, image }) => {
   const [hover, setHover] = useState(false) 

   return (
      <motion.div 
         className="bg-background-secundair overflow-hidden relative max-w-sm p-4 border-accent border text-accent rounded-2xl"
         onMouseOver={()=> setHover(true)}
         onMouseOut={()=> setHover(false)}
         variants={projectVariant}
         exit="hidden"
         initial="hidden"
         animate="show"
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
                     {skills.map((s, i) => (
                        <Skill
                           index={i}
                           key={i}
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
      </motion.div>
   )
}

export default ProjectCard
