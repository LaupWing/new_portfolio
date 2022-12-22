import React from "react"
import { motion } from "framer-motion"
import { BiSearch } from "react-icons/bi"
import { useAppSelector } from "src/app/hooks"

interface Props {
   setShowSearch: React.Dispatch<React.SetStateAction<boolean>>
   show_search: boolean
}

const SearchIcon:React.FC<Props> = ({ setShowSearch, show_search }) => {
   const { darkMode } = useAppSelector(state => state.theme)

   return (
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
            className={"cursor-pointer duration-200 shrink-0 " + 
               (darkMode ? 
                  "hover:text-pink-500" : 
                  "text-black hover:text-yellow-400"
               )
            }
         />
      </motion.div>
   )
}

export default SearchIcon