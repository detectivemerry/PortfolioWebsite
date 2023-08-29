import './SectionHeader.css'

function SectionHeader({title}) {

  return (
    <>
        <div className = "section-header">
            {title}
            <hr/>
        </div>
    </>
  )
}

export default SectionHeader
