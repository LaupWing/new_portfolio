import React from "react"
import { motion } from "framer-motion"
import { AiFillEye, AiFillGithub } from "react-icons/ai"

const Overlay = () => {
   return (
      <div className="absolute inset-0 z-50 hidden group-hover:flex justify-center items-center flex-col space-y-10">
         <AiFillEye className="text-orange-400 cursor-pointer"/>
         <AiFillGithub className="text-orange-400"/>
      </div>
   )
}

export default Overlay
