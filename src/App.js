import Profile from './components/Profile_Component';
import Education from './components/Education_Component';
import Skills from './components/Skills_Component';
import Work from './components/WorkComponent';
import Contact from './components/ContactComponent';
import AboutMe from './models/aboutme';
import AboutSkills from './models/skills';
import AboutWork from './models/workhistory';
import Aboutcontact from './models/contact';
import Abouteducation from './models/education';
import './mystyle.css'
import { useState } from 'react';


function App() {

  const [firstname,setfirstname] = useState("Meenakshi Suresh Babu")

  function changeName(){
    setfirstname("Meenakshi Sundari")
  }

  return (
    <div className="App">
      <Profile image={AboutMe.image} name={firstname} city={AboutMe.city} profession={AboutMe.profession}/>
      <Education bdegree={Abouteducation.bdegree} mdegree={Abouteducation.mdegree}/>
      <Skills/>
      <Work exp={AboutWork}/>
      <Contact/>
    </div>
  );
}

export default App;
