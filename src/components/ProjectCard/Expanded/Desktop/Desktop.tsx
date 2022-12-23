import React from "react"

const Desktop = ({image}: any) => {
   return (
      <div className="hidden md:flex">
         <img
            src={image}
            className="object-cover w-1/2 rounded mt-4"
            alt="Project image"
         />
         <div className="flex flex-col px-4 mt-2">
            <h1 className="font-serif text-5xl tracking-wider">ProjectCard</h1>
            <p className="text-lg mt-1 line-clamp-3">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sit
               doloribus ab ipsa maiores ad dolorum.
            </p>
         </div>
      </div>
   )
}

export default Desktop
