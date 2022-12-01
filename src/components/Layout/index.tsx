import React, { FC } from "react"
import { GoBrowser } from "react-icons/go"
import { RiUser3Line } from "react-icons/ri"

interface Props {
   children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
   return (
      <div className="w-screen min-h-screen fixed inset-0 overflow-y-auto flex flex-col bg-background-primary">
         <header className="py-3 border-b-2 mx-4 border-background-secundair flex items-center justify-between relative">
            <h1 className="text-white font-serif text-2xl">My Portfolio</h1>
            <div className="left-1/2 text-background-secundair -translate-x-1/2 translate-y-1/2 transform  absolute bottom-0 w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]">
               <GoBrowser size={30}/>
            </div>
            <div className="flex items-center space-x-2 text-white">
               <RiUser3Line size={30}/>
               <p className="font-serif text-xl">Sign in</p>
            </div>
         </header>
         {children}
      </div>
   )
}

export default Layout
