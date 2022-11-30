import React, { FC } from "react"
import { GoBrowser } from "react-icons/go"

interface Props {
   children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
   return (
      <div className="w-screen h-screen bg-background-primary">
         <header className="py-3 border-b-2 mx-4 border-background-secundair flex items-center justify-between relative">
            <h1 className="text-white font-serif text-2xl">My Portfolio</h1>
            <div className="left-1/2 text-background-secundair -translate-x-1/2 translate-y-1/2 transform  absolute bottom-0 w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]">
               <GoBrowser size={30}/>
            </div>
         </header>
         {children}
      </div>
   )
}

export default Layout
