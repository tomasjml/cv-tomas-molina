import React from 'react';
import "./IdentificationInfo.css";
import ContactInfo from "../contact-info/ContactInfo";
import {
    contactData
  } from "../../data/DataCV";

const IdentificationInfo = ({name, dedication, yourImage}) => {
    return (
        <header className="info green-transparent justify-content-center">
            <div className="row">
                <div className="col"> 
                    <img src={yourImage} alt={"A picture of: " + name} width="200" height="215" className="avatar"/>
                </div>
                <div className="col">
                    <div className="terminal">
                        <h1>{name}</h1>
                        <h1>{dedication}</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ContactInfo contactData={contactData} />
                </div>
            </div>
        </header>
    );
}
 
export default IdentificationInfo;