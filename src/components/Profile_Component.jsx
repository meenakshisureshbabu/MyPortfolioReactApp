
function Profile_Component(props) {
  return (
    <div className='profile-div'>
        <img className='profilepic' src={props.image} alt=""></img>
        <h3>{props.name}</h3>
        <p>{props.profession}</p>
        <p>{props.city}</p>
    </div>
  )
}

export default Profile_Component