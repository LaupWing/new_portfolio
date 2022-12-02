import React from "react"
import { motion } from "framer-motion"
import { AiFillEye, AiFillGithub } from "react-icons/ai"

const Overlay = () => {
   return (
      <motion.div
         whileHover={{
            opacity: [0, 1]
         }}
         transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
            delayChildren: 0.5
         }}
         className="inset-0 absolute opacity-0 z-50 bg-white"
      >
         <AiFillEye className="text-orange-400"/>
         <motion.div
               whileInView={{
                  scale: 2,
               }}
               transition={{
                  duration: 2,
               }}
               className="app__flex"
            >
               <AiFillEye />
            </motion.div>
      </motion.div>
   )
}

export default Overlay
