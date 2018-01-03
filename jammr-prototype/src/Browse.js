import React, {Component} from 'react'

import $ from "jquery";

import './CustomNav.css'

import './colors.css'

import MessageAvatar from './MessageAvatar'

import {Redirect} from 'react-router-dom';

import UsersList from './UsersList'

import axios from 'axios';

import {Nav, NavItem, NavLink} from 'reactstrap';

class Browse extends Component {





    componentDidMount() {




        console.log('usersNearby in Browse is .....[See Below console.log]');



        console.log(this.props.usersNearby);




    }


    render() {

        if (window.sessionStorage.getItem('x-auth') === null) {

            return (

                <Redirect to={'/'}/>


            )

        }

        else if (this.props.currentConversationId !== '') {


            return (

                <Redirect to={'/message'}/>


            )

        }

        else {

            return (

                <section>


                    <nav className={"navbar dark-blue d-flex flex-row navbar-inverse bg-faded"}>


                        <button className="dark-blue burger-icon-style" onClick={() => this.props.handleOpen()}><span
                            style={{fontSize: '30px', cursor: 'pointer', color: '#ECEFF1'}}>&#9776;</span></button>

                        <div className={'mx-auto navbar-brand'}>
                            Jammr
                        </div>


                        <div className="d-flex justify-content-end">
                            <span>End</span>

                        </div>


                    </nav>


                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn"
                           onClick={() => this.props.handleClose()}>&times;</a>
                        <a onClick={() => this.props.handleLogOut()} href="#">Log Out</a>
                    </div>

                    <div onClick={this.handleClose} id="main">


                        <UsersList createConversation={this.props.createConversation}
                                   usersNearby={this.props.usersNearby}/>


                    </div>

                </section>




            )


        }

    }


}


export default Browse;
