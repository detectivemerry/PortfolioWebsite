import styles from './About.module.css'
import indexStyle from '../../index.module.css'
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'
import SkillCategory from '../../Components/SkillCategory/SkillCategory.jsx'
import imgUrl from "../../assets/portfolio_dp.png"
import githubLogo from "../../assets/github.png"
import linkedInLogo from "../../assets/linkedin.png"

function About({  aboutDescription, 
                  aboutDevelopmentSkill,
                  aboutDevelopmentSkillDescription, 
                  aboutWorkExperience, 
                  aboutInterest, 
                  iconImgs}) {

  return (
    <div className = {styles.about} id ="About">

      <SectionHeader title="About me" />

      <div className = {styles.portfolioDp}>
        <img src= {imgUrl}/>
      </div>

      <div className = {indexStyle.text}>
        <div className={styles.aboutDescription}></div>
        <p>
        Full stack software engineer and a recent computer science graduate from Nanyang Technological University (NTU). I've developed several full-stack web applications in Javascript (using FERN stack) for school projects. I am currently going through the Odin Project course, brushing up my full-stack development fundamentals as well. 
        </p>  
      </div>

      <div className = {indexStyle.text}>
        <div className = {styles.aboutSectionTitle}>Development Skills</div>
          <div className={styles.developmentSkillDescription}>{aboutDevelopmentSkillDescription}</div>
        <div className={styles.skillCategory}>
          {aboutDevelopmentSkill && aboutDevelopmentSkill.map((skill, idx)=>{
            return <SkillCategory key = {idx} skill = {skill} /> 
          })}
        </div>
      </div>

      <div className = {indexStyle.text}>
        <div className = {styles.aboutSectionTitle}>Work experience</div>
        {aboutWorkExperience && aboutWorkExperience.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className = {indexStyle.text}>
        <div className = {styles.aboutSectionTitle}>Interests</div>
        {aboutInterest && aboutInterest.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

    </div>
  )
}

export default About
