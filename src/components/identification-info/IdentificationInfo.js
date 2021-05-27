import React from 'react';
import "./IdentificationInfo.css";
import ContactInfo from "../contact-info/ContactInfo";
import {
    contactData
  } from "../../data/DataCV";

const IdentificationInfo = ({name, dedication, yourImage}) => {
    return (
        <header className="info green-transparent">
            <div className="row align-items-center">
                <div className="col col-3 m-3"> 
                    <img src={yourImage} alt={"A picture of: " + name}  className="avatar img-fluid img-thumbnail float-end w-100"/>
                </div>
                <div className="col col-7 m-3">
                    <div className="mb-3">
                        <div className="terminal text-center">
                            <h1 className="fs-2 p-2">{name}</h1>
                            <h1 className="fs-3 pb-2">{dedication}</h1>
                        </div>
                    </div>
                    <div className="mt-3">
                        <ContactInfo contactData={contactData} />
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default IdentificationInfo;