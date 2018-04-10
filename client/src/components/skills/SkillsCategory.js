import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill"

const SkillsCategory = ({categoryName, skills}) =>{
    return(
        <div className ="col-md-6">
            <div className="skillsCategory"><h3>{categoryName}</h3></div>
            <div className="row skillsContainer">
                {skills.map((skill, i)=>(
                    <Skill skill={skill} key={i}/>
                ))}
            </div>
        </div>
    )
}
SkillsCategory.propTypes = {
    categoryName: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
}

export default SkillsCategory;