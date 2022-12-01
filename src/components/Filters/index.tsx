import React from "react"

const Filters = () => {
   return (
      <nav className="px-5 py-7 mx-auto max-w-7xl text-accent flex items-center space-x-4">
         <BiSearch size={30}/>
         <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center gradient-animation text-white border border-accent">
            <IoLogoFirebase size={22}/>
         </div>
         <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center gradient-animation text-white border border-accent">
            <IoLogoReact size={22}/>
         </div>
         <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center gradient-animation text-white border border-accent">
            <IoLogoVue size={22}/>
         </div>
         <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center gradient-animation text-white border border-accent">
            <SiSolidity size={22}/>
         </div>
         <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center gradient-animation text-white border border-accent">
            <SiNextdotjs size={22}/>
         </div>
         <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center gradient-animation text-white border border-accent">
            <SiTypescript size={22}/>
         </div>
      </nav>
   )
}

export default Filters
