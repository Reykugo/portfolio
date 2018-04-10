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
            <li><a href='#about' onClick={this.logout.bind(this)}>LOGOUT</a></li>
        );

        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="myNavbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#about" >Mon profil</a></li>
                            <li><a href="#skills">Compétences</a></li>
                            <li><a href="#experience">Expériences</a></li>
                            <li><a href="#education">Formations</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            {isAuthenticated && userLinks}
                        </ul>
                    </div>
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