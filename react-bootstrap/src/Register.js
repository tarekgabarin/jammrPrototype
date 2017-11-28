import React, {Component} from 'react';

import CheckOptionItemSkill from './CheckOptionItemSkill';

import CheckOptionsItemArt from './CheckOptionItemArt';


import {Redirect} from 'react-router-dom';

class Register extends Component {

    //
    // componentDidUpdate() {
    //
    //
    //     if (window.localStorage.getItem('x-auth') !== null) {
    //
    //         return (
    //
    //             <Redirect to={'/find'}/>
    //
    //
    //         )
    //
    //     }
    //
    //
    // }

    componentDidUpdate() {

        console.log('this.props.usersNearby is....');

        console.log(this.props.usersNearby);

        console.log('this.props.usersNearby.length is...' + this.props.usersNearby.length);




    }


    render() {

        if (this.props.usersNearby.length > 0) {

            return (

                <Redirect to={'/find'}/>

            )

        }

        // console.log('Below is this.props');
        //
        // console.log(this.props);


        let inputSkills = [];

        let inputArt = [];


        let optionsList = [];


        for (let i = 18; i < 101; i++) {

            let numVale = `${i}`;

            optionsList.push(<option value={numVale}>{i}</option>)

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

            <div className={'container'}>

                <h1>Register</h1>

                <div className="m-5 row">


                </div>


                <h3 className={'mb-3'}> Set your email and password</h3>

                <form onSubmit={(e) => this.props.checkIfAllRegistrationFilled(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={(e) => this.props.handleEmailInput(e)} type="email" className="form-control"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">You can enter a fake email and password
                            to test out this application (i.e. poop@gmail.com).
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={(e) => this.props.handlePasswordInput(e)} type="password"
                               className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>


                    <h3 className={'my-5'}>Personal Info</h3>

                    <h5 className={'mb-2'}>I have the following skills...</h5>

                    {SkillsOptionsJSX}


                    <h5 className={'mt-5 mb-2'}>My full name is....</h5>

                    <div className="row">
                        <div className="col">
                            <input onChange={(e) => this.props.handleFirstNameInput(e)} type="text"
                                   className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col">
                            <input onChange={(e) => this.props.handleLastNameInput(e)} type="text"
                                   className="form-control" placeholder="Last name"/>
                        </div>
                    </div>


                    <h5 className={'mt-5 mb-2'}>I want to make a...</h5>

                    {ArtsOptionsJSX}

                    <h5 className={'mt-5 mb-2'}>My age is...</h5>

                    <select onChange={(e) => this.props.handleAgeInput(e)} className="form-control">
                        {optionsList}
                    </select>

                    <h5 className={'mt-5 mb-2'}>My gender is...</h5>

                    <div onChange={(e) => {

                        this.props.handleGenderInput(e)

                    }} className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Male"
                                   value="Male"/> Male
                        </label>
                    </div>
                    <div onChange={(e) => this.props.handleGenderInput(e)} className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Female"
                                   value="Female"/> Female
                        </label>
                    </div>

                    <h5 className={'mt-5 mb-2'}>My location is...</h5>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03">City</label>
                            <input onChange={(e) => this.props.handleCityInput(e)} type="text" className="form-control"
                                   id="validationCustom03" placeholder="City" required/>
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">Province</label>

                            <select onChange={e => this.props.handleProvinceInput(e)} className="form-control"
                                    id={'validationCustom04'}>
                                <option value={'Ontario'}>Ontario</option>
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
                            <label htmlFor="validationCustom05">Address</label>
                            <input onChange={(e) => this.props.handleAddressInput(e)} type="text"
                                   className="form-control" id="validationCustom05" placeholder="Address" required/>
                            <div className="invalid-feedback">
                                Please provide a valid Address.
                            </div>
                        </div>
                    </div>


                    <button type="submit" className="mt-5 btn-block btn btn-primary">Submit</button>
                </form>


            </div>


        )


    }


}

export default Register


