import React from "react"
import { IoLogoFirebase, IoLogoReact, IoLogoVue } from "react-icons/io5"

const ProjectCard = () => {
   return (
      <div className="bg-background-secundair p-4 border-accent border text-accent rounded-2xl">
         <div
            className="relative"
            style={{
               paddingBottom: "115%",
            }}
         >
            <div className="absolute inset-0 flex flex-col justify-between">
               <div className="flex">
                  <div className="w-8 h-8 flex justify-center items-center border-2 border-accent bg-white rounded-full">
                     <IoLogoVue className="text-background-secundair" size={20}/>
                  </div>
                  <div className="w-8 h-8 flex justify-center items-center border-2 border-accent bg-white rounded-full transform -translate-x-2">
                     <IoLogoReact className="text-background-secundair" size={20}/>
                  </div>
                  <div className="w-8 h-8 flex justify-center items-center border-2 border-accent bg-white rounded-full transform -translate-x-4">
                     <IoLogoFirebase className="text-background-secundair" size={20}/>
                  </div>
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
