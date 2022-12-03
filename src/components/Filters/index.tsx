import React, { FC } from "react"
import { BiBomb, BiSearch } from "react-icons/bi"
import { Skill } from "typings"
import SkillCmp from "./Skill"

interface Props {
   skills:Skill[]
   toggle: (skill: string) => void
   showSelf: boolean
   setShowSelf: React.Dispatch<React.SetStateAction<boolean>>
   showTutorial: boolean
   setShowTutorial: React.Dispatch<React.SetStateAction<boolean>>
}

const Filters:FC<Props> = ({ 
   skills, 
   toggle, 
   showSelf, 
   setShowSelf, 
   showTutorial,
   setShowTutorial 
}) => {
   
   return (
      <nav className="px-5 py-7 max-w-7xl w-full mx-auto text-accent flex items-center space-x-4 justify-start shrink-0 overflow-x-auto">
         <BiSearch 
            size={35}
            className="shrink-0"
            />
         <BiBomb 
            size={35}
            className="shrink-0"
         />
         {skills.map(skill=>(
            <SkillCmp
               key={skill.name}
               name={skill.name}
               active={skill.active}
               onClick={()=>{
                  toggle(skill.name)
               }}
            />
         ))}
         <button 
            className={"text-sm rounded-full shrink-0 duration-200 w-20 text-center border-2 border-teal-400 py-0.5 uppercase font-bold font-serif tracking-widest " + (showSelf ? "bg-teal-500 text-white" : "text-teal-500 opacity-30")}
            onClick={()=> setShowSelf(prev => !prev)}
         >
            Self
         </button>
         <button 
            className={"text-sm duration-200 shrink-0 rounded-full w-20 text-center py-0.5 uppercase border-2 border-indigo-500 font-bold font-serif tracking-widest " + (showTutorial ? "bg-indigo-500 text-white" : "text-indigo-500 opacity-30")}
            onClick={()=> setShowTutorial(prev => !prev)}
         >
            tutorial
         </button>
      </nav>
   )
}

export default Filters
