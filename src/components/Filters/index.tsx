import { FC, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { useAppSelector } from "src/app/hooks"
import { Skill } from "typings"
import Skills from "./Skills"
import SearchBar from "./SearchBar"
import SearchIcon from "./SearchIcon"
import CloseIcon from "./CloseIcon"

interface Props {
   skills:Skill[]
   toggle: (skill: string) => void
   showSelf: boolean
   setShowSelf: React.Dispatch<React.SetStateAction<boolean>>
   toggleAll: Function
   showTutorial: boolean
   setShowTutorial: React.Dispatch<React.SetStateAction<boolean>>
}

const Filters:FC<Props> = ({ 
   skills, 
   toggle, 
   showSelf, 
   setShowSelf, 
   showTutorial,
   setShowTutorial,
   toggleAll
}) => {
   const {darkMode} = useAppSelector(state => state.theme)
   const [show_search, setShowSearch] = useState(false)

   return (
      <nav className={"px-5 m-2 h-20 max-w-7xl w-full mx-auto text-accent flex items-center space-x-4 justify-start shrink-0 overflow-x-auto duration-200 sticky overflow-hidden top-0 z-40 " + (
         darkMode ? 
            "bg-background-primary" :
            "bg-white"
      )}>
         <AnimatePresence mode="wait">
            {!show_search ?
               (
                  <SearchIcon
                     setShowSearch={setShowSearch}
                     show_search={show_search}
                  />
               ) : (
                  <CloseIcon
                     setShowSearch={setShowSearch}
                     show_search={show_search}
                  />
               )
            }
         </AnimatePresence>
         <AnimatePresence mode="wait">
            {!show_search ? 
               (
                  <Skills
                     setShowSelf={setShowSelf}
                     setShowTutorial={setShowTutorial}
                     showSelf={showSelf}
                     showTutorial={showTutorial}
                     skills={skills}
                     toggleAll={toggleAll}
                     toggle={toggle}
                  />
               ) :
               (
                  <SearchBar/>
               )
            }
         </AnimatePresence>
      </nav>
   )
}

export default Filters
