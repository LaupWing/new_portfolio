import clsx from "clsx"
import { ElementType, FC, PropsWithChildren } from "react"
import { useAppSelector } from "src/app/hooks"

interface TextLabelProps extends PropsWithChildren {
   as?: ElementType
   className?: string
   text: string
}

export const TextLabel:FC<TextLabelProps> = ({
   as: Component = "span",
   className,
   children
}) => {
   const {darkMode} = useAppSelector(state => state.theme)
   const styles = clsx(
      "text-sm text-white rounded-full w-20 text-center py-0.5 uppercase font-bold font-serif tracking-widest",
      className,
      darkMode && "border-2 border-black"
   )

   return (
      <Component className={styles}>
         { children }
      </Component>
   )
}
