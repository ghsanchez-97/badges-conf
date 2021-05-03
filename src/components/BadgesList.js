import React from "react";
import './styles/BadgesList.css';
import {FaTwitter} from 'react-icons/fa';
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component{
    render(){
        return(
            <div className="BadgesListItem">
                <Gravatar 
                className="BadgesListItem__avatar" 
                email={this.props.badges.email} 
                alt={`${this.props.badges.firstName} ${this.props.badges.lastName}`}/>

                <div>
                    <strong>
                        {this.props.badges.firstName} {this.props.badges.lastName}
                    </strong>
                    <br/><FaTwitter color="#1DA1F2"/> @{this.props.badges.twitter}
                    <br/>{this.props.badges.jobTitle}
                </div>
            </div>
        )
    }
}

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new Badge
                    </Link>
                </div>
            )
        }
        return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge) =>{
                    return(
                      <li key={badge.id}>
                          <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}> 
                            <BadgesListItem badges={badge} />
                          </Link>                       
                      </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;