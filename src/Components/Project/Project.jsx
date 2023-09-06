import styles from './Project.module.css'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


function Project({ project }) {

    const { projectTitle, projectDescription, projectImgUrl, liveDemoLink, githubLink } = project

    const cardVariants = {
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 }, x: 0 },
        hidden: { opacity: 0, transition: { duration: 1 }, x: -300 },
    };

    // give us more control with access to helper functions like start/stop
    const controls = useAnimation();

    // hook to detect if HTML slement with ref is in viewport 
    const [ref, inView] = useInView();

    useEffect(() => {

        if (inView) {
            controls.start("visible");
        }
        else {
            controls.start("hidden");
        }

    }, [controls, inView]);

    return (

        <motion.div
            className={styles.projectCard}
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={cardVariants}>
                
            <div className={styles.projectImg}>
                <img src={projectImgUrl} />
            </div>
            <div className={styles.projectDescriptionContainer}>
                <div className={styles.projectDescription}>
                    <div className={styles.projectTitle}>{projectTitle}</div>
                    {projectDescription}
                </div>
                <div className={styles.projectButtons}>
                    {githubLink && <button>Github repo</button>}
                    {liveDemoLink && <button>Live demo</button>}
                </div>
            </div>

        </motion.div>

    )
}

export default Project
