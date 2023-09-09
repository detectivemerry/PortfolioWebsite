import styles from "./App.module.css"
// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"
// import { useCallback } from "react"
import particlesConfig from "../../config/particles.config"
import { motion } from "framer-motion";

function App() {



  const handleClickScroll = (elementId) => {
    const element = document.getElementById(elementId); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } 
  } 
  return (
    <>
    {/* <Particles param = {particlesConfig}/>  */}
      <div className = {styles.landing}>
        <div className={styles.content}> 
          <motion.div 
            className = {styles.introductionText}
            animate = {{scale: 1, opacity: 1, transition: { duration: 1, delay: 0.8 }}}
            initial={{scale: 0.2, opacity: 0}}
          >
          <div>
            Hello, My name is <span className={styles.highlight}>Teo Jia Sheng, Caleb.</span>
          </div>
          <div>
            Full stack Software Engineer.
          </div>

          </motion.div >

          <motion.button 
            className={styles.viewWorkButton}
            animate = {{opacity: 1, transition: {duration: 1, delay: 1.8}}}
            initial={{opacity: 0}}
            onClick={() => {handleClickScroll('Projects')}}>
            View my work
          </motion.button>
        </div>
        
        <motion.div 
          className = {styles.buttonDiv}
          onClick={() => {handleClickScroll('About')}}
          whileHover = {
            { scale: 1.2,  
              transition: {repeatType: "reverse",repeat: Infinity, repeatDelay: 0.2}
            }
          }
          initial={{opacity: 0}} 
          animate = {{opacity: 1, 
            transition: {duration: 0.5, repeatType: "reverse",repeat: Infinity, repeatDelay: 0.2}}}
          > 
          <i className={styles.down}></i>
        </motion.div>


      </div>
      {/* </Particles> */}
    </>
  )
}

export default App
