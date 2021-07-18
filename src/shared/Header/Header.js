import React, { Component } from 'react';
import {FaUsers, FaComments, FaUserCircle} from 'react-icons/fa';
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import './Header.css';
import asychron from '../../assets/images/asychron.jpg';

class Header extends Component {
    render(){
        return(
            <div>
   <Navbar expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href=" / "> 
                <div className="Logo">
            <img src={asychron} alt="Asychron-Logo" />
        </div>
        </Navbar.Brand>
               
               <Nav className="Navigation">
                 
                   <FaUsers className="svg svgfa" />
                   <FaComments className="svg svgfa" />
                   <FaUserCircle className="svg svgfa" />
                    
                </Nav>
            </Navbar>
</div>
        );
    };
}

export default Header;