import styles from './SectionHeader.module.css'

function SectionHeader({title}) {

  return (
    <>
        <div className = {styles.sectionHeader}>
            {title}
            <div className = {styles.dots}></div>
        </div>
    </>
  )
}

export default SectionHeader
