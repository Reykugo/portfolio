import React from "react"
import Skill from "./common/Skill"
import './css/Skills.css'

//only for test
const skillsData = {
    Backend: [{name:"python", description:"test python ", img:"../..", alt:"python" },{ name:"java", description:"test java ", img:"../..", alt:"java" }],
    Frontend:{"react":{description:"test react ", img:"../..", alt:"react" }}
}
class Skills extends React.Component{
    render(){
        return(
            <section id="skills" className="container-fluid">
                <div className="heading">
                    <h2>Compétences</h2>
                    <div className="container-fluid">
                        <h3>BACK END</h3>
                        <div className="row">
                            {skillsData.Backend.map((skill, i)=>(
                                <Skill img={skill.img} alt={skill.alt} key={i}/>
                            ))}
                        </div>
                        <h3>FRONT END</h3>
                        <div className="row">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;