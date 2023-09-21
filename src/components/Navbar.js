import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import React, { Component } from 'react'

export class NavBar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <div className="NavbarItems">
                    <h1 className="nav-logo">TravelToday</h1>

                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        <li><Link to="/" className="nav-links"><i className="fa-solid fa-house"></i>Home</Link></li>
                        <li><Link to="/about" className="nav-links"><i className="fa-solid fa-user"></i>About</Link></li>
                        <li><Link to="/service" className="nav-links"><i className="fa-solid fa-server"></i>Service</Link></li>
                        <li><Link to="/contact" className="nav-links"><i className="fa-solid fa-address-book"></i>Conatct</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default NavBar