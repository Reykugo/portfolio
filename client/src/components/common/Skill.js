import React from "react";
import PropTypes from 'prop-types';
import Popup from './Popup'

class Skill extends React.Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
        this.closePopup = this.closePopup.bind(this);
        this.state = {
            activePopup: false
        }
        
    }
    onClick(e){
        e.preventDefault();
        this.setState({activePopup:true})
    }

    closePopup(){
        this.setState({activePopup:false})
    }
    render(){
        const {img, alt, description, name} = this.props.skill
        
        return(
            <div className="col-md-4">
                <Popup description={description} title={name}/>
                <div className="skill" data-toggle="modal" data-target="#myModal"><img src={img} alt={alt}/></div>
            </div>
        )
    }
}

Skill.propTypes = {
    skill: PropTypes.object.isRequired
}

export default Skill;