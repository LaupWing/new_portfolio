import { motion } from "framer-motion"
import { IoCloseSharp } from "react-icons/io5"
import { useAppSelector } from "src/app/hooks"
import { urlFor } from "src/sanity"
import { Project } from "typings"
import Desktop from "./Desktop/Desktop"
import Mobile from "./Mobile"
import Skill from "./Skill"
import {SanityImageSource} from "@sanity/image-url/lib/types/types"

interface Props {
   project: Project,
   active_skills: string[]
   setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const Expanded:React.FC<Props> = ({ project, setExpanded }) => {
   const {darkMode} = useAppSelector(state => state.theme)
   
   return (
      <motion.div
         className={`overflow-y-auto fixed w-screen h-screen inset-0 duration-200 z-50 p-4 ${
            darkMode ? 
               "bg-background-secundair border-accent border text-accent" : 
               "bg-emerald-300 border-2 border-black hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[10px_10px_0px_2px_rgba(0,0,0,1)]" 
            }`
         }
      >
         <div className="flex flex-col">
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
            <div className="flex items-center justify-between my-4">
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
            <Mobile project={project}/>
            <Desktop project={project}/>
         </div>
      </motion.div>
   )
}

export default Expanded
