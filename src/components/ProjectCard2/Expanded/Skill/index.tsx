import React from "react"
import { useAppSelector } from "src/app/hooks"
import icons from "src/utils/icons"
import { Skills } from "typings"
interface Props {
   name: Skills
   index: number
}

const Skill:React.FC<Props> = ({ name, index }) => {
   const Icon = (icons as any)[name]
   const {darkMode} = useAppSelector(state => state.theme)
   return (
      <div 
         className={"w-12 h-12 flex justify-center items-center border-2 bg-white rounded-full transform " + 
            `-translate-x-${index * 2} ` +
            (darkMode ? "border-accent" : "border-black")
         }
         id="test"
      >
         <Icon className="text-background-secundair" size={28}/>
      </div>
   )
}

export default Skill
