import React from 'react';

const EducationalInfo = ({educationalData}) => {
    return ( 
        <>
            <h3>Educational Training</h3>
            {educationalData.map((education) => {
                return (
                    <div key={education.degree}>
                        <div className="row">
                            <div className="col">
                                <h5>{education.organization}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>({education.initialDate} - {education.finalDate})</h5>
                            </div>
                        </div>
                        <div className="row">
                            <p>{education.degree}</p>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    {education.tasks.map((task, i) => {
                                        return (
                                            <li key={i}>{task}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
     );
}
 
export default EducationalInfo;