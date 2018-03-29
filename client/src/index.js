import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import store from './redux/Store';
import Routes from './routes';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import {setCurrentUser} from './redux/actions/authentication';

if (localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <App/>
            <Routes/>
        </div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('app')
)