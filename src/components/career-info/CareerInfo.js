import React from 'react';

const CareerInfo = ({careerData}) => {
    return ( 
        <>
            <h3>Career Summary</h3>
            {careerData.map((job) => {
                return (
                    <>
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
                                {job.tasks.map((task) => {
                                    return (
                                        <li>{task}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </>
                )
            })}
        </>
     );
}
 
export default CareerInfo;