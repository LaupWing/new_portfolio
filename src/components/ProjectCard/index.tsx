import React from "react"
import { IoLogoFirebase, IoLogoReact, IoLogoVue } from "react-icons/io5"
import { SkillIcons } from "typings"
import Skill from "./Skill"

interface Props {
   skills: SkillIcons[]
}

const ProjectCard:React.FC<Props> = ({ skills }) => {
   console.log(skills)
   return (
      <div className="bg-background-secundair p-4 border-accent border text-accent rounded-2xl">
         <div
            className="relative"
            style={{
               paddingBottom: "115%",
            }}
         >
            <div className="absolute inset-0 duration-500 hover:blur-md flex flex-col justify-between">
               <div className="flex items-start justify-between">
                  <div className="flex">
                     {/* {skills.map(s => (
                        <Skill
                           icon={s}
                        />
                     ))} */}
                  </div>
                  {/* <p className="text-sm bg-indigo-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest">tutorial</p> */}
                  <p className="text-sm bg-teal-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest">Self</p>
               </div>
               <h1 className="font-serif text-xl tracking-wider">
                  ProjectCard
               </h1>
               <p className="text-xs mt-1 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  sit doloribus ab ipsa maiores ad dolorum.
               </p>
               <img
                  src="https://miro.medium.com/max/1400/1*5FF-WiNYehgcBgtgAka1Og.png"
                  className="aspect-video w-full object-cover rounded mt-4"
               />
            </div>
         </div>
      </div>
   )
}

export default ProjectCard
