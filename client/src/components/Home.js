import React from 'react';
import Profile from './Profile'
import Skills from './skills/Skills'
import "../css/Home.css";


class Home extends React.Component {
	render() {
		return (
			<div>
				<Profile/>
				<Skills/>
			</div>
		);
	}
}

export default Home;