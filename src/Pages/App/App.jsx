import styles from "./App.module.css"
import Particles from "react-tsparticles"
import particlesConfig from "../../config/particles.config"

function App() {

  return (
    <>
    {/* <Particles param = {particlesConfig} className = {styles.}> */}
      <div className = {styles.landing}>
        <div className = {styles.introductionText}>
        <div>
          Hello, My name is <span className={styles.highlight}>Teo Jia Sheng.</span>
        </div>
        <div>
          Full stack web developer.
        </div>

        </div>
        <button className={styles.viewWorkButton}>View my work</button>
      </div>
      {/* </Particles> */}
    </>
  )
}

export default App
