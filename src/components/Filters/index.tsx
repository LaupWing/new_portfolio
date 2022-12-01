import React, { FC } from "react"
import { BiBomb, BiSearch } from "react-icons/bi"
import { Skill } from "typings"
import SkillCmp from "./Skill"

interface Props {
   skills:Skill[]
   toggle: (skill: string) => void
}

const Filters:FC<Props> = ({ skills, toggle }) => {
   
   return (
      <nav className="px-5 py-7 max-w-7xl text-accent flex items-center space-x-4">
         <BiSearch size={35}/>
         <BiBomb size={35}/>
         {skills.map(skill=>(
            <SkillCmp
               key={skill.name}
               icon={skill.icon}
               active={skill.active}
               onClick={()=>{
                  toggle(skill.name)
               }}
            />
         ))}
         <button className="text-sm bg-teal-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest">Self</button>
         <button className="text-sm bg-indigo-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest">tutorial</button>
      </nav>
   )
}

export default Filters
