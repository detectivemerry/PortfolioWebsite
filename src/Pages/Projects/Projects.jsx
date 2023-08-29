import './Projects.css'
import Project from '../../Components/Project/Project.jsx'
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'

function Projects({projects}) {

  return (
    <>
    <SectionHeader title="Projects" />
      {projects && projects.map((project, idx)=>{
        return <Project key = {idx} project = {project}/>
      })}
    </>
  )
}

export default Projects
