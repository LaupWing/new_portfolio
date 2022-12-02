import Icons from "./src/utils/icons"

export type SkillIcons = keyof typeof Icons

export interface Skill {
   icon: Icons
   name: skills
   active: boolean
}

export interface Project {
   skills: Skills[]
   name: string
   description: string
   tutorial: boolean
   image: string
}