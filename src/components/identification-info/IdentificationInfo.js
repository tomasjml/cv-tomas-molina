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
                <div className="col p-5"> 
                    <img src={yourImage} alt={"A picture of: " + name}  className="avatar img-fluid img-thumbnail float-end w-50"/>
                </div>
                <div className="col p-5">
                    <div className="mb-4">
                        <div className="termin
                        al text-center">
                            <h1 id="name" data-testid="name" className="fs-2 p-2">{name}</h1>
                            <h1 id="dedication" data-testid="dedication" className="fs-3 pb-2">{dedication}</h1>
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