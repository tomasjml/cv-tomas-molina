import React from 'react';

const ContactInfo = ({contactData}) => {
    return (
        <>
            <h2>How to reach me</h2>
            <ul>
                {Object.keys(contactData).map((dataKey) => {
                    return(
                        <li key={dataKey}>{dataKey}: {contactData[dataKey]}</li>
                    )
                })}
            </ul>
        </>
    );
}
 
export default ContactInfo;