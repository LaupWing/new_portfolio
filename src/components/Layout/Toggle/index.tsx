import { Switch } from "@headlessui/react"
import { useState } from "react"

const Toggle = () => {
   const [enabled, setEnabled] = useState(false)

   return (
      <Switch
         checked={enabled}
         onChange={setEnabled}
         className={`${
            enabled ? "bg-indigo-600" : "bg-background-secundair"
         } relative inline-flex h-6 w-11 items-center rounded-full border border-accent`}
      >
         <span className="sr-only">Enable notifications</span>
         <span
            className={`${
               enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
         />
      </Switch>
   )
}

export default Toggle