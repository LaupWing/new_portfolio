import React from "react"

const ProjectCard = () => {
   return (
      <div className="bg-background-secundair p-4 border-accent border text-accent rounded-2xl">
         <div 
            className="relative"
            style={{
               paddingBottom: "110%"
            }}
         >
            <div className="absolute inset-0 flex flex-col justify-between">
               <h1 className="font-serif text-xl tracking-wider">
                  ProjectCard
               </h1>
               <p className="text-xs mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sit doloribus ab ipsa maiores ad dolorum.</p>
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
