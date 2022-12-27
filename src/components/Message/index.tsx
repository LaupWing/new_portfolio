import React from 'react'
import { IoIosClose } from "react-icons/io"
import { useAppSelector } from "src/app/hooks"

const Message = () => {
   const {darkMode} = useAppSelector(state => state.theme)

   return (
      <div className={`lg:p-5 z-50 mb-2 lg:text-base sm:mx-auto mx-4 p-2 text-sm rounded-lg max-w-xl flex flex-col mt-10 ${
         darkMode ? 
            "border border-accent shadow shadow-accent text-accent" :
            "border-2 bg-yellow-300 border-black shadow-[5px_5px_0px_2px_rgba(0,0,0,1)]"
      }`}>
         <IoIosClose className="ml-auto cursor-pointer hover:text-pink-500 duration-200" size={30}/>
         <p className="mb-0.5">Dear stranger,</p>
         <p>Welcome to my portfolio website. Feel free to look around. You can use the filter buttons below this message to... well to filter out projects. In the top right corner you can toggle between a diffrent style.</p>
         <button 
            className={`border duration-200 border-accent  ml-auto mt-2 rounded px-2 uppercase text-sm font-bold py-1 hover:bg-pink-500 hover:text-white ${
               darkMode ?
                  "" :
                  "bg-white hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[2px_2px_0px_2px_rgba(0,0,0,1)]"
            }`}
         >
            Dont show
         </button>
      </div>
   )
}

export default Message