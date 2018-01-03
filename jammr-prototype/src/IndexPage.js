import React, {Component} from 'react'

import Login from './Login';

import Browse from './Browse';


class IndexPage extends Component {

    render(){

        console.log('this.props.isLoggedIn is...' + this.props.isLoggedIn);

        if (this.props.isLoggedIn){

            return (
                 <Login incorrectForm={this.props.incorrectForm} handlePasswordInput={this.props.handlePasswordInput} handleEmailInput={this.props.handleEmailInput} handleLogin={this.props.handleLogin}  />

            )
        }
        else {

            return (

                <Browse/>
            )

        }


    }

}

export default IndexPage