import React from "react"
import { motion } from "framer-motion"
import { AiFillEye, AiFillGithub } from "react-icons/ai"

const Overlay = () => {
   return (
      <motion.div
         whileHover={{
            scale: [1, 2]
         }}
         transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5
         }}
         className="inset-0 absolute"
      >
         <AiFillEye className="text-orange-400"/>
      </motion.div>
   )
}

export default Overlay
