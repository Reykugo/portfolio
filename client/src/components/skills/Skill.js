import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SkillForm from './SkillForm';

class Skill extends React.Component {
    render(){
        const {img, alt, description, name} = this.props.skill;
        const {isAuthenticated, user} = this.props.auth;
        const category = this.props.category;
        
        var skillContainerClass = this.props.id%2 !==1?"skill-container":"skill-container-2"
        return(
            <div>
                <SkillForm id={name+ category+ "ModalEdit"} category={category} skill={this.props.skill} mode="edit"/>
                <div className={skillContainerClass}>
                    <a className="skill-name skill-name-hover" role="button" data-toggle="collapse" data-parent="#accordion" href={"#" + name + category + "Info"} aria-expanded="true" aria-controls="collapseOne">
                        <span>{name}</span>
                    </a>
                    <div className="row panel-collapse collapse" id= {name + category + "Info"}>
                        <div className="skill col-md-4"><img src={img} alt={alt}/></div>
                        <div className="col-md-7 skill-description"  dangerouslySetInnerHTML={{__html: description}}></div>
                    </div>
                </div>
                
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
    id: PropTypes.number.isRequired,
}

function mapStateToProps(state){
	return{
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Skill);