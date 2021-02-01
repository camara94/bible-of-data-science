import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NabarBrand, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
              <div className="row">
                  <NavbarBrand href="/">Bible Of Data Science</NavbarBrand>
              </div>
            </div>
        </Navbar>
        <Home />
      </div>
    );
  }
}

export default App;
