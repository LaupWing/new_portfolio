import {defineField, defineType} from "sanity"

export default defineType({
   name: "projects",
   title: "Projects",
   type: "document",
   fields:[
      defineField({
         name: "name",
         title: "Name",
         type: "string",
         description: "Name of the project you are currently working on"
      })
   ]
})
