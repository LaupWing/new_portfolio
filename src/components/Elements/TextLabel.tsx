import { useAppSelector } from "src/app/hooks"

const TextLabel = () => {
   const {darkMode} = useAppSelector(state => state.theme)

   return (
      <p className={
         "text-sm bg-indigo-500 text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest " + 
         (darkMode ? "" : "border-2 border-black")
      }>
         tutorial
      </p>
   )
}
export default TextLabel
