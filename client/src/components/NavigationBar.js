import React, {Component} from 'react';
import {NavLink as Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout}  from '../redux/actions/authentication'

class NavigationBar extends Component{

    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render(){
        const {isAuthenticated} = this.props.auth;

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="#" onClick={this.logout.bind(this)}>logOut</Link></li>
            </ul>
        );

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Home</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        {isAuthenticated && userLinks}
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