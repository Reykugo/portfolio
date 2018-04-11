import React from "react";
//import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import WorkIcon from '../images/workIcon';
import 'react-vertical-timeline-component/style.min.css';
import '../css/Experience.css'

//only for test
const experiencesData = [
    {date: "Novembre 2010", job:"Modéliste (stagiaire)", company:"Novalys - Poissy (78)", description: "Modélisation 3D d’une coupe carrelage sur le logiciel Catia V5"},
    {date: "2015 à 2016", job:"Développeur Python", company:"Corp-Lean – Triel sur Seine (78)", description: "Développement d'une application Python de gestion de temps pour l'industrie basé sur le Lean manufacturing"},
    {date: "2016 à Aujourd’hui", job:" Développeur Python", company:"TWIN Group – Paris (75)", description: "Développement Python de scripts et d'outils de production pour le logiciel d'infographie Maya "},
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
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: "white"}}
                            date ={experience.date}
                            icon={<WorkIcon/>}
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