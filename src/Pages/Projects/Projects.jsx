import styles from './Projects.module.css'
import Project from '../../Components/Project/Project.jsx'
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'
import { motion } from "framer-motion";

function Projects({projects}) {

  return (
    <motion.div 
      className = {styles.projects}
      >
      <SectionHeader title="Projects" />
        {projects && projects.map((project, idx)=>{
          return <Project key = {idx} project = {project} />
        //   <motion.Project
        //   ref={ref}
        //   animate={{ scale: 2 }}
        //   initial="hidden"
        //   variants={squareVariants}
        //   className="square"
        // ></motion.Project>
        })}
    </motion.div>
  )
}

export default Projects
