import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill"

function getColor(index){

}

const SkillsCategory = ({category, categoryName, skills}) =>{
    return(
        <div className ="col-md-6">
            <div className="skills-category">
                <h3>{categoryName}</h3>
                <div className="">
                    {skills.map((skill, i)=>(
                        <Skill category={category} skill={skill} key={i} id={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
SkillsCategory.propTypes = {
    category: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
}

export default SkillsCategory;