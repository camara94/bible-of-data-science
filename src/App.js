import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NabarBrand, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
import Header from './components/HeaderComponent';
import { DATASCIENCE } from './data/datascience';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datascience: DATASCIENCE
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home datascience={this.state.datascience} />
      </div>
    );
  }
}

export default App;
