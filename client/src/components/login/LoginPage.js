import React, {Component} from 'react';
import LoginForm from './LoginForm'

class LoginPage extends Component{
    render(){
        return (
            <div className="modal fade" id="loginModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">LOGIN</h4>
                            <button id={"loginHidebtn"} type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                            <div className="modal-body">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;