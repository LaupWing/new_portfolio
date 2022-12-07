import React from "react"
import { motion } from "framer-motion"
import { AiFillEye, AiFillGithub } from "react-icons/ai"

const Overlay = () => {
   return (
      <div className="absolute inset-0 z-50 flex justify-center items-center flex-col space-y-10">
         <AiFillEye size={50} className="text-white cursor-pointer hover:text-pink-500"/>
         <AiFillGithub size={50} className="text-white cursor-pointer hover:text-pink-500"/>
      </div>
   )
}

export default Overlay
