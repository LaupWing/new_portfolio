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
   _id: string
   github: string
   url: string
   credentials?: boolean
   username?: string
   password?: string
}