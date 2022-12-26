import { AnimateSharedLayout } from "framer-motion"
import React, { useState } from "react"
import { Project, Skills } from "typings"
import Expanded from "./Expanded"
import Normal from "./Normal"

interface Props {
   project: Project,
   active_skills: string[]
}

const ProjectCard:React.FC<Props> = ({
   project,
   active_skills
}) => {
   const [expanded, setExpanded] = useState(false)
   
   return (
      expanded ? (
         <Expanded
            project={project}
            active_skills={active_skills}
            setExpanded={setExpanded}
         />
      ) :(
         <Normal
            project={project}
            active_skills={active_skills}
            setExpanded={setExpanded}
         />
      )
         
   )
}

export default ProjectCard
