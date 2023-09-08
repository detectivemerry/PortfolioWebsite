import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/App.jsx'
import About from './Pages/About/About.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import data from './utils/data.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About  
      aboutDescription = {data.aboutDescription} 
      aboutDevelopmentSkill = {data.aboutDevelopmentSkill}
      aboutDevelopmentSkillDescription = {data.aboutDevelopmentSkillDescription}
      aboutWorkExperience = {data.aboutWorkExperience} 
      aboutInterest={data.aboutInterest} iconImgs = {data.iconImgs}/>
    <Projects projects = {data.projects} />
    <Contact/>
  </React.StrictMode>,
)
