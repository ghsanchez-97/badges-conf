import React from 'react';
import logo from '../image/logo.svg';
import './styles/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
               <div className="container-fluid">
               <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                    <span className="fw-light">Platzi</span>
                    <span className="fw-bold">Conf</span>   
                </a> 
               </div>
            </div>
        )
    }
}

export default Navbar;