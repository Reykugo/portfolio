import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../css/Skills.css';
import SkillsCategory from "./SkillsCategory";
import {getSkills} from '../../redux/actions/getData';

//only for test
/*const skillsData = {
    backend: [
        {name:"python", description:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes). ", img:"./img/python.png", alt:"python" },
        { name:"java", description:"test java ", img:"./img/java.png", alt:"java" },
        {name:"python", description:"test python ", img:"./img/python.png", alt:"python" },
        { name:"java", description:"test java ", img:"./img/java.png", alt:"java" }
    ],
    frontend:[{name:"react",description:"test react ", img:"../..", alt:"react" }]
}*/
class Skills extends React.Component{
    constructor(props){
        super(props);
        this.props.getSkills();
    }
    render(){
        const {skills} = this.props
        console.log(skills)
        return(
            <section id="skills">
                <div className="heading">
                    <h2>Compétences</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {skills.backend !== undefined && <SkillsCategory category = "backend" categoryName = "BACK END" skills = {skills.backend} />}
                        {skills.frontend !== undefined && <SkillsCategory category = "frontend" categoryName = "FRONT END" skills = {skills.frontend} />}
                    </div>
                </div>
            </section>
        )
    }
}

Skills.proptypes = {
    skills: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired,
}

function mapStateToProps(state){
    return{
        skills: state.skills
    }
}

export default connect(mapStateToProps, {getSkills})(Skills);