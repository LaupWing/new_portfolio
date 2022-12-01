import React, { FC, lazy } from "react"
import icons from "./icons"

interface Props {
   icon: string,
   active: boolean
}

const Skill:FC<Props> = ({ icon }) => {
   const Icon = (icons as any)[icon]

   return (
      <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center gradient-animation text-white border border-accent">
         <Icon size={22}/>
      </div>
   )
}

export default Skill
