import React, {Component} from 'react';

import './MessageAvatar.css';

class MessageAvatar extends Component {

    render(){

        return (

            <ul style={{marginBottom: '0', width: '40px'}} className={'list-unstyled'}>
                <li className={'d-block'}><img src={'http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg'} className={'avatar-size rounded-circle'}/></li>
                <li className={'d-block'}><span>{this.props.conversationOtherUserName}</span></li>
            </ul>


        )


    }


}

export default MessageAvatar