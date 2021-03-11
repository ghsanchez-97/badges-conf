import React from 'react';
import header from '../image/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/badges';
import BadgeForm from '../components/BadgeForm';

class BagdeNew extends React.Component{
    state = { form: {
        firstname: '',
        lastname: '',
        email: '',
        jobtitle: '',
        twitter: '',
    } };    
    
    handleChange = e =>{

        this.setState({
            form: {
             ...this.state.form,
             [e.target.name] : e.target.value
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstname={this.state.form.firstname}
                                lastname={this.state.form.lastname}
                                twitter={this.state.form.twitter}
                                jobtitle={this.state.form.jobtitle}
                                email={this.state.form.email}
                                avatarURL='https://s.gravatar.com/avatar/ed724dcc7040d4aad8cc8696567ae2df?s=80'
                            />
                        </div>
                        <div className="col-6">
                            < BadgeForm 
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BagdeNew;