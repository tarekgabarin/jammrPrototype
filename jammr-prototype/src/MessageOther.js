import React, {Component} from 'react'

import './Message.css'

import './colors.css'

class MessageOther extends Component {

    render() {

        return (

            <div  className={'p-2 mb-4 text-light mt-4 speech-bubble-other'} >

                <p>{this.props.text}</p>

            </div>

        )


    }

}

export default MessageOther

