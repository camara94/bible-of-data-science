import React, { Component } from 'react';
import '../App.css';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Course from './CourseCompoent';
import { DATASCIENCE } from './../data/datascience';
import { MODULEONE } from './../data/moduleone';
import { LINKS } from './../data/links';
import Footer from './FooterComponent';
import { Switch, Redirect, Route } from 'react-router-dom';



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datascience: DATASCIENCE,
      moduleone: MODULEONE,
      links: LINKS
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route path="/home" component={() => <Home datascience={this.state.datascience} />} />
            <Route path="/course" component={() => <Course moduleone={this.state.moduleone} />} />
            <Redirect to="/home" />
        </Switch>
        <Footer links={this.state.links}  />
      </div>
    );
  }
}

export default Main;
