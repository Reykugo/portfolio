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
				<div className="container">
					<div className="heading">
						<h2>à propos</h2>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-8 profile-picture">
							<img src="./img/profile.jpg" alt="Guillaume"/>
						</div>
						<div className = "col-md-8 description">
							<div className="heading">
								<h3>Guillaume Nougier</h3>
								<h5>Développeur Full Stack</h5>
							</div>
							<div id="homeDescription">
								<Description
									getDescription={this.props.getProfileDescription} 
									setDescription={this.props.setProfileDescription} 
									content={profileDescription}
									propertyName="profileDescription"
								/>
							</div>
						</div>
					</div>
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