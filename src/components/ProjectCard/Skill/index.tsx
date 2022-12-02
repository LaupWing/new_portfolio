import React from "react"
import icons from "src/utils/icons"
import { Skills } from "typings"

interface Props {
   icon: Skills
}

const Skill:React.FC<Props> = ({ icon }) => {
   const Icon = (icons as any)[icon]
   return (
      <div className="w-8 h-8 flex justify-center items-center border-2 border-accent bg-white rounded-full">
         <Icon className="text-background-secundair" size={20}/>
      </div>
   )
}

export default Skill
