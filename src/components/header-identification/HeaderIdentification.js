import React from 'react';

const HeaderIdentification = ({name, dedication, yourImage}) => {
    return (
        <header>
            <div className="row">
                <div className="col">
                    <img src={yourImage} alt={"A picture of: " + name}/>
                </div>
                <div className="col">
                    <h1>{name}</h1>
                    <h2>{dedication}</h2>
                </div>
            </div>
        </header>
    );
}
 
export default HeaderIdentification;