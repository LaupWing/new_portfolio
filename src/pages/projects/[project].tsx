import { GetStaticProps } from "next"
import { client } from "src/sanity"

const ProjectDetail = () => {
   return <div>ProjectDetail</div>
}
export default ProjectDetail

export const getStaticProps: GetStaticProps = async (context) => {
   const projectSlug = context.params?.product
   const projectQuery = "*[_type == 'project' && slug.current == $projectSlug]"
   const projectDetail = await client.fetch(projectQuery, {
      projectSlug
   })
   console.log(ProjectDetail)

   return {
      props: {}
   }
}