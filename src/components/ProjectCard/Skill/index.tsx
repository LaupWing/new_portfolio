import React from "react"
import { Tooltip } from "react-tooltip"
import icons from "src/utils/icons"
import { Skills } from "typings"
import 'react-tooltip/dist/react-tooltip.css'
interface Props {
   name: Skills
   index: number
}

const Skill:React.FC<Props> = ({ name, index }) => {
   const Icon = (icons as any)[name]
   return (
      <>
         <Tooltip 
            anchorId="test" 
            content="{name}" 
            place="top"
         />
         <div 
            className={"w-8 h-8 flex justify-center items-center border-2 border-accent bg-white rounded-full transform " + `-translate-x-${index * 2}`}
            id="test"
         >
            <Icon className="text-background-secundair" size={20}/>
         </div>
      </>
   )
}

export default Skill
