import { FC } from "react"
import { useAppSelector } from "src/app/hooks"
import { Skills } from "typings"
import icons from "src/utils/skills"

interface ProjectSkillProps {
   name: Skills
   index: number
}

const ProjectSkill:FC<ProjectSkillProps> = ({
   name,
   index
}) => {
   const Icon = (icons as any)[name]
   const {darkMode} = useAppSelector(state => state.theme)

   return (
      <div 
         className={"w-12 h-12 flex justify-center items-center border-2 bg-white rounded-full transform " + 
            `-translate-x-${index * 2} ` +
            (darkMode ? "border-accent" : "border-black")
         }
         id="test"
      >
         <Icon className="text-background-secundair" size={28}/>
      </div>
   )
}
export default ProjectSkill
