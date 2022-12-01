import React, { FC, lazy } from "react"

interface Props {
   icon: string,
   active: boolean
}

const Skill:FC<Props> = ({ icon }) => {
   const Icon = lazy(()=> import(`/icons/${icon}`))

   return (
      <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center gradient-animation text-white border border-accent">
         <Icon/>
      </div>
   )
}

export default Skill
