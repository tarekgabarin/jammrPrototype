import React, {Component} from 'react';

import UserCard from './UserCard'

class UsersList extends Component {

    render(){

        return (

            <div className="container">

                <div className="row">

                    <div className="col-sm-1">


                    </div>

                    <div className="col-sm-10">




                        <UserCard/>

                        <UserCard/>

                        <UserCard/>

                        <UserCard/>



                    </div>

                    <div className="col-sm-1">


                    </div>




                </div>



            </div>

        )

    }

}

export default UsersList