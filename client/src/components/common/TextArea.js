import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {addFlashMessage} from '../../redux/actions/flashMessages'

class TextArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            description: props.content
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({isLoading: true});
        const propertyName = this.props.propertyName
        var jsonVar = {}
        jsonVar[propertyName] = this.state.description
        this.props.setDescription(jsonVar).then(
            (res) => {
                this.setState({isloading:false});
                this.props.isEdited();
            },
            (err) => {
                this.setState({ isLoading:false})
                console.log(err.response.data.error)
                this.props.addFlashMessage({type:"error", text:err.response.data.error})
            }
        );
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        const {description, isLoading} = this.state;
        return(
            <div className="container">
                <textarea form="TextAreaForm" className="form-control" rows="5" name="description" value={description} onChange={this.onChange}></textarea>
                <form onSubmit={this.onSubmit} id="TextAreaForm">
                    <div className="form-group"><button disabled={isLoading} className="btn btn-primary btn-sm">Update</button></div>
                </form>
            </div>
        )
    }
}

TextArea.propTypes = {
    content: PropTypes.string.isRequired,
    setDescription: PropTypes.func.isRequired,
    propertyName: PropTypes.string.isRequired,
    isEdited:PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, {addFlashMessage})(TextArea);
