export enum Icons {
   "firbase" =  "IoLogoFirebase",  
   "react" = "IoLogoReact" , 
   "vue" = "IoLogoVue", 
   "solidity" = "SiSolidity", 
   "nextjs" = "SiNextdotjs",
   "typescript" = "SiTypescript"
}
export type skills = keyof typeof Icons

export interface Skill {
   icon: Icons
   name: skills
   active: boolean
}