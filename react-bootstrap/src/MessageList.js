import React, {Component} from 'react'

import MessageSelf from './MessageSelf'

import MessageOther from './MessageOther'

import './MessageList.css'

class MessageList extends Component {

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollIntoView({ behaviour: 'smooth' });
    }




    render(){

        console.log('below is this.props.myId');

        console.log(this.props.myId);

        console.log('below is this.props.messages');

        console.log(this.props.messages);

        // let MessagesJSX = [];
        //
        // for (let i = 0; i < this.props.messages.length; i++){
        //
        //     if(this.props.messages[i].sentBy === this.props.userId){
        //
        //         MessagesJSX.push(<MessageSelf text={this.props.messages[i].text}/>)
        //
        //     }
        //     else {
        //
        //         MessagesJSX.push(<MessageOther text={this.props.messages[i].text} />)
        //
        //     }
        //
        // }

        let MessagesJSX = this.props.messages.map((val) => {

            if (val.sentBy === this.props.myId){

                console.log('val.messageSent is...' + val.messageSent);

                return <MessageSelf text={val.messageSent} />

            }
            else {

                console.log('val.messageSent is...' + val.messageSent);

                return <MessageOther text={val.messageSent}/>

            }

        });


        return (

            <div className="container">

                <div className="row">

                    <div className="col-sm-1">


                    </div>

                    <div className="col-sm-10">


                        <div className="m-2 row">


                        </div>


                            {MessagesJSX}


                        <div className="m-5 row">


                        </div>


                            <div ref={el => { this.el = el; }}></div>

                    </div>

                    <div className="col-sm-1">


                    </div>




                </div>



            </div>

        )


    }

}

export default MessageList