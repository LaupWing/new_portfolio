import React, { FC } from "react"

interface Props {
   children?: React.ReactNode
}

const Layout:FC<Props> = ({children}) => {
   return (
      <div className="w-screen h-screen bg-background-primary">
         {children}
      </div>
   )
}

export default Layout
