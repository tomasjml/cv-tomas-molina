import React from 'react';

const CareerInfo = ({careerData}) => {
    return ( 
        <>
            <h3>Career Summary</h3>
            {careerData.map((job) => {
                return (
                    <div key={job.position}>
                        <div className="row">
                            <div className="col">
                                <h5>{job.position}</h5>
                            </div>
                            <div className="col">
                                <h5>{job.initialDate} to {job.finalDate}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <ul>
                                {job.tasks.map((task, i) => {
                                    return (
                                        <li key={i}>{task}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </>
     );
}
 
export default CareerInfo;