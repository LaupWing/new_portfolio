import {defineField, defineType} from "sanity"

export default defineType({
   name: "projects",
   title: "Projects",
   type: "document",
   fields: [
      defineField({
         name: "name",
         title: "Name",
         type: "string",
         description: "Name of the project",
      }),
      defineField({
         name: "description",
         title: "Description",
         type: "string",
         description: "Description of the project",
      }),
      defineField({
         name: "skills",
         title: "Skills",
         type: "array",
         description: "The skills you needed to build this project",
         of: [
            {
               type: "string",
            },
         ],
         options: {
            list: [
               {
                  title: "Firebase", 
                  value: "firebase"
               },
               {
                  title: "React", 
                  value: "react"
               },
               {
                  title: "Vue", 
                  value: "vue"
               },
               {
                  title: "Solidity", 
                  value: "solidity"
               },
               {
                  title: "Nextjs", 
                  value: "nextjs"
               },
               {
                  title: "Typescript", 
                  value: "typescript"
               },
               {
                  title: "Css", 
                  value: "css"
               },
            ],
         },
      }),
   ],
})
