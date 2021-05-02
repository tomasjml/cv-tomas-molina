import './App.css';

// Components
import HeaderIdentification from './components/header-identification/HeaderIdentification';
import ContactInfo from "./components/contact-info/ContactInfo";
import ProfileInfo from "./components/profile-info/ProfileInfo";
import CareerInfo from "./components/career-info/CareerInfo";
import BirthInfo from "./components/birth-info/BirthInfo";
import SkillsInfo from "./components/skills-info/SkillsInfo";

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
  const careerData = [
    {
      "position": "Web Developer",
      "companyName": "StepOneIT",
      "initialDate": "2016",
      "finalDate": "2021",
      "tasks": [
        "Construction of a business intelligence website to contribute to the centralization of data for decision-making.",
        "API integration with the local Hospital system to simplify insurance authorizations. Decreasing a step in the reception flow."
      ]
    },
    {
      "position": "English Translator",
      "companyName": "T.E.A.R.S",
      "initialDate": "2011",
      "finalDate": "2014",
      "tasks": [
        "Real-time translation of interactions of foreign teams, achieving the operation of the interaction with both local teams and the locals affected by their altruistic missions.",
        "Real-time translation of interactions of foreign teams, achieving the operation of the interaction with both local teams and the locals affected by their altruistic missions."
      ]
    },
    {
      "position": "Assigment Corrector",
      "companyName": "PUCMM",
      "initialDate": "2018",
      "finalDate": "2021",
      "tasks": [
        "Correct assignments from various subjects as introduction to algorithms",
        "Support in PUCMM/Intellect College technology program"
      ]
    }
  ]
  const [birthDate, birthPlace] = ["27 of February, 1996", "La Vega, Dominican Republic"]
  const [codingData, frameData, passiveData] = [
    ["JavaScript", "HTML", "CSS", "Java", "Python", "SQL", "MySQL", "MongoDB"],
    [
      {
        "language" : "JavaScript",
        "frameworks": ["ReactJS", "NodeJS", "LoopBack", "Express"]
      },
      {
        "language" : "Java",
        "frameworks": ["Vaadin", "Hibernate/JPA", "Springboot"]
      },
      {
        "language" : "Python",
        "frameworks": ["Django REST", "Flask"]
      },
      {
        "language" : "General",
        "frameworks": ["Git", "Docker", "MVC", "Figma", "Postman", "VS Code"]
      }
    ],
    ["Creativity", "Communication", "Teamwork", "Adaptability", "Critical Thinking", "Leadership", "Organized"]
  ]


  return (
    <div className="App">
      <div className="paper">
        <HeaderIdentification name={name} dedication={dedication} yourImage={tomasMolina}/>
        <ContactInfo cellphone={cellphone} email={email} address={address} linkedin={linkedin} github={github}/>
        <div className="row">
          <div className="col">
            <ProfileInfo info={profileDescription}/>
            <div className="col">
              <BirthInfo birthDate={birthDate} birthPlace={birthPlace}/>
            </div>
            <div className="col">
              <SkillsInfo codingData={codingData.join(", ")} frameData={frameData} passiveData={passiveData}/>
            </div>
          </div>
          <div className="col">
            <CareerInfo careerData={careerData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
