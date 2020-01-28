import React from 'react';
import './../assets/css/styles.css';

const Card = ({children, imgUrl, ...rest}) => {
    return (
        <>
            <div className="card shadow-lg">
                <img src={imgUrl} className="card-img-top" alt=""/>
                <div className="card-body">
                    {children}
                </div>
            </div>   
        </>
    );
}


export default Card;
