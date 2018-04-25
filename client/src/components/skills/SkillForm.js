import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSkill, deleteSkill} from '../../redux/actions/sendData';
import {getSkills} from '../../redux/actions/getData';
import {addFlashMessage} from '../../redux/actions/flashMessages'
import TextFieldGroup from '../common/TextFieldGroup';
import FlashMessagesList from '../flash/FlashMessagesList';

class SkillForm extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            name: this.props.skill.name,
            img: this.props.skill.img,
            alt: this.props.skill.alt,
            description: this.props.skill.description,
            category: this.props.category,
            isLoading: false
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onDelete(e){
        e.preventDefault();
        this.setState({error: '', isLoading: true});
        this.props.deleteSkill(this.state.name, this.state.category).then(
            (res) =>{
                this.setState({isLoading: false});
                this.props.getSkills();
                document.getElementById(this.props.id + "hidebtn").click()
            },
            (err) => {
                this.setState({isLoading:false});
                this.props.addFlashMessage({type:'error', text: err.response.data.error})
            }
        )
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({error: '', isLoading: true});
        let skill = {name:this.state.name, img:this.state.img, alt:this.state.alt, description:this.state.description}
        this.props.setSkill(skill, this.state.category).then(
            (res) => {
                this.setState({isLoading: false});
                if(this.props.mode === "create"){
                    this.setState({name:"", img:"", alt:"", description:"", category:""});
                }
                this.props.getSkills();
                document.getElementById(this.props.id + "hidebtn").click()
            },
            (err) => {
                this.setState({isLoading:false});
                this.props.addFlashMessage({type:'error', text: err.response.data.error})
            }
        )
    }
    render(){
        const {name, img, alt, description,category, isLoading} = this.state;
        const {isAuthenticated} = this.props.auth;
        return(
            <div className="modal fade" id={this.props.id} role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            {this.props.mode ==="edit" ? <h4 className="modal-title">{name}</h4>: <TextFieldGroup field="name" label="Name" onChange = {this.onChange} value={name}/>}
                            <button id={this.props.id + "hidebtn"} type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <FlashMessagesList />
                            {this.props.mode ==="create" &&  <TextFieldGroup field="category" label="Category" onChange = {this.onChange} value={category}/>}
                            <TextFieldGroup field="img" label="Image" onChange = {this.onChange} value={img}/>
                            <TextFieldGroup field="alt" label="Alt" onChange = {this.onChange} value={alt}/>
                            <textarea form={this.props.id + "TextAreaForm"} className="form-control" rows="5" name="description" value={description} onChange={this.onChange}></textarea>
                        </div>
                        <div className="modal-footer">
                            <form onSubmit={this.onSubmit} id={this.props.id + "TextAreaForm"}>
                                <div className="form-group"><button disabled={isLoading} className="btn btn-primary btn-sm">Apply</button></div>
                            </form>
                            {isAuthenticated && this.props.mode === "edit" &&
                                <form onSubmit={this.onDelete}>
                                    <div className="form-group"><button disabled={isLoading} className="btn btn-danger btn-sm">Delete</button></div>
                                </form>
                            }
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
    mode: PropTypes.string.isRequired,
    setSkill: PropTypes.func.isRequired,
    deleteSkill: PropTypes.func.isRequired,
    getSkills: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps, {setSkill, deleteSkill, getSkills, addFlashMessage})(SkillForm);