import React from 'react';

const ContactInfo = ({contactData}) => {
    return (
        <div className="info">
            <div className="row p-1 align-items-md-center">
                <div className="col">
                    <h2 className="text-center">How to reach me</h2>
                </div>
            </div>
            <div className="row p-1">
                <div className="col">
                    <ul>
                        {Object.keys(contactData).map((dataKey) => {
                            return(
                                <li className="text-capitalize wrapped" key={dataKey}>
                                    <strong>{dataKey}:</strong> {contactData[dataKey]}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default ContactInfo;