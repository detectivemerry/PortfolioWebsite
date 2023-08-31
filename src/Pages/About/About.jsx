import styles from './About.module.css'
import indexStyle from '../../index.module.css'
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'
import imgUrl from "../../assets/portfolio_dp.jpg"
function About({aboutDescription, aboutDevelopmentSkill, aboutInterest, iconImgs}) {

  return (
    <div className = {styles.about}>

      <SectionHeader title="About me" />

      <div className = {styles.portfolioDp}>
        <img src= {imgUrl}/>
      </div>

      <div className = {indexStyle.text}>
        {aboutDescription && aboutDescription.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className = {indexStyle.text}>
        <div className = {styles.aboutSectionTitle}>Development skills</div>
        <div className = {styles.icons}>
        {iconImgs && iconImgs.map((iconImg, idx)=>{
          return <img className = {styles.iconImg} key = {idx} src = {iconImg.filePath} />
        })}
        </div>
        {aboutDevelopmentSkill && aboutDevelopmentSkill.split('\n').map((paragraph, index) => (
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
