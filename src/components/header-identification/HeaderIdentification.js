import React from 'react';

const HeaderIdentification = ({name, dedication, yourImage}) => {
    return (
        <header className="justify__content__center info__lg">
            <img src={yourImage} alt={"A picture of: " + name} width="150" height="200"/>
            <h1>{name}</h1>
            <h1>{dedication}</h1>
        </header>
    );
}
 
export default HeaderIdentification;