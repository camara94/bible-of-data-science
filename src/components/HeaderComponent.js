import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap';

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
                        <NavbarBrand href="/"><img src="images/mylogo.png"  width="60" alt="logo"/></NavbarBrand>
                        <NavbarToggler  className="bg-primary" onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.navOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"><i className="fa fa-home fa-lg"> Home</i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"><i className="fa fa-info fa-lg"> About</i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"><i class="fa fa-certificate fa-lg"> Course</i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"><i className="fa fa-id-card fa-lg"> Contact</i></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}

export default Header;