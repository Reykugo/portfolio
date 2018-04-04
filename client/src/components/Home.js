import React from 'react';
import Description from './common/Description';
import {connect} from 'react-redux'
import {getHomeDescription} from '../redux/actions/getData'
class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			homeDescription: "",
			isLoading:false,
		}
		this.getHomeDesc = this.getHomeDesc.bind(this)
		this.getHomeDesc();
	}

	getHomeDesc(){
		this.props.getHomeDescription().then(
			(res) =>{
				console.log(res)
				this.setState({homeDescription: res.data.homeDescription})
			},
			(err)=>{console.log(err.response)}
		)
	}

	render() {
		const {homeDescription} = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<Description getDescription={this.getHomeDesc} content={homeDescription}/>
					</div>
					<div className="col">
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, {getHomeDescription})(Home);