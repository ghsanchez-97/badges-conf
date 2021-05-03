import React from 'react';
import './styles/PageError.css';
import Error from '../image/ErrorServe.svg';

function PageError(props){
    return(
        <div className="PageError">
            <div className="page-error">
                <picture>
                    <img src={Error} alt={props.error.message}/>
                </picture>
                <h1>{props.error.message}</h1>
            </div>
        </div>
    )
}
export default PageError;