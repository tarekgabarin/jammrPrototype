import React, {Component} from 'react'

import $ from "jquery";

import './CustomNav.css'

import './colors.css'

import MessageAvatar from './MessageAvatar'

import { Nav, NavItem, NavLink } from 'reactstrap';

class MyAccount extends Component {

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

        let optionsList = [];


        for (let i = 18; i < 101; i++){

            let numVale = `${i}`;

            optionsList.push(<option value={numVale} >{i}</option>)

        }






            return (

                <section>






                    <nav className={"navbar dark-blue d-flex flex-row navbar-inverse bg-faded"}>




                            <button className="dark-blue burger-icon-style" onClick={this.handleOpen}><span style={{fontSize: '30px', cursor: 'pointer', color: '#ECEFF1'}}>&#9776;</span> </button>

                            <div className={'mx-auto navbar-brand'}>
                                My Profile
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

                    <div className="container">

                        <h1 className={'my-5'}>Edit your profile information</h1>

                        <form action="">

                            <h5 className={'mb-2'}>I have the following skills...</h5>


                            <div className="form-check ">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"  value="Acting"/>
                                    Acting
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="Drawing"/>
                                    Drawing
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"  value="Music"/>
                                    Music
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                           value="Programming"/> Programming
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                           value="Videography"/> Videography
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"  value="Writing"/>
                                    Writing
                                </label>
                            </div>

                            <h5 className={'mt-5 mb-2'}>My full name is....</h5>

                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name"/>
                                </div>
                            </div>


                            <h5 className={'mt-5 mb-2'}>I want to make a...</h5>

                            <div className="form-check ">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="Graphic Novel"/>
                                    Graphic Novel
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"  value="Game"/>
                                    Game
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="Film"/>
                                    Film
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                           value="Youtube Channel"/> Youtube Channel
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                           value="Music"/> Music
                                </label>
                            </div>

                            <h5 className={'mt-5 mb-2'}>My age is...</h5>

                            <select className="form-control">
                                {optionsList}
                            </select>

                            <h5 className={'mt-5 mb-2'}>My gender is...</h5>

                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/> Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/> Female
                                </label>
                            </div>

                            <h5 className={'mt-5 mb-2'}>My location is...</h5>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom03">City</label>
                                    <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="validationCustom04">Province</label>

                                    <select className="form-control" id={'validationCustom04'}>
                                        <option value={'Ontario'} >Ontario</option>
                                        <option value="Quebec">Quebec</option>
                                        <option value="Manitoba">Manitoba</option>
                                        <option value="Saskatchewan">Saskatchewan</option>
                                        <option value="Alberta">Alberta</option>
                                        <option value="British Columbia">British Columbia</option>
                                        <option value="Yukon">Yukon</option>
                                        <option value="Northwest Territories">Northwest Territories</option>
                                        <option value="Nunavut">Nunavut</option>
                                        <option value="Newfoundland And Labrador">Newfoundland And Labrador</option>
                                        <option value="New Brunswick">New Brunswick</option>
                                        <option value="Nova Scotia">Nova Scotia</option>
                                        <option value="Prince Edward Island">Prince Edward Island</option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="validationCustom05">Postal Code</label>
                                    <input type="text" className="form-control" id="validationCustom05" placeholder="Postal Code" required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                            </div>


                            <h5 className={'mt-5 mb-2'}>Change your profile pic...</h5>

                            <div className="form-group">
                                <label for="exampleFormControlFile1">Example file input</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                            </div>












                            <button type="submit" className="mt-5 btn-block btn btn-primary">Save your changes</button>



                        </form>





                    </div>

            </div>

                </section>




    )




    }


}


export default MyAccount;