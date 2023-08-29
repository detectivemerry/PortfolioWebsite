import './About.css'
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'
import imgUrl from "../../assets/portfolio_dp.jpg"
function About({aboutDescription, aboutDevelopmentSkill, aboutInterest, iconImgs}) {

  return (
    <div className = "about">

      <SectionHeader title="About me" />

      <div className = "portfolio-dp">
        <img src= {imgUrl}/>
      </div>

      <div className = "about-description text">
        {aboutDescription && aboutDescription.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className = "about-section text">
        <div className = "about-section-title">Development skills</div>
        <div className = "icons">
        {iconImgs && iconImgs.map((iconImg, idx)=>{
          return <img className = "iconImg" key = {idx} src = {iconImg.filePath} />
        })}
        </div>
        {aboutDevelopmentSkill && aboutDevelopmentSkill.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className = "about-section text">
        <div className = "about-section-title">Interests</div>
        {aboutInterest && aboutInterest.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

    </div>
  )
}

export default About
