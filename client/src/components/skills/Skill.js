import React from "react";
import PropTypes from 'prop-types';
import Popup from '../common/Popup'

class Skill extends React.Component {
    render(){
        const {img, alt, description, name} = this.props.skill
        
        return(
            <div className="col-md-4">
                <Popup id={name+"Modal"} description={description} title={name}/>
                <div className="skill"><img src={img} alt={alt} data-toggle="modal" data-target={"#"+ name + "Modal"}/></div>
            </div>
        )
    }
}

Skill.propTypes = {
    skill: PropTypes.object.isRequired
}

export default Skill;