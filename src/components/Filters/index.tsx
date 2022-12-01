import React from "react"
import { BiSearch } from "react-icons/bi"
import { Icons, Skill } from "../../../typings"
// import { Icons, Skill } from "../../../typings"
import SkillCmp from "./Skill"

// export enum Icons {
//    "firebase" =  "IoLogoFirebase",  
//    "react" = "IoLogoReact" , 
//    "vue" = "IoLogoVue", 
//    "solidity" = "SiSolidity", 
//    "nextjs" = "SiNextdotjs",
//    "typescript" = "SiTypescript"
// }
// export type skills = keyof typeof Icons

// export interface Skill {
//    icon: Icons
//    name: skills
//    active: boolean
// }

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
         active: true,
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
         active: true,
         icon: Icons.vue,
         name: "vue"
      },
   ] 

   return (
      <nav className="px-5 py-7 mx-auto max-w-7xl text-accent flex items-center space-x-4">
         <BiSearch size={30}/>
         {skills.map(skill=>(
            <SkillCmp
               key={skill.name}
               icon={skill.icon}
               active={skill.active}
            />
         ))}
      </nav>
   )
}

export default Filters
