import React, {Component} from 'react'

import $ from "jquery";

import './CustomNav.css'

import './colors.css'

import MessageAvatar from './MessageAvatar'

import { Nav, NavItem, NavLink } from 'reactstrap';

class CustomNav extends Component {

    constructor(){

        super();

        this.state = {

            openNav: true,

            showNav: 'message'

        };

        this.handleOpen = this.handleOpen.bind(this);

        this.handleClose = this.handleClose.bind(this);


    }

    handleOpen(){

        document.getElementById("mySidenav").style.width = "250px";



    }

    handleClose(){

        document.getElementById("mySidenav").style.width = "0";


    }




    render() {






            return (

                <section>






                    <nav className={"navbar dark-blue d-flex flex-row navbar-inverse bg-faded"}>




                            <button className="dark-blue burger-icon-style" onClick={this.handleOpen}><span style={{fontSize: '30px', cursor: 'pointer', color: '#ECEFF1'}}>&#9776;</span> </button>

                            <div className={'mx-auto navbar-brand'}>
                                Jammr
                            </div>


                            <div className="d-flex justify-content-end">
                                <span>End</span>

                            </div>








                    </nav>



                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.handleClose}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

                    <div onClick={this.handleClose} id="main">




                    </div>

                </section>




    )




    }


}


export default CustomNav;