import React, {Component} from 'react'

import $ from "jquery";

import './CustomNav.css'

import './colors.css'

import MessageAvatar from './MessageAvatar'

import { Nav, NavItem, NavLink } from 'reactstrap';

import UserCard from './UserCard'

import UsersList from './UsersList'

import './CustomIcon.css'

import MessageInput from './MessageInput'

import ChatBox from './ChatBox'


class MessageComponent extends Component {

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






                    <nav className={"navbar dark-blue d-flex fixed-top flex-row navbar-inverse bg-faded"}>




                            <button className="dark-blue burger-icon-style" onClick={this.handleOpen}><span style={{fontSize: '30px', cursor: 'pointer', color: '#ECEFF1'}}>&#9776;</span> </button>

                            <div className={'mx-auto'}>  <MessageAvatar/>
                            </div>


                            <div className="d-flex justify-content-end">

                                <button className="dark-blue burger-icon-style"><i className="custom-icon">&#xE14B;</i></button>

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



                    <ChatBox messages={this.props.messages} userId={this.props.userId}/>

                    <MessageInput className={'fixed-bottom'}/>




            </div>


                </section>




    )




    }


}


export default MessageComponent;