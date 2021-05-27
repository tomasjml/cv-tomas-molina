import React from 'react';

const SkillsInfo = ({codingData, frameData, passiveData}) => {
    return ( 
        <div className="info">
            <h3>Skills</h3>
            <div className="row">
                <div className="col">
                    <h5>Passive Skills</h5>
                    <p>{passiveData}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>Programming Languages</h5>
                    <p>{codingData}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>Frameworks/Systems</h5>
                    <u>
                    {frameData.map((data) => {
                        return (
                            <div key={data.language}>
                                <label htmlFor={data.language}>{data.language}</label>
                                <li name={data.language}>: {data.frameworks.join(", ")}</li>
                            </div>
                        );
                    })}
                    </u>
                </div>
            </div>
        </div>
     );
}
 
export default SkillsInfo;