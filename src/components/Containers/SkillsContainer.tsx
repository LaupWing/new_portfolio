import React, { FC } from 'react'
import { SkillType } from "typings"
import { motion } from "framer-motion"
import { BiBomb } from "react-icons/bi"
import { useAppSelector } from "src/app/hooks"
// import SkillCmp from "./Skill"
import { toast } from "react-toastify"

interface Props {
   skills:SkillType[]
   toggle: (skill: string) => void
   showSelf: boolean
   setShowSelf: React.Dispatch<React.SetStateAction<boolean>>
   showTutorial: boolean
   toggleAll: Function
   setShowTutorial: React.Dispatch<React.SetStateAction<boolean>>
}

export const SkillsContainer:FC<Props> = ({
   skills, 
   toggle, 
   showSelf, 
   setShowSelf, 
   setShowTutorial, 
   showTutorial,
   toggleAll
}) => {
   const { darkMode } = useAppSelector(state => state.theme)
   return (
      <motion.div 
         initial={{
            y: 100
         }}
         animate={{
            y: 0
         }}
         exit={{
            y: 100
         }}
         key={"filters"}
         className="flex items-center space-x-4"
      >
         <BiBomb 
            size={35}
            className={"shrink-0 cursor-pointer duration-200 hover:text-pink-500 " + (darkMode ? "" : "text-black")}
            onClick={()=> toggleAll()}
         />
         {/* {skills.map(skill=>(
            <SkillCmp
               key={skill.name}
               name={skill.name}
               active={skill.active}
               onClick={()=>{
                  toggle(skill.name)
                  toast(<p>{!skill.active ? "Show": "Hide"} <b>{skill.name}</b></p>)
               }}
            />
         ))} */}
         <button 
            className={"text-sm rounded-full shrink-0 duration-200 w-20 text-center border-2 py-0.5 uppercase font-bold font-serif tracking-widest " + 
               (showSelf ? "bg-teal-500 text-white " : "text-teal-500 opacity-30 ") +
               (darkMode ? "border-teal-400" : "border-black shadow-[2px_2px_0px_1px_rgba(0,0,0,1)]")
            }
            onClick={()=> setShowSelf(prev => !prev)}
         >
            Self
         </button>
         <button 
            className={"text-sm duration-200 shrink-0 rounded-full w-20 text-center py-0.5 uppercase border-2 font-bold font-serif tracking-widest " + 
               (showTutorial ? "bg-indigo-500 text-white " : "text-indigo-500 opacity-30 ") +
               (darkMode ? "border-indigo-500" : "border-black shadow-[2px_2px_0px_1px_rgba(0,0,0,1)]")
            }
            onClick={()=> setShowTutorial(prev => !prev)}
         >
            tutorial
         </button>
      </motion.div>
   )
}