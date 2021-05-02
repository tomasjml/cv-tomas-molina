import React from 'react';

const ContactInfo = ({contactData}) => {
    return (
        <>
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