import React, { Component } from 'react';
import '../App.css';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Course from './CourseCompoent';
import { DATASCIENCE } from './../data/datascience';
import { LINKS } from './../data/links';
import Footer from './FooterComponent';
import { Switch, Router, Redirect, Route } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datascience: DATASCIENCE,
      links: LINKS
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route path="/home" component={() => <Home datascience={this.state.datascience} />} />
            <Route path="/course" component={Course} />
            <Redirect to="/home" />
        </Switch>
        <Footer links={this.state.links}  />
      </div>
    );
  }
}

export default Main;
