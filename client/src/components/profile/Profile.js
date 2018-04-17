import React from 'react';
import Description from './Description';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {getProfileDescription} from '../../redux/actions/getData'
import {setProfileDescription} from '../../redux/actions/sendData'
import "../../css/Profile.css";

class Profile extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isLoading:false,
		}
		this.props.getProfileDescription();
	}

	render() {
		const {profileDescription} = this.props;
		return (
			<section id="about">
				<div className="col-xs-6 col-sm-5 col-md-3 profile-picture">
					<img src="./img/profile.jpg" alt="Guillaume" className="thumbnail profile-picture"/>
				</div>
				<div className="heading">
					<h1>GUILLAUME NOUGIER</h1>
					<h3>Développeur Full Stack</h3>
				</div>
				<div id="homeDesription" className="container">
                    <Description
                        getDescription={this.props.getProfileDescription} 
                        setDescription={this.props.setProfileDescription} 
                        content={profileDescription}
                        propertyName="profileDescription"
                    />
				</div>
			</section>
		);
	}
}

Profile.propTypes ={
    getProfileDescription: PropTypes.func.isRequired,
	setProfileDescription: PropTypes.func.isRequired,
	profileDescription: PropTypes.string.isRequired,
}

function mapStateToProps(state){
    return{
        profileDescription: state.profileDescription
    }
}

export default connect(mapStateToProps, {getProfileDescription, setProfileDescription})(Profile);