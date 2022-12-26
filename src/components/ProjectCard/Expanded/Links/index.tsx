import Link from "next/link"
import React from "react"
import { GoEye } from "react-icons/go"
import { SiGithub } from "react-icons/si"

interface Props {
   github: string
   url: string
   className?: string
}

const Links:React.FC<Props> = ({
   github,
   url,
   className
}) => {
   return (
      <div className={"flex space-x-4 " + className}>
         <Link 
            href={github} 
            rel="noopener noreferrer" 
            target="_blank"
         >
            <SiGithub className="cursor-pointer hover:text-pink-500" size={30}/>
         </Link>
         <Link
            href={url} 
            rel="noopener noreferrer" 
            target="_blank"
         >
            <GoEye className="cursor-pointer hover:text-pink-500" size={30}/>
         </Link>
      </div>
   )
}

export default Links