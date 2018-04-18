import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import LoginPage from "./login/LoginPage";
import Home from "./Home"
import Profile from './profile/Profile'
import Skills from './skills/Skills'
import Experience from "./Experience"
import Contact from "./Contact";
import "../css/App.css"
import  '../css/Popup.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <LoginPage />
        
        <Home/>
        <Profile/>
				<Skills/>
				<Experience/>
        <Contact/>
        
        {this.props.children}
      </div>
    );
  }
}
export default App;
