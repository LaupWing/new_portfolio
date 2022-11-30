import Head from "next/head"
import { IoIosClose } from "react-icons/io"
import { BiSearch } from "react-icons/bi"
import ProjectCard from "../components/ProjectCard"
import { IoLogoFirebase, IoLogoReact, IoLogoVue } from "react-icons/io5"

export default function Home() {
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
      <div>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="p-5 rounded-lg max-w-xl border border-accent shadow shadow-accent text-accent mx-auto flex flex-col mt-10">
            <IoIosClose className="ml-auto" size={30}/>
            <p className="mb-0.5">Dear stranger,</p>
            <p>Welcome to my portfolio website. Feel free to look around. You can use the filter buttons below this message to... well to filter out projects.</p>
         </div>
         <nav className="px-5 mx-auto max-w-7xl text-accent my-2 flex items-center space-x-4">
            <BiSearch size={30}/>
            <IoLogoFirebase size={22}/>
            <IoLogoReact size={22}/>
            <IoLogoVue size={22}/>
         </nav>
         <main className="grid grid-cols-4 mb-4 gap-5 p-5 mx-auto max-w-7xl">
            {data.map(d=>(
               <ProjectCard/>
            ))}
         </main>
      </div>
   )
}
