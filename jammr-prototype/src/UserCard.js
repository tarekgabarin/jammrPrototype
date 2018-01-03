import React, {Component} from 'react'

import './UserCard.css'

import './CustomIcon.css'

class UserCard extends Component {

    render(){




        function sanitizeString(word){

            if (word !== 'Music'){

                let firstWord = word.split('');

                firstWord.unshift('a ');

                firstWord.push(', ');

                return firstWord.join('')


            }
            else {

                let firstWord = word.split('');

                firstWord.unshift(' ');

                firstWord.push(', ');

                return firstWord.join('')

            }



        }

        console.log('usersPic is....' + this.props.usersPic);

        let artsStringArray = this.props.usersArts.map(function(art){

            return sanitizeString(art)

        }).join(' ');

        artsStringArray = artsStringArray.split('');

        artsStringArray.splice(artsStringArray.lastIndexOf(','), 1);

        artsStringArray.join('');


        let sanitizeSkill = (word) => {

            let datWord = word.split('');

            datWord.unshift(' ');

            datWord.push(', ');

            return datWord.join('');

        };


        let skillsStringArray = this.props.usersSkills.map(function(skill){

            return sanitizeSkill(skill);

        }).join('');

        skillsStringArray = skillsStringArray.split('');

        skillsStringArray.splice(skillsStringArray.lastIndexOf(','), 1);

        skillsStringArray.join('');



        return (


            <div className="custom-card">

                <div className="container">

                    <div className="d-flex flex-row justify-content-between row">


                        <div className="p-2">

                            <h3>{this.props.usersFirstName + ' ' + this.props.usersLastName}</h3>

                        </div>


                        <div>

                            <i className="pt-1 custom-icon">&#xE14C;</i>

                        </div>



                    </div>

                    <div className="d-flex flex-row justify-content-start row">

                        <div className='p-2' ><h5>{this.props.usersAge}, </h5></div>
                        <div className={'pt-2'} ><h5>{this.props.usersCity}</h5></div>

                    </div>

                </div>

                <img className={'card-img-top img-card-custom img-fluid'} src={"http://www.translationwebshop.com/wp-content/themes/translationwebshop/images/img_placeholder_avatar.jpg"} alt=""/>

                <div className="card-body">

                    <div className="card-text">
                        <p>I am skilled in {skillsStringArray}</p>

                        <p>I want to make {artsStringArray}</p>

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

                        <div onClick={() => this.props.createConversation(this.props.userName, this.props.userId, this.props.usersPic)} className={'btn d-xs-none btn-block rounded-0 btn-primary'}>Message</div>

                    </div>

                </div>






            </div>




        )


    }

}

export default UserCard