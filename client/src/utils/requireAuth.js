import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addFlashMessage} from '../redux/actions/flashMessages';
import {Redirect} from 'react-router-dom';

export default function(ComposedComponent){
    class Authenticate extends Component{
        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'you need to login to access this page'
                });
                //this.context.router.history.push('/login');
                
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                return <Redirect to="/login" push/>
            }
        }

        render(){
            if(!this.props.isAuthenticated){
                return <Redirect to="/login" push/>
            }else{
                return(
                    <ComposedComponent {...this.props}/>
                 )
            }
            
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        addFlashMessage: PropTypes.func.isRequired
    }

    /*Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }*/
    
    function mapStatetoProps(state){
        return{
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStatetoProps, {addFlashMessage})(Authenticate);
}
