import './Project.css'

function Project({project}) {
    const {projectTitle, projectDescription, projectImgUrl, liveDemoLink, githubLink} = project
    return (
        <div className = "project-card">
            <div className = "project-img">
                {projectImgUrl}
            </div>
            <div className = "project-description-container">
                <div className="project-description">
                    <h1>{projectTitle}</h1>
                    {projectDescription}
                </div>
                <div className = "project-buttons">
                    {liveDemoLink && <button>live demo</button>}
                    {githubLink && <button>github demo</button>}
                </div>
            </div>
        </div>
    )
}

export default Project
