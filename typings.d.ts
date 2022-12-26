import Icons from "./src/utils/icons"

export type Skills = keyof typeof Icons

export interface Skill {
   name: Skills
   active: boolean
}

export interface Project {
   skills: Skills[]
   name: string
   description: string
   tutorial: boolean
   images: string[]
   id: string
   github: string
   url: string
}