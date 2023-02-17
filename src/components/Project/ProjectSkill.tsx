import { FC } from "react"
import { Skills } from "typings"

interface ProjectSkillProps {
   name: Skills
   index: number
}

const ProjectSkill:FC<ProjectSkillProps> = ({
   name,
   index
}) => {
   return <div>ProjectSkill</div>
}
export default ProjectSkill
