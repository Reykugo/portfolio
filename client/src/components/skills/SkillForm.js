import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSkill} from '../../redux/actions/sendData';
import {getSkills} from '../../redux/actions/getData';
import {addFlashMessage} from '../../redux/actions/flashMessages'
import TextFieldGroup from '../common/TextFieldGroup';

class SkillForm extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: this.props.skill.name,
            img: this.props.skill.img,
            alt: this.props.skill.alt,
            description: this.props.skill.description,
            isLoading: false
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({error: '', isLoading: true});
        let skill = {name:this.state.name, img:this.state.img, alt:this.state.alt, description:this.state.description}
        this.props.setSkill(skill, this.props.category).then(
            (res) => {
                this.setState({isLoading: false});
                this.props.getSkills();
                document.getElementById("hideModalbtn").click()
            },
            (err) => {
                this.setState({isLoading:false});
                this.props.addFlashMessage({type:'error', text: err.response.data.error})
            }
        )
    }
    render(){
        const {name, img, alt, description, isLoading} = this.state
        return(
            <div className="modal fade" id={this.props.id} role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <TextFieldGroup field="name" label="Name" onChange = {this.onChange} value={name}/>
                            <button id="hideModalbtn" type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            
                            <TextFieldGroup field="img" label="Image" onChange = {this.onChange} value={img}/>
                            <TextFieldGroup field="alt" label="Alt" onChange = {this.onChange} value={alt}/>
                            <textarea form="TextAreaForm" className="form-control" rows="5" name="description" value={description} onChange={this.onChange}></textarea>
                            <form onSubmit={this.onSubmit} id="TextAreaForm">
                                <div className="form-group"><button disabled={isLoading} className="btn btn-primary btn-sm">Apply</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SkillForm.propTypes = {
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    skill: PropTypes.object.isRequired,
    isEdit: PropTypes.bool.isRequired,
    setSkill: PropTypes.func.isRequired,
    getSkills: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, {setSkill,getSkills, addFlashMessage})(SkillForm);