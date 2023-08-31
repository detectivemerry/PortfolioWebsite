import styles from './Projects.module.css'
import Project from '../../Components/Project/Project.jsx'
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'

function Projects({projects}) {

  return (
    <div className = {styles.projects}>
      <SectionHeader title="Projects" />
        {projects && projects.map((project, idx)=>{
          return <Project key = {idx} project = {project}/>
        })}
    </div>
  )
}

export default Projects
