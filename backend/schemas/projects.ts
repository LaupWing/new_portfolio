import {defineField, defineType} from "sanity"
import { CgBrowser as icon } from "react-icons/cg"

export default defineType({
   name: "projects",
   title: "Projects",
   type: "document",
   icon,
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
         name: "slug",
         title: "slug",
         type: "slug",
         options: {
            source: "name",
            maxLength: 200
         }
      }),
      defineField({
         name: "date",
         title: "Date",
         type: "date",
         description: "Date of creation project",
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
                  title: "Wordpress", 
                  value: "wordpress"
               },
               {
                  title: "Gatsby", 
                  value: "gatsby"
               },
               {
                  title: "Tailwind", 
                  value: "tailwind"
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
