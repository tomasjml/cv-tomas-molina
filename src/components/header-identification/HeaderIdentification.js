import React from 'react';

const HeaderIdentification = ({name, dedication, yourImage}) => {
    return (
        <header>
            <div className="row">
                <div className="col">
                    <img src={yourImage} alt={"A picture of: " + name} width="150" height="200"/>
                </div>
                <div className="col">
                    <h1>{name}</h1>
                    <h1>{dedication}</h1>
                </div>
            </div>
        </header>
    );
}
 
export default HeaderIdentification;