import React, {Component} from 'react';
//import {NavLink as Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout}  from '../redux/actions/authentication'
import "../css/Navbar.css"

class NavigationBar extends Component{

    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render(){
        const {isAuthenticated} = this.props.auth;

        const userLinks = (
            <li className="nav-item"><a  className="nav-link" href='#about' onClick={this.logout.bind(this)}>LOGOUT</a></li>
        );

        return (
            <nav className="navbar navbar-expand-sm fixed-top  navbar-dark bg-dark">
                <button className="navbar-toggler collapsed navbar-toggler-right" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="myNavbar" className="collapse navbar-collapse">
                    <ul className="navbar-nav  mx-auto">
                        <li className="nav-item"><a className="nav-link" href="#about" >Mon profil</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Compétences</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experience">Expériences</a></li>
                        <li className="nav-item"><a className="nav-link" href="#education">Formations</a></li>
                        <li className="nav-item"><a  className="nav-link" href="#portfolio">Portfolio</a></li>
                        {isAuthenticated && userLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}

NavigationBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout})(NavigationBar);