import Head from "next/head"
import { SkillType } from "typings"
import { useEffect, useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { GetServerSideProps } from "next"
import { client } from "src/sanity"
import useSound from "use-sound"
import { useAppDispatch } from "src/app/hooks"
import { setDarkmode } from "src/slices/themeSlice"
import { Filters, Message } from "src/components/Sections"
import { ProjectCard } from "src/components/Cards"

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


export default function Home({projects}:any) {
   const [filters, setFilters] = useState<SkillType[]>([
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
      {
         active: true,
         name: "wordpress"
      },
      {
         active: true,
         name: "gatsby"
      },
   ])
   const [showSelf, setShowSelf] = useState(true) 
   const [search, setSearch] = useState("") 
   const [showTutorial, setShowTutorial] = useState(true)
   const [play] = useSound("/assets/sounds/bomb.mp3", {
      volume: 0.05
   })
   const dispatch = useAppDispatch()
   
   const toggleAll = () =>{
      const extra_filters = 2
      const total = filters.length + extra_filters
      const total_active = filters.filter(x=>x.active).length +
         (showSelf ? 1 : 0) + 
         (showTutorial ? 1 : 0)  

      const setAll = (state:boolean) => {
         setFilters(filters.map(x => ({...x, active: state})))
         setShowTutorial(state)
         setShowSelf(state)
      } 

      if(total_active === (total / 2)){
         const random = Math.random() > 0.5
         setAll(random)
      }
      else if(total_active > (total / 2)){
         setAll(false)
      }else{
         setAll(true)
      }
      play()
   } 

   useEffect(() => {
      if(window.localStorage.getItem("darkMode")){
         dispatch(setDarkmode(JSON.parse(localStorage.getItem("darkMode")!)))
      }
   }, [])

   const activeSkills = filters
      .filter(f => f.active)
      .map(f => f.name)

   const projectsFiltered = projects
      .filter((project:any) => project.name.toLowerCase().includes(search.toLowerCase()))
      .filter((project:any) => project.skills.find((skill:any) => activeSkills.includes(skill)))
      .filter((project:any) => {
         if(showSelf && showTutorial){
            return project
         }else if (showSelf && !showTutorial){
            return !project.tutorial
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
         <Message />
         <Filters
            skills={filters}
            showSelf={showSelf}
            showTutorial={showTutorial}
            setSearch={setSearch}
            toggleAll={toggleAll}
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
               {projectsFiltered.map((d:any)=>(
                  <ProjectCard
                     project={d}
                     key={d._id}
                  />
               ))}
            </AnimatePresence>
         </motion.main>
      </div>
   )
}


export const getServerSideProps:GetServerSideProps = async () =>{
   const projects_query = "*[_type == 'projects']"
   const projects = await client.fetch(projects_query)

   return {
      props: {
         projects
      }
   }
} 