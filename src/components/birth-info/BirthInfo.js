import React from 'react';

const BirthInfo = ({birthDate, birthPlace}) => {
    return ( 
        <>
            <h3>Date/Place of Birth</h3>
            <p>Born on {birthDate} in {birthPlace}</p>
        </>
     );
}
 
export default BirthInfo;