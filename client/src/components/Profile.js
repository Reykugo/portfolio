import React from 'react';
import Description from './common/Description';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {getProfileDescription} from '../redux/actions/getData'
import {setProfileDescription} from '../redux/actions/sendData'
import "../css/Profile.css";

class Profile extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			profileDescription: "",
			isLoading:false,
		}
		this.getProfileDescription = this.getProfileDescription.bind(this)
		this.getProfileDescription();
	}

	getProfileDescription(){
		this.props.getProfileDescription().then(
			(res) =>{
				this.setState({profileDescription: res.data.profileDescription})
			},
			(err)=>{console.log(err.response)}
		)
	}

	render() {
		const {profileDescription} = this.state;
		return (
			<section id="about">
				<div className="col-xs-6 col-sm-5 col-md-3 profile-picture">
					<img src="./img/profile.jpg" alt="Guillaume" className="thumbnail profile-picture"/>
				</div>
				<div className="heading">
					<h1>GUILLAUME NOUGIER</h1>
					<h3>Développeur Full Stack</h3>
				</div>
				<div className="container">
                    <Description
                        getDescription={this.getProfileDescription} 
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
    setProfileDescription: PropTypes.func.isRequired
}

export default connect(null, {getProfileDescription, setProfileDescription})(Profile);