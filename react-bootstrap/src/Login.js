import React, {Component} from 'react'

class Login extends Component {

    render(){


        return (

            <div className="container">

                <form className="form-horizontal">
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
                                <label className="sr-only" for="email">E-Mail Address</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div class="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-at"></i></div>
                                    <input type="text" name="email" class="form-control" id="email"
                                           placeholder="you@example.com" required autofocus/>
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
                                <label className="sr-only" for="password">Password</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-key"></i></div>
                                    <input type="password" name="password" className="form-control" id="password"
                                           placeholder="Password" required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                        <span className="text-danger align-middle">
                        Wrong password there, bud
                        </span>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '1rem'}}>
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-success"><i className="fa fa-sign-in"></i> Login</button>

                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-3">


                        </div>

                        <div className="col-md-6">

                            <a className="btn btn-link">Don't have an account? Register and make one!</a>

                        </div>



                    </div>

                </form>





            </div>



        )


    }



}

export default Login