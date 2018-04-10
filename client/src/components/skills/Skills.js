import React from "react"
import '../../css/Skills.css'
import SkillsCategory from "./SkillsCategory" 

//only for test
const skillsData = {
    backend: [
        {name:"python", description:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes). ", img:"./img/python.png", alt:"python" },
        { name:"java", description:"test java ", img:"./img/java.png", alt:"java" },
        {name:"python", description:"test python ", img:"./img/python.png", alt:"python" },
        { name:"java", description:"test java ", img:"./img/java.png", alt:"java" }
    ],
    frontend:[{name:"react",description:"test react ", img:"../..", alt:"react" }]
}
class Skills extends React.Component{
    render(){
        return(
            <section id="skills">
                <div className="heading">
                    <h2>Compétences</h2>
                    <div className="container">
                        <div className="row">
                            <SkillsCategory categoryName = "BACK END" skills = {skillsData.backend} />
                            <SkillsCategory categoryName = "FRONT END" skills = {skillsData.frontend} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;