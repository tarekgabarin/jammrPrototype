

import React, {Component} from 'react'

import './MessageInput.css'

import './colors.css'

class MessageInput extends Component {




    render(){

        return (


            <div style={{height:'90px', backgroundColor: '#ECEFF1'}} className="fixed-bottom justify-content-start row">

                <div  className="text-box col-9 col-sm-10">

                    <div className="container">

                        <div className="form-group">

                            <textarea id={'noStyle'} placeholder={'Enter text here...'} className="form-control" rows="3"></textarea>



                        </div>


                    </div>


                </div>

                <div  className="col-3 rounded-0 mr-0 text-box btn col-sm-2">



                        <button type="button" className="btn pr-2 d-sm-none btn-outline-primary">Send</button>

                    <div className="container">
                        <button type="button" className="btn btn-block d-none d-sm-block btn-outline-primary">Send</button>

                    </div>










                </div>

            </div>


        )


    }


}

export default MessageInput