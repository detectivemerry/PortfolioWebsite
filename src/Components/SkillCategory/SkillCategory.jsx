import styles from './SkillCategory.module.css'

function SkillCategory({ skill }) {
    const { name, technologies } = skill

    return (
        <div className={styles.skillCategory}>
            <div className={styles.categoryTitle}>
                {name}
            </div>
            <div className={styles.categoryLine}></div>
            <div className={styles.images}>
                {technologies &&
                    technologies.map((technology) => (
                        <div className={styles.image} key={technology.name}>
                            <>
                                <div className={styles.imageItem}>
                                    <img src={technology.imgUrl} alt={technology.name} />
                                </div>
                                <div className={styles.imageItem}>{technology.name}</div>
                            </>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default SkillCategory
