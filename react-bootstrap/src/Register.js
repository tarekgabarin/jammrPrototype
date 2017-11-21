import React, {Component} from 'react'


class Register extends Component {

    render() {


        let optionsList = [];


        for (let i = 18; i < 101; i++){

            let numVale = `${i}`;

            optionsList.push(<option value={numVale} >{i}</option>)

        }

        return (

            <div className={'container'}>

                <h1>Register</h1>

                <div className="m-5 row">


                </div>


                <h3 className={'mb-3'}> Set your email and password</h3>

                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">You can enter a fake email and password
                            to test out this application (i.e. poop@gmail.com).
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>



                    <h3 className={'my-5'}>Personal Info</h3>

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


                    <h5 className={'mt-5 mb-2'}>Upload your profile pic...</h5>

                    <div className="form-group">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>












                    <button type="submit" className="mt-5 btn-block btn btn-primary">Submit</button>
                </form>


            </div>


        )


    }


}

export default Register


