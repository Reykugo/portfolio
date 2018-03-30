import React from 'react';
import TextArea from './common/TextArea';
import {connect} from 'react-redux'
import {getHomeDescription} from '../redux/actions/getData'
class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			homeDescription: ""
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
						<TextArea content={homeDescription}/>
					</div>
					<div className="col">
					</div>
				</div>
			</div>
		);
	}
}


export default connect(null, {getHomeDescription})(Home);