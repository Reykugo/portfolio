import React from 'react';

import "../css/Home.css";


class Home extends React.Component {
	render() {
		return (
			<header id="home" className="d-flex text-center text-white">
				<div className="container my-auto">
					<div className="banner-container">
						<h1 className="text-uppercase"><strong>Guillaume Nougier</strong></h1>
						<h2 className="text-uppercase">Développeur full stack</h2>
					</div>
				</div>
			</header>
		);
	}
}

export default Home;