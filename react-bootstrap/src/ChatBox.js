import React, {Component} from 'react'

import MessageInput from './MessageInput'

import MessageList from './MessageList'

class ChatBox extends Component {

    componentDidMount(){



    }

    render(){


        return (


            <div>


                <MessageList id={'messagesId'} style={{overflow: 'hidden'}} userId={this.props.userId} messages={this.props.messages}/>



            </div>




        )


    }

}

export default ChatBox;