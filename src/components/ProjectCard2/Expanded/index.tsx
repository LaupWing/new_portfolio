import { Variants, motion } from "framer-motion"
import { useState } from "react"
import { IoCloseSharp } from "react-icons/io5"
import { useAppSelector } from "src/app/hooks"
import { Skills } from "typings"
import Skill from "./Skill"

interface Props {
   skills: Skills[]
   tutorial: boolean
   image: string
   active_skills: string[]
   setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const Expanded:React.FC<Props> = ({ skills, tutorial, image, setExpanded }) => {
   const [hover, setHover] = useState(false) 
   const {darkMode} = useAppSelector(state => state.theme)
   
   return (
      <motion.div 
         layoutId="expandable-card"
         className={`overflow-hidden fixed w-screen h-screen inset-0 duration-200 z-50 p-4 ${
            darkMode ? 
               "bg-background-secundair border-accent border text-accent" : 
               "bg-emerald-300 border-2 border-black hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[10px_10px_0px_2px_rgba(0,0,0,1)]" 
            }`
         }
      >
         <div
            className="relative"
            style={{
               paddingBottom: "115%",
            }}
         >
            <div className="absolute inset-0 duration-500 flex flex-col">
               <IoCloseSharp
                  onClick={() => setExpanded(false)}
                  size={35}
                  className={"cursor-pointer ml-auto hover:text-red-400 duration-200 shrink-0 " + 
                     (darkMode ? 
                        "" : 
                        "text-black"
                     )
                  }
               />
               <div className="flex items-start justify-between my-4">
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
                        <p className={
                           "text-base bg-indigo-500 text-white rounded-full w-24 text-center py-0.5 uppercase font-bold font-serif tracking-widest " + 
                           (darkMode ? "" : "border-2 border-black")
                        }>
                           tutorial
                        </p>
                     )
                     :  (
                        <p 
                           className={"text-base bg-teal-500 text-white rounded-full w-24 text-center py-0.5 uppercase font-bold font-serif tracking-widest " +
                           (darkMode ? "" : "border-2 border-black")
                        }
                        >
                           Self
                        </p>
                     )}
               </div>
               <h1 className="font-serif text-5xl tracking-wider">
                  ProjectCard
               </h1>
               <p className="text-lg mt-1 line-clamp-3">
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

export default Expanded
