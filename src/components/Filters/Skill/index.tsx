import React, { FC, lazy } from "react"
import icons from "./icons"

interface Props {
   icon: string,
   active: boolean
}

const Skill:FC<Props> = ({ icon, active }) => {
   const Icon = (icons as any)[icon]

   return (
      <div className={"h-10 w-10 rounded-full flex items-center justify-center text-white border border-accent " + (active ? "gradient-animation" : "opacity-30")}>
         <Icon size={22}/>
      </div>
   )
}

export default Skill
