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
         type: "text",
         description: "Description of the project",
      }),
      defineField({
         name: "images",
         title: "Images",
         type: "array",
         of:[
            {
               type: "image"
            }
         ],
         description: "Project images"
      }),
      defineField({
         name: "github",
         title: "Github",
         type: "url",
         description: "Url of github repository"
      }),
      defineField({
         name: "tutorial",
         title: "Tutorial",
         type: "boolean",
         description: "Is this project made from a tutorial"
      }),
      defineField({
         name: "credentials",
         title: "Credentials",
         type: "boolean",
         description: "Is credentials needed?"
      }),
      defineField({
         name: "username",
         title: "Username",
         type: "string",
         description: "Demonstration account's username",
         hidden: ({document}) => !document?.credentials
      }),
      defineField({
         name: "password",
         title: "Password",
         type: "string",
         description: "Demonstration account's password",
         hidden: ({document}) => !document?.credentials
      }),
      defineField({
         name: "url",
         title: "Url",
         type: "url",
         description: "URL of your website"
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
