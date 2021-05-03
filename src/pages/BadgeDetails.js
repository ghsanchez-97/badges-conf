import React from 'react';
import Badges from '../components/badges';
import { Link } from 'react-router-dom';
import confLogo from '../image/platziconf-logo.svg';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

const BadgeDetails = (props) => {
    const badges = props.badge;

    return (
        <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la Conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badges.firstName} {badges.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container"> 
                    <div className="row">
                        <div className="col-6">
                            <Badges 
                                firstName={badges.firstName} 
                                lastName={badges.lastName} 
                                email={badges.email} 
                                twitter={badges.twitter} 
                                jobTitle={badges.jobTitle}
                            />
                        </div>
                        <div className="col-6">
                            <h2>Actions</h2>
                            <div>
                                <div><Link className="btn btn-primary mb-4" to={`/badges/${badges.id}/edit`}> 
                                    Edit
                                </Link></div>
                                <div>
                                    <button onClick={props.onOpenModal} className="btn btn-danger">Eliminar</button>
                                    <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default BadgeDetails;