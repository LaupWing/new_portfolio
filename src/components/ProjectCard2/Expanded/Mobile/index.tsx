import React from "react"

const Mobile = ({image}: any) => {
   return (
      <div className="md:hidden flex flex-col">
         <img
            src={image}
            className="aspect-video w-full object-cover rounded mt-4"
            alt="Project image"
         />
         <h1 className="font-serif text-5xl tracking-wider">ProjectCard</h1>
         <p className="text-lg mt-1 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sit
            doloribus ab ipsa maiores ad dolorum.
         </p>
      </div>
   )
}

export default Mobile
