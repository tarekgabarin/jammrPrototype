import React, {Component} from 'react';

import './Message.css'

import './colors.css'

class MessageSelf extends Component {

    render(){

        return (

            <div className={'p-2 text-light mb-4 mt-4 speech-bubble-self'}>

                <p>{this.props.text}</p>

            </div>


        )


    }



}

export default MessageSelf