import React, { FC } from "react"
import icons from "src/utils/icons"

interface Props {
   name: string,
   active: boolean,
   onClick: () => void
}

const Skill:FC<Props> = ({ name, active, onClick }) => {
   const Icon = (icons as any)[name]
   
   return (
      <div className="relative">
         <button 
            className={"h-10 w-10 rounded-full shrink-0 cursor-pointer duration-200 flex items-center justify-center text-white border border-accent " + (active ? "gradient-animation" : "opacity-30")}
            onClick={onClick}
            id="test"
         >
            <Icon size={22}/>
         </button>
      </div>
   )
}

export default Skill
