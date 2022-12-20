import Head from "next/head"
import { IoIosClose } from "react-icons/io"
import ProjectCard from "../components/ProjectCard"
import Filters from "../components/Filters"
import { Project, Skill } from "typings"
import { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import "react-toastify/dist/ReactToastify.css"

const mainContainerVariants: Variants = {
   hidden: {
      opacity: 0,
      transition: {
         staggerChildren: 0.1,
         when: "beforeChildren"
      }
   },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         when: "beforeChildren"
      }
   }
 }
export default function Home() {
   const [filters, setFilters] = useState<Skill[]>([
      {
         active: true,
         name: "firebase"
      },
      {
         active: true,
         name: "nextjs"
      },
      {
         active: true,
         name: "react"
      },
      {
         active: true,
         name: "solidity"
      },
      {
         active: true,
         name: "css"
      },
      {
         active: true,
         name: "typescript"
      },
      {
         active: true,
         name: "vue"
      },
   ])
   const [showSelf, setShowSelf] = useState(true) 
   const [showTutorial, setShowTutorial] = useState(true) 


   const data = [
      {
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim nam iure tempore similique.",
         name: "projectcard",
         image: "https://miro.medium.com/max/1400/1*5FF-WiNYehgcBgtgAka1Og.png",
         skills: ["css", "firebase", "react"],
         tutorial: false
      },
      {
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim nam iure tempore similique.",
         name: "projectcard",
         image: "https://editors.dexerto.com/wp-content/uploads/2022/12/01/UI-Ran-Out-of-Room-Error-Apex-Legends.jpg",
         skills: ["css"],
         tutorial: true
      },
      {
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim nam iure tempore similique.",
         name: "projectcard",
         image: "https://miro.medium.com/max/1400/1*5FF-WiNYehgcBgtgAka1Og.png",
         skills: ["css"],
         tutorial: false
      },
      {
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim nam iure tempore similique.",
         name: "projectcard",
         image: "https://miro.medium.com/max/1400/1*5FF-WiNYehgcBgtgAka1Og.png",
         skills: ["css"],
         tutorial: false
      },
      {
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim nam iure tempore similique.",
         name: "projectcard",
         image: "https://miro.medium.com/max/1400/1*5FF-WiNYehgcBgtgAka1Og.png",
         skills: ["css"],
         tutorial: true
      },
      {
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim nam iure tempore similique.",
         name: "projectcard",
         image: "https://miro.medium.com/max/1400/1*5FF-WiNYehgcBgtgAka1Og.png",
         skills: ["css"],
         tutorial: false
      },
      {
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim nam iure tempore similique.",
         name: "projectcard",
         image: "https://miro.medium.com/max/1400/1*5FF-WiNYehgcBgtgAka1Og.png",
         skills: ["css"],
         tutorial: false
      },
   ] as Project[]
   

   const active_skills = filters
      .filter(f => f.active)
      .map(f => f.name)

   const projects_filtered = data
      .filter(project => project.skills.find(skill => active_skills.includes(skill)))
      .filter(project => {
         if(showSelf && showTutorial){
            return project
         }else if (showSelf && !showTutorial){
            return project.tutorial === false
         }else if (!showSelf && showTutorial){
            return project.tutorial === true
         }
      })

   return (
      <div className="flex flex-col flex-1 items-start">
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="lg:p-5 lg:text-base sm:mx-auto mx-2 p-2 text-sm rounded-lg max-w-xl border border-accent shadow shadow-accent text-accent flex flex-col mt-10">
            <IoIosClose className="ml-auto cursor-pointer hover:text-pink-500 duration-200" size={30}/>
            <p className="mb-0.5">Dear stranger,</p>
            <p>Welcome to my portfolio website. Feel free to look around. You can use the filter buttons below this message to... well to filter out projects.</p>
            <button className="border duration-200 border-accent  ml-auto mt-2 rounded px-2 uppercase text-sm font-bold py-1 hover:bg-pink-500 hover:text-white">Dont show</button>
         </div>
         <Filters
            skills={filters}
            showSelf={showSelf}
            showTutorial={showTutorial}
            setShowSelf={setShowSelf}
            setShowTutorial={setShowTutorial}
            toggle={(skill: string)=>{
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
         <motion.main 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full mb-10 gap-6 px-5 mx-auto max-w-7xl"
            variants={mainContainerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
         >  
            <AnimatePresence>

               {projects_filtered.map((d, i)=>(
                  <ProjectCard
                     skills={d.skills}
                     tutorial={d.tutorial}
                     image={d.image}
                     key={i}
                     active_skills={active_skills}
                  />
               ))}
            </AnimatePresence>
         </motion.main>
      </div>
   )
}
