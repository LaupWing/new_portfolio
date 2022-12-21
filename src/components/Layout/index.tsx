import { FC } from "react"
import { GoBrowser } from "react-icons/go"
import { useAppSelector } from "src/app/hooks"
import Toggle from "./Toggle"

interface Props {
   children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
   const {darkMode} = useAppSelector(state => state.theme)

   return (
      <div className={
         `w-screen min-h-screen duration-200 fixed inset-0 overflow-y-auto flex flex-col ${darkMode ? "bg-background-primary" : "bg-white"}`}
      >
         <header className="py-3 border-b-2 mx-4 border-background-secundair flex items-center justify-between relative">
            <h1 className={
               "font-serif text-2xl " +
               (darkMode ? "text-white" : "text-black")
            }>
               My Portfolio
            </h1>
            <div className="left-1/2 text-background-secundair -translate-x-1/2 translate-y-1/2 transform  absolute bottom-0 w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]">
               <GoBrowser size={30}/>
            </div>
            <div className="flex items-center space-x-2 text-white">
               <Toggle/>
            </div>
         </header>
         {children}
      </div>
   )
}

export default Layout
