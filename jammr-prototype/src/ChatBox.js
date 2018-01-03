import React, {Component} from 'react'

import MessageInput from './MessageInput'

import MessageList from './MessageList'

import io from 'socket.io-client';
//
const socket = io('http://localhost:8080');

class ChatBox extends Component {

    // componentWillMount(){
    //
    //     this.props.getMyInfo();
    //
    //
    // }
    //
    // componentWillUpdate(){
    //
    //     this.props.getMyInfo();
    //
    // }


//////// THis only runs once

    componentDidMount(){



        console.log('Below is this.props.currentConversationId....');

        console.log(this.props.currentConversationId);

        this.props.socket.emit('message', this.props.currentConversationId);

        this.props.socket.on('serverMessages', (messagesReceived) => {

            console.log('received messages on the front end', messagesReceived);

            this.props.getMessages(messagesReceived);

            // this.setState({
            //     messages: messagesReceived
            // })
        })

    }

    

    // componentWillReceiveProps(nextProps){
    //
    //     socket.emit('message', this.props.currentConversationId);
    //
    //     socket.on('serverMessages', (messagesReceived) => {
    //
    //         console.log('received messages on the front end', messagesReceived);
    //
    //        /// this.props.getMessages(messagesReceived);
    //
    //         if (nextProps.messages.length > messagesReceived){
    //
    //             this.setState({messages: nextProps.messages})
    //
    //         }
    //
    //
    //         // this.setState({
    //         //     messages: messagesReceived
    //         // })
    //     })
    //
    //
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState){
    //
    //
    //
    //
    // }

    render(){

        // socket.emit('message', this.props.currentConversationId);
        //
        // let MessagesJSX;
        //
        // socket.on('serverMessages', (messagesReceived) => {
        //
        //
        //
        //
        // });


        return (


            <div>


                 <MessageList id={'messagesId'} style={{overflow: 'hidden'}} myId={this.props.myId} messages={this.props.messages}/>

                <MessageInput conversationOtherUserId={this.props.conversationOtherUserId} sendMessage={this.props.sendMessage} userId={this.props.myId} handleMessageInput={this.props.handleMessageInput} />



            </div>




        )


    }

}

export default ChatBox;