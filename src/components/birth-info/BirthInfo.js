import React from 'react';

const BirthInfo = ({birthDate, birthPlace}) => {
    return ( 
        <div className="info">
            <h3>Date/Place of Birth</h3>
            <p>Born on {birthDate} in {birthPlace}</p>
        </div>
     );
}
 
export default BirthInfo;