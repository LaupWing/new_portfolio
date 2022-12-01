import React from "react"
import { BiBomb, BiSearch } from "react-icons/bi"
import { Skill } from "typings"
import SkillCmp from "./Skill"

// Also available in the typings file
export enum Icons {
   "firebase" =  "IoLogoFirebase",  
   "react" = "IoLogoReact" , 
   "vue" = "IoLogoVue", 
   "solidity" = "SiSolidity", 
   "nextjs" = "SiNextdotjs",
   "typescript" = "SiTypescript"
}

const Filters = () => {
   const skills:Skill[] = [
      {
         active: true,
         icon: Icons.firebase,
         name: "firebase"
      },
      {
         active: true,
         icon: Icons.nextjs,
         name: "nextjs"
      },
      {
         active: false,
         icon: Icons.react,
         name: "react"
      },
      {
         active: true,
         icon: Icons.solidity,
         name: "solidity"
      },
      {
         active: true,
         icon: Icons.typescript,
         name: "typescript"
      },
      {
         active: false,
         icon: Icons.vue,
         name: "vue"
      },
   ] 

   return (
      <nav className="px-5 py-7 max-w-7xl text-accent flex items-center space-x-4">
         <BiSearch size={35}/>
         <BiBomb size={35}/>
         {skills.map(skill=>(
            <SkillCmp
               key={skill.name}
               icon={skill.icon}
               active={skill.active}
            />
         ))}
         <button className="text-sm bg-teal-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest">Self</button>
         <button className="text-sm bg-indigo-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest">tutorial</button>
      </nav>
   )
}

export default Filters
