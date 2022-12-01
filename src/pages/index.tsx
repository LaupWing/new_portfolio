import Head from "next/head"
import { IoIosClose } from "react-icons/io"
import ProjectCard from "../components/ProjectCard"
import Filters from "../components/Filters"
import { Skill } from "typings"
import { useState } from "react"

export enum Icons {
   "firebase" =  "IoLogoFirebase",  
   "react" = "IoLogoReact" , 
   "vue" = "IoLogoVue", 
   "solidity" = "SiSolidity", 
   "nextjs" = "SiNextdotjs",
   "typescript" = "SiTypescript",
   "css" = "IoLogoCss3"
}


export default function Home() {
   const [filters, setFilters] = useState<Skill[]>([
      {
         active: true,
         icon: Icons.firebase,
         name: "firebase"
      },
      {
         active: true,
         icon: Icons.nextjs,
         name: "nextjs"
      },
      {
         active: true,
         icon: Icons.react,
         name: "react"
      },
      {
         active: true,
         icon: Icons.solidity,
         name: "solidity"
      },
      {
         active: true,
         icon: Icons.css,
         name: "css"
      },
      {
         active: true,
         icon: Icons.typescript,
         name: "typescript"
      },
      {
         active: true,
         icon: Icons.vue,
         name: "vue"
      },
   ])

   const data = [
      1,
      2,
      3,
      4,
      5,
      6,
      7
   ]
   return (
      <div className="flex flex-col flex-1 items-start">
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="p-5 rounded-lg max-w-xl border border-accent shadow shadow-accent text-accent mx-auto flex flex-col mt-10">
            <IoIosClose className="ml-auto cursor-pointer hover:text-pink-500 duration-200" size={30}/>
            <p className="mb-0.5">Dear stranger,</p>
            <p>Welcome to my portfolio website. Feel free to look around. You can use the filter buttons below this message to... well to filter out projects.</p>
            <button className="border duration-200 border-accent  ml-auto mt-2 rounded px-2 uppercase text-sm font-bold py-1 hover:bg-pink-500 hover:text-white">Dont show</button>
         </div>
         <Filters
            skills={filters}
            toggle={(skill: string)=>{
               console.log(skill)
               setFilters(prev => prev.map(p => p.name === skill 
                  ? {
                     ...p,
                     active: !p.active
                  }
                  : {
                     ...p
                  }))
            }}
         />
         <main className="grid grid-cols-4 w-full mb-10 gap-6 px-5 mx-auto max-w-7xl">
            {data.map((d, i)=>(
               <ProjectCard
                  key={i}
               />
            ))}
         </main>
      </div>
   )
}
