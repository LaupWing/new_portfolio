import { ElementType, FC } from "react"
import { useAppSelector } from "src/app/hooks"

interface TextLabelProps {
   as?: ElementType
   className?: string
   text: string
}

const TextLabel:FC<TextLabelProps> = ({
   as: Component = "span",
   text,
   className
}) => {
   const {darkMode} = useAppSelector(state => state.theme)

   return (
      <Component className={
         "text-sm text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest " + 
         (darkMode ? "" : "border-2 border-black")
      }>
         {text}
      </Component>
   )
}
export default TextLabel
