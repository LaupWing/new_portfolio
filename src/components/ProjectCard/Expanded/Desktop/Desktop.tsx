import React from "react"
import { Project } from "typings"
import Images from "../Images"
import Links from "../Links"

interface Props {
   project: Project
}

const Desktop:React.FC<Props> = ({project}) => {
   console.log(project)
   return (
      <div className="hidden md:flex">
         <Images
            images={project.images}
         />
         <div className="flex flex-col px-4 mt-2">
            <Links
               github={project.github}
               url={project.url}
            />
            {project.credentials && 
               <div className="flex flex-col  my-4">
                  <p className="text-slate-600 font-bold uppercase font-serif tracking-widest mb-2">⚠️⚠️ In this app you need to login!! 👇</p>
                  <table className="table-auto bg-slate-100 border-2 shadow border-slate-300 rounded mr-auto">
                     <thead className="bg-slate-300 text-slate-400">
                        <tr className="divide-x-2">
                           <th className="px-4 py-2">Username</th>
                           <th className="px-4 py-2">Password</th>
                        </tr>
                     </thead>
                     <tbody className="text-slate-700">
                        <tr className="divide-x-2">
                           <th className="px-4 py-2">{project.username}</th>
                           <th className="px-4 py-2">{project.password}</th>
                        </tr>
                     </tbody>
                  </table>
               </div>
            }
            <h1 className="font-serif text-5xl tracking-wider">{project.name}</h1>
            <p className="text-lg mt-1">
               {project.description}
            </p>
         </div>
      </div>
   )
}

export default Desktop
