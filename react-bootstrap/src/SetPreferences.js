import React, {Component} from 'react'

import $ from "jquery";

import './CustomNav.css'

import './colors.css'

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import MessageAvatar from './MessageAvatar'

import { Nav, NavItem, NavLink } from 'reactstrap';


import Slider from 'material-ui/Slider';

import './slider.css'





class SetPreferences extends Component {




    render() {

        let optionsLowestAge = [];

        let optionsHighestAge = [];

        for (let i = 18; i < 101; i++){

            let numVale = `${i}`;

            optionsLowestAge.push(<option value={numVale} >{i}</option>);

            optionsHighestAge.push(<option value={numVale} >{i}</option>);

        }


        let theSkills = ['Acting', 'Drawing', 'Music', 'Writing', 'Programming', 'Videography'].sort();

        let theArts = ['Music', 'Game', 'Film', 'Graphic Novel', 'Youtube Channel'].sort();

        let SkillsOptionsJSX = [];

        let ArtsOptionsJSX = [];


        for (let i = 0; i < theSkills.length; i++) {

            if (this.props.skills.indexOf(theSkills[i]) === -1) {

                SkillsOptionsJSX.push(<div className="form-check">
                    <label className="form-check-label">
                        <input onChange={e => this.props.addSkill(e)} className="form-check-input" type="checkbox"
                               value={`${theSkills[i]}`}/> {theSkills[i]}
                    </label>
                </div>)

            }
            else {

                SkillsOptionsJSX.push(<div className="form-check">
                    <label className="form-check-label">
                        <input onChange={e => this.props.removeSkill(e)} className="form-check-input" type="checkbox"
                               value={`${theSkills[i]}`} checked/> {theSkills[i]}
                    </label>
                </div>)

            }

        }


        for (let i = 0; i < theArts.length; i++) {

            if (this.props.iWantToMake.indexOf(theArts[i]) === -1) {

                ArtsOptionsJSX.push(<div className="form-check">
                    <label className="form-check-label">
                        <input onChange={(e) => this.props.addArt(e)} className="form-check-input" type="checkbox"
                               value={`${theArts[i]}`}/> {theArts[i]}
                    </label>
                </div>);


            }

            else {

                ArtsOptionsJSX.push(<div className="form-check">
                    <label className="form-check-label">
                        <input onChange={(e) => this.props.removeArt(e)} className="form-check-input" type="checkbox"
                               value={`${theArts[i]}`} checked/> {theArts[i]}
                    </label>
                </div>)

            }

        }







        return (

                <section>






                    <nav className={"navbar dark-blue d-flex flex-row navbar-inverse bg-faded"}>




                            <button className="dark-blue burger-icon-style" onClick={this.handleOpen}><span style={{fontSize: '30px', cursor: 'pointer', color: '#ECEFF1'}}>&#9776;</span> </button>

                            <div className={'mx-auto navbar-brand'}>
                                Search Settings
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

                        <h1>Search Preferences</h1>

                        <form>


                        <h4 className={'my-5'}>Search for people who are {this.state.test} miles near you</h4>
                        <Slider
                            value={this.state.test}
                            min={100}
                            max={3600}
                            step={100}
                            onChange={(e) => this.props.handleDiscoveryMiles(e)}

                        />


                        <h4 className={'my-5'}> Search for people in the age range....</h4>

                        <div className="form-group inline">

                            <span htmlFor="lowestAge">From age</span>
                            <select className={'mx-3'} id={'lowestAge'}>
                                {optionsLowestAge}
                            </select>
                            <span>to age</span>
                            <select className={'mx-3'} id={'lowestAge'}>
                                {optionsHighestAge}
                            </select>

                        </div>

                            <h4 className={'my-5'}>Search for people with the following skills...</h4>


                            {SkillsOptionsJSX}

                            <h4 className={'my-5'}>Search for people who want to make a...</h4>

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


                            <button type="submit" className="mt-5 btn-block btn btn-primary">Save search preferences</button>
                        </form>
                        
                        
                        
                        <div className="my-5"></div>











                    </div>















                </div>

                </section>




    )




    }


}


export default SetPreferences;