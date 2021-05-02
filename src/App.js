import './App.css';

// Components
import HeaderIdentification from './components/header-identification/HeaderIdentification';
import ContactInfo from "./components/contact-info/ContactInfo";
import ProfileInfo from "./components/profile-info/ProfileInfo";

// Resources
import tomasMolina from "./images/jotate.jpg";

function App() {
  const [name, dedication] = ["José Tomás Molina López", "Systems and Computing Engineer"]
  const [cellphone, email, address, linkedin, github] = [
    "829 572 2702",
    "jtml.mass@gmail.com",
    "La Zursa ll, C5 St. #5. Santiago, Dominican Republic",
    "https://www.linkedin.com/in/tomas-molina-/",
    "https://github.com/jtmlmass"
  ]
  const [profileDescription] = ["Hardworking. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. I found a great love for computers as a child when I saw my grandfather in his 60s in a Microsoft Office course for its great utility. Seeing as still his age, he tried to adapt to technology to see how to simplify his tasks by performing them in a simpler and more efficient way"]

  return (
    <div className="App">
      <div className="paper">
        <HeaderIdentification name={name} dedication={dedication} yourImage={tomasMolina}/>
        <ContactInfo cellphone={cellphone} email={email} address={address} linkedin={linkedin} github={github}/>
        <ProfileInfo info={profileDescription}/>
      </div>
    </div>
  );
}

export default App;
