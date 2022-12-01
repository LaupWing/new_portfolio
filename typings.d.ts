

export type icons =
   "IoLogoFirebase" | 
   "IoLogoReact" | 
   "IoLogoVue" | 
   "SiSolidity" | 
   "SiNextdotjs" |
   "SiTypescript"

export interface Skill {
   icon: icons
   name: string
   active: boolean
}