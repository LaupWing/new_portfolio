import { motion } from "framer-motion"

const Search = () => {
   return (
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
         className="border-2 w-full max-w-sm flex overflow-hidden border-black rounded-md shadow-[2px_2px_0px_1px_rgba(0,0,0,1)]"
      >
         <input type="text" className="flex-1 py-1 px-2" />
      </motion.div>
   )
}

export default Search