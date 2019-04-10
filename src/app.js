import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./app.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World!</h1>
        This is a simple react project with basic set up for webpack!
        That just about covers everything you need to be able to render a basic React app, without having to touch create-react-app
      </div>
    );
  }
}

export default hot(module)(App);