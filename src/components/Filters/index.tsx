import { FC, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BiSearch } from "react-icons/bi"
import { useAppSelector } from "src/app/hooks"
import { Skill } from "typings"
import Skills from "./Skills"

interface Props {
   skills:Skill[]
   toggle: (skill: string) => void
   showSelf: boolean
   setShowSelf: React.Dispatch<React.SetStateAction<boolean>>
   showTutorial: boolean
   setShowTutorial: React.Dispatch<React.SetStateAction<boolean>>
}

const Filters:FC<Props> = ({ 
   skills, 
   toggle, 
   showSelf, 
   setShowSelf, 
   showTutorial,
   setShowTutorial 
}) => {
   const {darkMode} = useAppSelector(state => state.theme)
   const [show_search, setShowSearch] = useState(false)

   return (
      <nav className={"px-5 h-20 max-w-7xl w-full mx-auto text-accent flex items-center space-x-4 justify-start shrink-0 overflow-x-auto duration-200 sticky top-0 z-50 " + (
         darkMode ? 
            "bg-background-primary" :
            "bg-white"
      )}>
         <BiSearch
            onClick={() => setShowSearch(!show_search)}
            size={35}
            className={"cursor-pointer hover:text-yellow-400 duration-200 shrink-0 " + (darkMode ? "" : "text-black")}
         />
         <AnimatePresence mode="wait">
            {show_search ? 
               (
                  <Skills
                     setShowSelf={setShowSelf}
                     setShowTutorial={setShowTutorial}
                     showSelf={showSelf}
                     showTutorial={showTutorial}
                     skills={skills}
                     toggle={toggle}
                  />
               ) :
               (
                  <motion.div 
                     initial={{
                        y: -100
                     }}
                     animate={{
                        y: 0
                     }}
                     exit={{
                        y: -100,
                     }}
                     key={"search"}
                     className="border-2 flex overflow-hidden border-black rounded-md shadow-[2px_2px_0px_1px_rgba(0,0,0,1)]"
                  >
                     <input type="text" className="flex-1 py-1 px-2" />
                  </motion.div>
               )
            }
         </AnimatePresence>
      </nav>
   )
}

export default Filters
