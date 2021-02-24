import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            navOpen:true
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav = () => {
        this.setState({navOpen: !this.state.navOpen});
    }
    

    render() {
        return(
            <>
                <Navbar expand="md" className="navbar-dark">
                    <div className="container">
                        <NavbarBrand href="/home"><img src="images/mylogo.png"  width="60" alt="logo"/></NavbarBrand>
                        <NavbarToggler  className="bg-primary" onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.navOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><i className="fa fa-home fa-lg"> Home</i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about"><i className="fa fa-info fa-lg"> About</i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/course"><i class="fa fa-certificate fa-lg"> Course</i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact"><i className="fa fa-id-card fa-lg"> Contact</i></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 row-header">
                                    <h1>Bible Of Data Scientist</h1>
                                    <p>
                                    In the end you should only measure and look at the numbers that drive action, meaning that the data tells you what you should do next.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
            </>
        )
    }
}

export default Header;