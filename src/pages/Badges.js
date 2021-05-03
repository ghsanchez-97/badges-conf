import React from 'react';
import BadgesList from '../components/BadgesList';
import './styles/Badges.css';
import Conflogo from '../image/badge-header.svg';
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader'

class Badges extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount(){
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    fetchData = async () => {
        this.setState({loading:true, error: null});

        try{
            const data = await api.badges.list();
            this.setState({loading:false, data: data})
        }catch (e){
            this.setState({loading:false, error:e})
        }
    }

    render(){
        if(this.state.loading === true && !this.state.data){
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error={this.state.error}/> 
        }
            return (
            <React.Fragment>

                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='Badges__conf-logo' src={Conflogo} alt='Conf logo' />
                        </div>
                    </div>
                </div>

                <div className='Badge__container'>
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className ="Badges__list">
                        <div className="Badges__container">
                            {this.state.loading && <MiniLoader />}
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Badges;