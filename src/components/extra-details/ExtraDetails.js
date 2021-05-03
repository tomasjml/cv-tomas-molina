import React from 'react';

const ExtraDetails = ({detailsData}) => {
    return (  
        <div className="info info__secundary">
            <h3>Extra Details</h3>
            <p>{detailsData}</p>
        </div>
    );
}
 
export default ExtraDetails;