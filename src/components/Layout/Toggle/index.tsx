import { Switch } from "@headlessui/react"
import { useAppDispatch, useAppSelector } from "src/app/hooks"
import { setDarkmode } from "src/slices/themeSlice"

const Toggle = () => {
   const { darkMode } = useAppSelector(state => state.theme)
   const dispatch = useAppDispatch()

   return (
      <Switch
         checked={darkMode}
         onChange={()=> dispatch(setDarkmode(!darkMode))}
         className={`${
            darkMode ? "bg-indigo-600" : "bg-background-secundair"
         } relative inline-flex h-6 w-11 items-center rounded-full border border-accent`}
      >
         <span className="sr-only">Enable notifications</span>
         <span
            className={`${
               darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
         />
      </Switch>
   )
}

export default Toggle
