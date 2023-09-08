import styles from './Projects.module.css'
import Project from '../../Components/Project/Project.jsx'
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'
import { motion } from "framer-motion";

function Projects({projects}) {

  return (
    <motion.div 
      className = {styles.projects}
      id = "Projects"
      >
      <SectionHeader title="Projects" />
        {projects && projects.map((project, idx)=>{
            return <Project key = {idx} project = {project} />
          })}
    </motion.div>
  )
}

export default Projects
