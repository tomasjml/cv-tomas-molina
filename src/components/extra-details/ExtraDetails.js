import React from 'react';

const ExtraDetails = ({detailsData}) => {
    return (  
        <div className="info p-3">
            <h3 className="text-center">Extra Details</h3>
            <p className="text-center">{detailsData}</p>
        </div>
    );
}
 
export default ExtraDetails;