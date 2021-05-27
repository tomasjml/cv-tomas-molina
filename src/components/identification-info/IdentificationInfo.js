import React from 'react';
import "./IdentificationInfo.css";
import ContactInfo from "../contact-info/ContactInfo";
import {
    contactData
  } from "../../data/DataCV";

const IdentificationInfo = ({name, dedication, yourImage}) => {
    return (
        <header className="info green-transparent">
            <div className="row">
                <div className="col m-3"> 
                    <img src={yourImage} alt={"A picture of: " + name} width="200" height="215" className="avatar"/>
                </div>
                <div className="col m-3">
                    <div className="terminal">
                        <h1>{name}</h1>
                        <h1>{dedication}</h1>
                    </div>
                </div>
            </div>
            <div className="row mx-auto">
                <div className="col m-3">
                    <ContactInfo contactData={contactData} />
                </div>
            </div>
        </header>
    );
}
 
export default IdentificationInfo;