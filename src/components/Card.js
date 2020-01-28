import React from 'react';
import './../assets/css/styles.css';

const Card = ({children, imgUrl, className}) => {
    return (
        <>
            <div className={"card shadow-lg " + className}>
                <img src={imgUrl} className="card-img-top" alt=""/>
                <div className="card-body">
                    {children}
                </div>
            </div>   
        </>
    );
}


export default Card;
