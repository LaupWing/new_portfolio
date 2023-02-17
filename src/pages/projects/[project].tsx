import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { client } from "src/sanity"
import { Project } from "typings"

const ProjectDetail:NextPage<{project: Project}> = ({ project }) => {
   console.log(project)
   return (
      <div className="flex flex-col">
         <div className="flex">
            {project.skills.map((s, i) => (
               null
               // <Skill
               //    index={i}
               //    key={i}
               //    name={s}
               // />
            ))}
         </div>
      </div>
   )
}
export default ProjectDetail

export const getStaticProps: GetStaticProps = async (context) => {
   const projectSlug = context.params?.project
   const projectQuery = "*[_type == 'projects' && slug.current == $projectSlug]"
   const projectDetail = await client.fetch(projectQuery, {
      projectSlug
   })

   return {
      props: {
         project: projectDetail[0]
      }
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
   const projectsQuery = `*[_type == "projects"]`
   const projects = await client.fetch(projectsQuery)
   const paths = projects.map((project:Project) => ({
      params: {
         project: project.slug.current
      }
   }))
   
   return {
      paths,
      fallback: false
   }
}