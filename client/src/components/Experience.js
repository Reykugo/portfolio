import React from "react";
//import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import WorkIcon from '../images/workIcon';
import SchoolIcon from '../images/schoolIcon';
import 'react-vertical-timeline-component/style.min.css';
import '../css/Experience.css';

//only for test
const experiencesData = [
    {type:"school", date: "Novembre 2010", job:"Modéliste (stagiaire)", company:"Novalys - Poissy (78)", description: "Modélisation 3D d’une coupe carrelage sur le logiciel Catia V5"},
    {type:"school", date: "Juin 2014", job:"Lycée Newton Enréa", company:"Clichy-Levallois (92)", description: "Baccalauréat STI2D (Sciences Technologies de l’Industrie et du Développement Durable) Spécialité Energie et Environnement : Mention Assez Bien"},
    {type:"school", date: "2014 - 2019", job:"Ingésup (Ecole d’Experts en Informatique", company:"Paris 20", description: "Préparation du titre Expert informatique et systèmes d’information"},
    {type:"work", date: "2015 - 2016", job:"Développeur Python", company:"Corp-Lean – Triel sur Seine (78)", description: "Développement d'une application Python de gestion de temps pour l'industrie basé sur le Lean manufacturing"},
    {type:"work", date: "2016 - Aujourd’hui", job:" Développeur Python", company:"TWIN Group – Paris (75)", description: "Développement Python de scripts et d'outils de production pour le logiciel d'infographie Maya "},
]

class Experience extends React.Component{
    render(){
        return(
            <section id="experience">
                <div className="heading">
                    <h2>Expérience</h2>
                </div>
                <VerticalTimeline>
                    {experiencesData.reverse().map((experience, i)=>(
                        <VerticalTimelineElement
                            className={experience.type === "work"?"vertical-timeline-element--work":"vertical-timeline-element--education"}
                            iconStyle={experience.type ==="work"?{ background: 'rgb(33, 150, 243)', color: "white"}:{ background: ' rgb(245, 0, 87)', color: "white"}}
                            date ={experience.date}
                            icon={experience.type === "work"?<WorkIcon/>: <SchoolIcon/>}
                            key={i}
                        >
                            <h3 className="vertical-timeline-element-title">{experience.job}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                            <p>
                            {experience.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </section>
        )
    }
}

export default Experience;