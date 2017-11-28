import React, {Component} from 'react'

import {Redirect, Link} from 'react-router-dom';

class Login extends Component {




    componentDidMount(){





    }




    render() {


        if (window.sessionStorage.getItem('x-auth') !== null) {

            return (

                <Redirect to={'/find'}/>


            )

        }




            let formFeedBackJSX = [];

            if (this.props.incorrectForm) {

                formFeedBackJSX.push(<span className="text-danger align-middle">
                        Wrong password there, bud
                        </span>)

            }
            else {

                formFeedBackJSX.push(<span className={'align-middle'}></span>)


            }


            return (

                <div className="container">

                    <form onSubmit={(e) => this.props.handleLogin(e)} className="form-horizontal">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <h2>Please Login</h2>
                                <hr/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="form-group has-danger">
                                    <label className="sr-only" htmlFor="email">E-Mail Address</label>
                                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div className="input-group-addon" style={{width: '2.6rem'}}><i
                                            className="fa fa-at"></i></div>
                                        <input onChange={(e) => {

                                            this.props.handleEmailInput(e);


                                        }} type="text" name="email" className="form-control"
                                               placeholder="you@example.com" required autoFocus/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-control-feedback">
                        <span className="text-danger align-middle">
                            <i className="fa fa-close"></i> Example error message
                        </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="password">Password</label>
                                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div className="input-group-addon" style={{width: '2.6rem'}}><i
                                            className="fa fa-key"></i></div>
                                        <input id={'loginPassword'} onChange={(e) => {


                                            this.props.handlePasswordInput(e);

                                        }} type="password" name="password" className="form-control"
                                               placeholder="Password" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-control-feedback">
                                    {formFeedBackJSX}
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{paddingTop: '1rem'}}>
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-success"><i className="fa fa-sign-in"></i>
                                    Login
                                </button>

                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-3">


                            </div>

                            <div className="col-md-6">




                                <Link className={'btn btn-link'} to={'/register'}>

                                    Don't have an account? Register and make one!

                                </Link>

                            </div>


                        </div>

                    </form>


                </div>



            )




    }



}

export default Login