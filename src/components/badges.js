import React from "react";
import logoConf from '../image/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logoConf} alt="Logo de la conferencia" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarURL} alt="Avatar" />
                    <h1>{this.props.firstname} <br/> {this.props.lastname}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobtitle}</h3>
                    <p>@{this.props.twitter}</p>
                </div>
                <div className="Badge__footer">
                    #platziConf
                </div>
            </div>
        )
    }
}

export default Badge; 