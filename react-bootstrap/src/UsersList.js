import React, {Component} from 'react';

import UserCard from './UserCard'

class UsersList extends Component {

    render(){

        console.log(this.props.createConversation);

        let userCardsJSX = this.props.usersNearby.map((user) => {

            console.log('user._id is...' + user._id);

            console.log('user.username is....' + user.username);

            return (

                <UserCard createConversation={this.props.createConversation} userId={user._id} usersPic={user.profilePic} userName={user.username} usersArts={user.iWantToMake} usersFirstName={user.firstName} usersLastName={user.lastName} usersSkills={user.skills} usersAge={user.age} usersCity={user.city}  />


            )

            //// createConversation={this.props.createConversation} userId={user._id} usersPic={user.profilePic} userName={user.username} usersArts={user.iWantToMake} usersFirstName={user.firstName} usersLastName={user.lastName} usersSkills={user.skills} usersAge={user.age} usersCity={user.city}




            // return (
            //
            //     <UserCard createConversation={this.props.createConversation} userId={user._id}  usersPic={user.profilePic} userName={user.username} usersArts={user.iWantToMake}  usersSkills={user.skills} usersAge={user.age} usersCity={user.city} />
            //
            // )

        });



        return (

            <div className="container">

                <div className="row">

                    <div className="col-sm-1">


                    </div>

                    <div className="col-sm-10">




                        {userCardsJSX}



                    </div>

                    <div className="col-sm-1">


                    </div>




                </div>



            </div>

        )

    }

}

export default UsersList