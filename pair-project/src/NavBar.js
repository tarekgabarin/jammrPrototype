import React, {Component} from 'react'

import {NavLink} from 'react-router-dom';

class NavBar extends Component {

    render() {

        return (

            <nav className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><NavLink to="/"> Home </NavLink></li>
                        <li className="uk-parent"><NavLink to="/cart"> Shopping Cart { this.props.numOfItems } </NavLink></li>
                    </ul>
                </div>
            </nav>


        )


    }



}

export default NavBar