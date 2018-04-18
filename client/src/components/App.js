import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import LoginPage from "./login/LoginPage"
class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <FlashMessagesList/>
        <LoginPage />
        {this.props.children}
      </div>
    );
  }
}
export default App;
