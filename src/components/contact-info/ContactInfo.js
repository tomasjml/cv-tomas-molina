import React from 'react';

const ContactInfo = ({cellphone, email, address, linkedin, github}) => {
    return (
        <>
            <ul>
                <li>Cell: {cellphone}</li>
                <li>Email: {email}</li>
                <li>Address: {address}</li>
                <li>LinkedIn: {linkedin}</li>
                <li>Github: {github}</li>
            </ul>
        </>
    );
}
 
export default ContactInfo;