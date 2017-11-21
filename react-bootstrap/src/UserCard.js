import React, {Component} from 'react'

import './UserCard.css'

import './CustomIcon.css'

class UserCard extends Component {

    render(){

        return (



            <div className="custom-card">

                <div className="container">

                    <div className="d-flex flex-row justify-content-between row">


                        <div className="p-2">

                            <h3>Doge</h3>

                        </div>


                        <div>

                            <i className="pt-1 custom-icon">&#xE14C;</i>

                        </div>



                    </div>

                    <div className="d-flex flex-row justify-content-start row">

                        <div className='p-2' ><h5>25, </h5></div>
                        <div className={'pt-2'} ><h5>Toronto</h5></div>

                    </div>

                </div>

                <img className={'card-img-top img-card-custom img-fluid'} src="https://nicknmick.files.wordpress.com/2014/12/doge-of-italy-much-renaissance-so-high-class-very-above-you.jpg" alt=""/>

                <div className="card-body">

                    <div className="card-text">
                        <p>I am a meme</p>

                        <p>Looking for a meme</p>

                    </div>






                </div>



                <div className="d-flex d-md-none flex-row justify-content-around">

                    

                    <div style={{color: 'blue'}} className="custom-card-button my-1 rounded-circle">


                    </div>

                    <div style={{color: 'blue'}} className="custom-card-button my-1 rounded-circle">


                    </div>



                </div>

                <div className="d-flex flex-row">

                    <div className="col d-none d-sm-block pb-2 ">

                        <div className={'btn d-xs-none btn-block rounded-0 btn-primary'}>Message</div>

                    </div>

                    <div className="col pb-2">

                        <div className={'btn d-none d-sm-block btn-block rounded-0 btn-primary'}>Save</div>

                    </div>





                </div>






            </div>




        )


    }

}

export default UserCard