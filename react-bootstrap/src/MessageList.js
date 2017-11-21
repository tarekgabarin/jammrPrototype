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

        let MessagesJSX = [];

        for (let i = 0; i < this.props.messages.length; i++){

            if(this.props.messages[i].sentBy === this.props.userId){

                MessagesJSX.push(<MessageSelf text={this.props.messages[i].text}/>)

            }
            else {

                MessagesJSX.push(<MessageOther text={this.props.messages[i].text} />)

            }

        }

        // let MessagesJSX = this.props.messages.map(function (val) {
        //
        //     if (val.sentBy === this.props.userId){
        //
        //         return <MessageSelf text={val.text} />
        //
        //     }
        //     else {
        //
        //         return <MessageOther text={val.text}/>
        //
        //     }
        //
        // });


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