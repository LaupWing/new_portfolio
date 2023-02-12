import React from "react"
import { motion } from "framer-motion"
import { IoCloseSharp } from "react-icons/io5"
import { useAppSelector } from "src/app/hooks"

interface Props {
   setShowSearch: React.Dispatch<React.SetStateAction<boolean>>
   show_search: boolean
}

export const IconClose:React.FC<Props> = ({ setShowSearch, show_search }) => {
   const { darkMode } = useAppSelector(state => state.theme)

   return (
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
         <IoCloseSharp
            onClick={() => setShowSearch(!show_search)}
            size={35}
            className={"cursor-pointer hover:text-red-400 duration-200 shrink-0 " + (darkMode ? "" : "text-black")}
         />
      </motion.div>
   )
}