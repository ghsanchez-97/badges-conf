import React from 'react';
import Error from '../image/Notfound.png';
import './styles/NotFound.css';
import {Animated}  from 'react-animated-css'

function NotFound(){
    return(
        <React.Fragment>
            <br/>
            <div className="NotFound container">
                <img className="NotFound__img row" src={Error} alt="Not Found" /><br/>
                <Animated animationIn="bounce" animationOut="bounceIn" animationInDuration={9000}
                animationOutDuration={9000} isVisible={false}>
                    <h1>404: Not Found</h1>
                </Animated>
            </div>
        </React.Fragment>
    )
}

export default NotFound;