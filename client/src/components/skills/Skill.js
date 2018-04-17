import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Popup from '../common/Popup';
import SkillForm from './SkillForm';

class Skill extends React.Component {
    render(){
        const {img, alt, description, name} = this.props.skill;
        const {isAuthenticated, user} = this.props.auth;
        const category = this.props.category
        return(
            <div className="col-md-4 text-center">
                {description !== "" && <Popup id={name+ category+"Modal"} description={description} title={name}/>}
                <SkillForm id={name+ category+ "ModalEdit"} category={category} skill={this.props.skill} mode="edit"/>
                <div className="skill"><img src={img} alt={alt} data-toggle="modal" data-target={"#"+ name + category + "Modal"}/></div>
                {isAuthenticated && user.isAdmin &&
                    <div className="form-group"><button className="btn btn-secondary btn-sm" data-toggle="modal" data-target={"#"+ name + category+ "ModalEdit"}>Edit</button></div>}
            </div>
        )
    }
}

Skill.propTypes = {
    category: PropTypes.string.isRequired,
    skill: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

function mapStateToProps(state){
	return{
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Skill);