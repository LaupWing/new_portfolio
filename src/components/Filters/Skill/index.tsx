import React, { FC } from "react"
import { useAppSelector } from "src/app/hooks"
import icons from "src/utils/icons"

interface Props {
   name: string,
   active: boolean,
   onClick: () => void
}

const Skill:FC<Props> = ({ name, active, onClick }) => {
   const Icon = (icons as any)[name]
   const {darkMode} = useAppSelector(state => state.theme)
   
   return (
      <div className="relative">
         <button 
            className={"h-10 w-10 rounded-full shrink-0 cursor-pointer duration-200 flex items-center justify-center text-white " + 
               (active ? "gradient-animation " : "opacity-30 ") + 
               (darkMode ? 
                  "border border-accent" : 
                  "border-2 border-black shadow-[2px_2px_0px_1px_rgba(0,0,0,1)]")
            }
            onClick={onClick}
            id="test"
         >
            <Icon size={22}/>
         </button>
      </div>
   )
}

export default Skill
