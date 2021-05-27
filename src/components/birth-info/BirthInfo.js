import React from 'react';

const BirthInfo = ({birthDate, birthPlace}) => {
    return ( 
        <div className="info p-3">
            <h3 className="text-center">Date/Place of Birth</h3>
            <p>Born on {birthDate} in {birthPlace}</p>
        </div>
     );
}
 
export default BirthInfo;