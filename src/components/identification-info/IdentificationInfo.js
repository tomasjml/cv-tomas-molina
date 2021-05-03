import React from 'react';
import "./IdentificationInfo.css";

const IdentificationInfo = ({name, dedication, yourImage}) => {
    return (
        <header className="justify__content__center width__md">
            <img src={yourImage} alt={"A picture of: " + name} width="200" height="200"/>
            <div className="terminal">
                <h1>{name}</h1>
                <h1>{dedication}</h1>
            </div>
        </header>
    );
}
 
export default IdentificationInfo;