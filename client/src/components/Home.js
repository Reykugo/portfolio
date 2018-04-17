import React from 'react';
import Profile from './profile/Profile'
import Skills from './skills/Skills'
import Experience from "./Experience"
import "../css/Home.css";


class Home extends React.Component {
	render() {
		return (
			<div>
				<Profile/>
				<Skills/>
				<Experience/>
			</div>
		);
	}
}

export default Home;