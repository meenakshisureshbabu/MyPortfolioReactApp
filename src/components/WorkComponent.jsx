function WorkComponent(props) {
  return (
    <div>
        <p className="experiencepara">EXPERIENCE</p>
        <ul>
            {
                props.exp.map((ex) => (
                    <li>{ex}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default WorkComponent