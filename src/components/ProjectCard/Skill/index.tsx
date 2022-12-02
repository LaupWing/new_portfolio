import React from "react"
import icons from "src/utils/icons"
import { Skills } from "typings"

interface Props {
   name: Skills
   index: number
}

const Skill:React.FC<Props> = ({ name, index }) => {
   const Icon = (icons as any)[name]
   return (
      <div className={"w-8 h-8 flex justify-center items-center border-2 border-accent bg-white rounded-full transform " + `-translate-x-${index * 2}`}>
         <Icon className="text-background-secundair" size={20}/>
      </div>
   )
}

export default Skill
