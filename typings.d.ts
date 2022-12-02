export enum Icons {
   "firebase" =  "IoLogoFirebase",  
   "react" = "IoLogoReact" , 
   "vue" = "IoLogoVue", 
   "solidity" = "SiSolidity", 
   "nextjs" = "SiNextdotjs",
   "css" = "IoLogoCss3",
   "typescript" = "SiTypescript"
}

export type _icons = {
   "firebase" :  "IoLogoFirebase",  
   "react" : "IoLogoReact" , 
   "vue" : "IoLogoVue", 
   "solidity" : "SiSolidity", 
   "nextjs" : "SiNextdotjs",
   "css" : "IoLogoCss3",
   "typescript" : "SiTypescript"
}
export type Skills = keyof typeof Icons

export interface Skill {
   icon: Icons
   name: skills
   active: boolean
}

export interface Project {
   skills: Skills
   name: skills
   active: boolean
}