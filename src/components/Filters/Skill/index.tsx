import React, { FC } from "react"
import icons from "src/utils/icons"

interface Props {
   icon: string,
   active: boolean,
   onClick: () => void
}

const Skill:FC<Props> = ({ icon, active, onClick }) => {
   const Icon = (icons as any)[icon]

   return (
      <div 
         className={"h-10 w-10 rounded-full cursor-pointer duration-200 flex items-center justify-center text-white border border-accent " + (active ? "gradient-animation" : "opacity-30")}
         onClick={onClick}
      >
         <Icon size={22}/>
      </div>
   )
}

export default Skill
