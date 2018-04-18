import React, {Component} from 'react';
import Proptypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup';
import {connect} from 'react-redux'
import {login} from '../../redux/actions/authentication';
import {addFlashMessage} from '../../redux/actions/flashMessages'

class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password: "",
            error: '',
            isLoading: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({error: '', isLoading: true});
        this.props.login(this.state).then(
            (res) => {
                this.setState({isLoading:false});
                document.getElementById("loginHidebtn").click()
            },
            (err) => {
                this.setState({isLoading:false});
                this.props.addFlashMessage({type:'error', text: err.response.data.error})
            }
        );
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const {username, password, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                    field="username"
                    label="Username"
                    value={username}
                    onChange={this.onChange}
                />
                <TextFieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                />
                <div className="form-group"><button disabled={isLoading} className="btn btn-primary btn-lg">Login</button></div>
            </form>
        )
    }
}

LoginForm.propTypes ={
    login: Proptypes.func.isRequired,
    addFlashMessage: Proptypes.func.isRequired
}

export default connect(null, {login, addFlashMessage})(LoginForm);