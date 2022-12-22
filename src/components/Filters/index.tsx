import { FC, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { BiSearch } from "react-icons/bi"
import { useAppSelector } from "src/app/hooks"
import { Skill } from "typings"
import Skills from "./Skills"
import Search from "./Search"
import { motion } from "framer-motion"

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
      <nav className={"px-5 h-20 max-w-7xl w-full mx-auto text-accent flex items-center space-x-4 justify-start shrink-0 overflow-x-auto duration-200 sticky overflow-hidden top-0 z-50 " + (
         darkMode ? 
            "bg-background-primary" :
            "bg-white"
      )}>
         <AnimatePresence mode="wait">
            {show_search ?
               (
                  <motion.div
                     initial={{
                        y: -60
                     }}
                     animate={{
                        y: 0
                     }}
                     exit={{
                        y: -60,
                     }}
                     key={"search-btn"}
                  >
                     <BiSearch
                        onClick={() => setShowSearch(!show_search)}
                        size={35}
                        className={"cursor-pointer hover:text-yellow-400 duration-200 shrink-0 " + (darkMode ? "" : "text-black")}
                     />
                  </motion.div>
               ) : (
                  <motion.div
                     initial={{
                        x: -60
                     }}
                     animate={{
                        x: 0
                     }}
                     exit={{
                        x: -60,
                     }}
                     key={"close-btn"}
                  >
                     <BiSearch
                        onClick={() => setShowSearch(!show_search)}
                        size={35}
                        className={"cursor-pointer hover:text-yellow-400 duration-200 shrink-0 " + (darkMode ? "" : "text-black")}
                     />
                  </motion.div>
               )
            }
         </AnimatePresence>
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
                  <Search/>
               )
            }
         </AnimatePresence>
      </nav>
   )
}

export default Filters
