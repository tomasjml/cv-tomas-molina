import React from 'react';
import "./IdentificationInfo.css";
import ContactInfo from "../contact-info/ContactInfo";
import {
    contactData
  } from "../../data/DataCV";

const IdentificationInfo = ({name, dedication, yourImage}) => {
    return (
        <header className="info info__primary green-transparent">
            <img src={yourImage} alt={"A picture of: " + name} width="200" height="215" className="avatar"/>
            <div className="terminal">
                <h1>{name}</h1>
                <h1>{dedication}</h1>
            </div>
            <ContactInfo contactData={contactData} />
        </header>
    );
}
 
export default IdentificationInfo;