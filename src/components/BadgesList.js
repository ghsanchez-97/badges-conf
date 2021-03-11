import React from "react";
import './styles/BadgesList.css';
import {FaTwitter} from 'react-icons/fa';
import { Link } from "react-router-dom";

class BadgesListItem extends React.Component{
    render(){
        return(
            <div className="BadgesListItem">
                <img className="BadgesListItem__avatar" src={this.props.badges.avatarUrl} alt={`${this.props.badges.firstName} ${this.props.badges.lastName}`}/>

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
                {this.props.badges.map((badges) =>{
                    return(
                      <li key={badges.id}>
                          <BadgesListItem badges={badges} />
                      </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;