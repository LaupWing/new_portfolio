import clsx from "clsx"
import { FC } from "react"
import { useAppSelector } from "src/app/hooks"

interface ProjectLabelProps {
   label: string
   className?: string
}

const ProjectLabel:FC<ProjectLabelProps> = ({
   label,
   className = ""
}) => {
   const {darkMode} = useAppSelector(state => state.theme)
   const styles = clsx(
      "text-sm text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest",
      className,
      darkMode && "border-2 border-black"
   )

   return (
      <p className={styles}>
         {label}
      </p>
   )
}
export default ProjectLabel
