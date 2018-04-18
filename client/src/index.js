import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './redux/Store';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import {setCurrentUser} from './redux/actions/authentication';

if (localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
)