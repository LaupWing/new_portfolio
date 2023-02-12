import { useAppSelector } from "src/app/hooks"

const ProjectLabel = () => {
   const {darkMode} = useAppSelector(state => state.theme)
   
   return (
      <p 
         className={
         "text-sm text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest " + 
            (darkMode 
               ? "" 
               : "border-2 border-black"
            )}
      >
         ProjectLabel
      </p>
   )
}
export default ProjectLabel
