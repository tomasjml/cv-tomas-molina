import './App.css';

// Components
import IdentificationInfo from "./components/identification-info/IdentificationInfo.js";
import ProfileInfo from "./components/profile-info/ProfileInfo";
import CareerInfo from "./components/career-info/CareerInfo";
import BirthInfo from "./components/birth-info/BirthInfo";
import SkillsInfo from "./components/skills-info/SkillsInfo";
import ExtraDetails from "./components/extra-details/ExtraDetails"
import EducationalInfo from "./components/educational-info/EducationalInfo";
import {
  name,
  dedication,
  profileDescription,
  careerData,
  birthDate, birthPlace,
  codingData, frameData, passiveData,
  detailsData,
  educationalData
} from "./data/DataCV";

// Resources
import tomasMolina from "./images/jotate.jpg";

function App() {
  return (
    <div className="container-lg">
      <div className="row align-items-center">
        <div className="col">
          <div className="paper m-4">
            <div className="row justify-content-md-center m-3">
                <div className="col-9">
                  <IdentificationInfo name={name} dedication={dedication} yourImage={tomasMolina}/>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col">'
                  <div className="row m-3">
                      <ProfileInfo info={profileDescription}/>
                  </div>
                  <div className="row m-3">
                  <BirthInfo birthDate={birthDate} birthPlace={birthPlace}/>
                  </div>
                  <div className="row m-3">
                    <SkillsInfo codingData={codingData.join(", ")} frameData={frameData} passiveData={passiveData.join(", ")}/>
                  </div>
                  <div className="row m-3">
                    <ExtraDetails detailsData={detailsData} />
                  </div>
                </div>
                <div className="col">
                  <div className="row m-3">
                    <CareerInfo careerData={careerData}/>
                  </div>
                  <div className="row m-3">
                    <EducationalInfo educationalData={educationalData}/>
                  </div>
                </div>
              </div>
          </div>                                                  
        </div>
      </div>
    </div>
  );
}

export default App;
