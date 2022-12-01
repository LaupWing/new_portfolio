export enum Icons {
   "firbase" =  "IoLogoFirebase",  
   "react" = "IoLogoReact" , 
   "vue" = "IoLogoVue", 
   "solidity" = "SiSolidity", 
   "nextjs" = "SiNextdotjs",
   "typescript" = "SiTypescript"
}
export type skills = "firebase" | "react" | "vue" | "solidity" | "nextjs" | "typescript"

export interface Skill {
   icon: icons
   name: string
   active: boolean
}