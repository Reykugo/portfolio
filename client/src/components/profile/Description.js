import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextArea from './TextArea'

class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit:false
        }
        this.edit = this.edit.bind(this);
        this.isEdited = this.isEdited.bind(this);
    }
    edit(e){
        e.preventDefault();
        this.setState({isEdit:true})
    }

    isEdited(){
        this.setState({isEdit:false});
        this.props.getDescription();

    }

    render(){
        const {isAuthenticated, user} = this.props.auth;
        const {isEdit} = this.state;
        const {content} = this.props;
        return(
            <div>
                {!isEdit ? <p className="paragraph">{content}</p> : 
                <TextArea 
                    content={content} 
                    isEdited={this.isEdited}
                    setDescription ={this.props.setDescription}
                    propertyName={this.props.propertyName}
                  /> }
                
                {isAuthenticated && user.isAdmin && !isEdit &&
                    <div className="form-group"><button className="btn btn-secondary btn-sm" onClick={this.edit}>Edit</button></div>}
            </div>
        )
    }
    
}

Description.propTypes = {
    content: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired,
    getDescription: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
    propertyName: PropTypes.string.isRequired

}

function mapStateToProps(state){
	return{
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Description);
