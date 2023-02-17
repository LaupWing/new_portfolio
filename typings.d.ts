import Icons from "./src/utils/skills"

export type Skills = keyof typeof Icons

export interface SkillType {
   name: Skills
   active: boolean
}

export interface Project {
   skills: Skills[]
   name: string
   date: string
   description: string
   tutorial: boolean
   images: string[]
   _id: string
   github: string
   url: string
   credentials?: boolean
   username?: string
   password?: string
   slug: {
      current: string
   }
}