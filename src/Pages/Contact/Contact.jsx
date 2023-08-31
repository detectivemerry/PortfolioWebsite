import styles from './Contact.module.css'
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'
import githubPic from '../../assets/github.png'
import linkedinPic from '../../assets/linkedin.png'

function Contact() {

  return (
    <div className = {styles.contact}>
      <SectionHeader title="Contact" />
        <div className={styles.contactCallToAction}>
            <div>For any further enquiries or collaboration opportunites,</div>
            <div>feel free to contact me through any of the methods listed below.</div>
            <p/>
            Email: <span className = {styles.redText}>caleb.jiasheng@gmail.com</span>
        </div>
        <div className = {styles.linkImg}>
            <a href = "https://github.com/detectivemerry?tab=repositories">
                <img src = {githubPic}/>
            </a>
            <a href = "https://www.linkedin.com/in/caleb-jia-sheng/">
                <img src = {linkedinPic}/>
            </a>
        </div>
    </div>
  )
}

export default Contact
