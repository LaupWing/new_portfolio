import React from "react"
import { motion } from "framer-motion"
import { AiFillEye, AiFillGithub } from "react-icons/ai"

const Overlay = () => {
   return (
      <motion.div 
         className="absolute inset-0 z-50 flex justify-center items-center flex-col space-y-10"
         initial={{
            scale: 1.5,
            opacity: 0
         }}
         animate={{
            scale: 1,
            opacity: 1
         }}
         transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120
         }}
      >
         <motion.div
            whileHover={{
               scale: [1, 0.85],
            }}
            transition={{
               duration: 0.25,
            }}
         >
            <AiFillEye size={50} className="text-white cursor-pointer hover:text-pink-500"/>
         </motion.div>
         <motion.div
            whileHover={{
               scale: [1, 0.85],
            }}
            transition={{
               duration: 0.25,
            }}
         >
            <AiFillGithub size={50} className="text-white cursor-pointer hover:text-pink-500"/>
         </motion.div>
      </motion.div>
   )
}

export default Overlay
