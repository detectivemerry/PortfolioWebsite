import styles from './Project.module.css'

function Project({project}) {
    const {projectTitle, projectDescription, projectImgUrl, liveDemoLink, githubLink} = project
    return (
        <div className = {styles.projectCard}>
            <div className = {styles.projectImg}>
                <img src = {projectImgUrl} />
            </div>
            <div className = {styles.projectDescriptionContainer}>
                <div className= {styles.projectDescription}>
                    <div className = {styles.projectTitle}>{projectTitle}</div>
                    {projectDescription}
                </div>
                <div className = {styles.projectButtons}>
                    {githubLink && <button>Github repo</button>}
                    {liveDemoLink && <button>Live demo</button>}
                </div>
            </div>
        </div>
    )
}

export default Project
