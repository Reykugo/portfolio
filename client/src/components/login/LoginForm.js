import React, {Component} from 'react';
import Proptypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup';
import {connect} from 'react-redux'
import {login} from '../../redux/actions/authentication';
import {Redirect} from 'react-router-dom';

class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password: "",
            error: '',
            isLoading: false,
            redirect: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({error: '', isLoading: true});
        this.props.login(this.state).then(
            (res) => this.setState({redirect: true}),
            (err) => this.setState({error: err.response.data, isLoading:false})
        );
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const {username, password, isLoading, error} = this.state;
        if (this.state.redirect){
            return(
                <Redirect to="/" push={true}/>
            )
        }
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>

                {error && <div disabled={isLoading} className="alert alert-danger">{error} </div>}

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
                <div className="form-group"><button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Login</button></div>
            </form>
        )
    }
}

LoginForm.propTypes ={
    login: Proptypes.func.isRequired
}

export default connect(null, {login})(LoginForm);