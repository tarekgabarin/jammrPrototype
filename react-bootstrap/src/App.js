import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CustomNav from './CustomNav'

import MessageComponent from './MessageComponent'

import Register from './Register'

import MyAccount from './MyAccount'

import Login from './Login'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import axios from 'axios'

import Browse from './Browse';

import validator from 'validator';


import SetPreferences from './SetPreferences'
import IndexPage from "./IndexPage";
import ChatBox from "./ChatBox";

class App extends Component {

    constructor() {

        super();


        //////  axios.defaults.baseUrl = 'http://localhost:8080';


        this.state = {

            currentConversationId: '',

            usersNearby: [],

            usersNearbyToDiscover: [],

            city: '',

            street: '',

            country: 'CA',

            firstName: '',

            lastName: '',

            iWantToMake: [],

            gender: '',

            skills: [],

            myToken: '',

            incorrectForm: false,

            isLoggedIn: false,

            email: '',

            password: '',

            provinceState: 'Ontario',

            age: 18,

            isEmail: true,

            discoveryPreferences: {},

            messageToSend: '',

            openNav: true,

            showNav: 'message',

            myId: '',

            myCD: 0,

            myLoc: {},

            conversationOtherUserId: '',

            conversationOtherUserName: '',

            conversationOtherUserPic: ''






        };


        if (window.localStorage.getItem('x-auth') !== null) {

            /// TODO PUT THE AWESOME LINE FROM THE OTHER TODO HERE

            axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('x-auth');


            // let firstGetInfo = () => {
            //
            //     return new Promise((resolve, reject) => {
            //
            //         this.getMyInfo();
            //
            //         if (this.state.myId !== ''){
            //
            //             resolve();
            //
            //         }
            //         else {
            //
            //             reject();
            //
            //         }
            //
            //
            //
            //     })
            //
            // };
            //
            // firstGetInfo().then(() => {
            //
            //         console.log('it runs');
            //
            //
            //     });
            //


            this.getMyInfo();


        }


        ////  <MessageComponent userId={this.state.userId} messages={this.state.messages} />


        this.handleLogin = this.handleLogin.bind(this);

        this.handleEmailInput = this.handleEmailInput.bind(this);

        this.handlePasswordInput = this.handlePasswordInput.bind(this);

        this.getAllUsers = this.getAllUsers.bind(this);

        this.getMyInfo = this.getMyInfo.bind(this);

        this.discoverUsers = this.discoverUsers.bind(this);

        this.checkFormAges = this.checkFormAges.bind(this);

        this.checkIfAllRegistrationFilled = this.checkIfAllRegistrationFilled.bind(this);

        this.handleFormInput = this.handleFormInput.bind(this);

        this.addSkill = this.addSkill.bind(this);

        this.removeSkill = this.removeSkill.bind(this);

        this.addArt = this.addArt.bind(this);

        this.removeArt = this.removeArt.bind(this);

        this.handleOpen = this.handleOpen.bind(this);

        this.handleClose = this.handleClose.bind(this);

        this.getToken = this.getToken.bind(this);

        this.handleGenderInput = this.handleGenderInput.bind(this);

        this.handleProvinceInput = this.handleProvinceInput.bind(this);

        this.handleCityInput = this.handleCityInput.bind(this);

        this.handleAgeInput = this.handleAgeInput.bind(this);

        this.handleAddressInput = this.handleAddressInput.bind(this);

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);

        this.handleLastNameInput = this.handleLastNameInput.bind(this);

        this.handleLogOut = this.handleLogOut.bind(this);

        this.createConversation = this.createConversation.bind(this);


    }


    handleOpen() {

        document.getElementById("mySidenav").style.width = "250px";


    }

    handleClose() {

        document.getElementById("mySidenav").style.width = "0";


    }

    handleLogOut() {

        window.sessionStorage.clear();

    }


    getToken() {


        return new Promise((resolve, reject) => {


            let myToken = window.sessionStorage.getItem('x-auth');

            if (myToken !== undefined || myToken !== null) {

                /////console.log(myToken);

                /// axios.defaults.headers.common['x-auth'] = myToken;


                resolve(myToken)

            }
            else {

                reject('problem with getToken')

            }


        })


    };


    addSkill(event) {

        let lst = this.state.skills;

        let value = event.target.value;

        if (lst.indexOf(value) === -1) {

            lst.push(value);

        }

        lst = lst.sort();

        this.setState({skills: lst});


    }

    removeSkill(event) {

        let lst = this.state.skills;

        let value = event.target.value;


        let getIndex = () => {

            let index_;

            return new Promise((resolve, reject) => {


                for (let i = 0; i < lst.length; i++) {

                    if (lst[i] === value) {

                        index_ = i

                    }
                }

                if (index_ !== undefined) {

                    resolve(index_)

                }
                else {

                    reject('getIndex promise function not working at line 316');

                }

            })
        };

        getIndex().then(index_ => {

            lst.splice(index_, 1);

            this.setState({skills: lst});

        });


    }


    addArt(event) {


        let lst = this.state.iWantToMake;

        let value = event.target.value;

        console.log('value is...' + value);

        if (lst.indexOf(value) === -1) {

            lst.push(value);

        }

        lst = lst.sort();

        this.setState({iWantToMake: lst});

    }

    removeArt(event) {

        let lst = this.state.iWantToMake;

        let value = event.target.value;

        let getIndex = () => {

            let index_;

            return new Promise((resolve, reject) => {


                for (let i = 0; i < lst.length; i++) {

                    if (lst[i] === value) {

                        index_ = i

                    }
                }

                if (index_ !== undefined) {

                    resolve(index_)

                }
                else {

                    reject('getIndex promise function not working at line 316');

                }

            })
        };

        getIndex().then(index_ => {

            lst.splice(index_, 1);

            this.setState({iWantToMake: lst});

        });


    }

    createConversation(userName, userId, userImg){

        console.log('createConversation runs');

        let url = `http://localhost:8080/message/${userId}`;

        axios.get(url)

            .then(response => {

                this.setState({

                    currentConversationId: response.data,

                    conversationOtherUserId: userId,

                    conversationOtherUserName: userName,

                    conversationOtherUserPic: userImg

                });

                console.log(response);

            })

            .catch(err => {

                if (err) throw err


            })

    }

    checkIfAllRegistrationFilled(event) {

        event.preventDefault();

        let checkFields = (arr) => {

            let isNotFilled = false;


            for (let i = 0; i < arr.length; i++) {

                if (arr[i] === '' || arr[i] === []) {

                    isNotFilled = true

                }


            }

            return isNotFilled;


        };

        let fieldsArray = [this.state.city, this.state.street, this.state.firstName, this.state.lastName, this.state.iWantToMake, this.state.skills, this.state.gender, this.state.password, this.state.email];

        let result = checkFields(fieldsArray);

        if (!result) {

            this.setState({incorrectForm: false});

            this.handleRegistration();

        }
        else {

            this.setState({incorrectForm: true});

        }

    }


    // handleRegistration(){
    //
    //     let checkFilledPromise = () => {
    //
    //         return new Promise((resolve, reject) => {
    //
    //
    //
    //
    //
    //         })
    //
    //
    //
    //
    //     }
    //
    //
    //
    //
    //
    // }


    handleRegistration() {


        axios.post('http://localhost:8080/register',

            {
                email: this.state.email,

                password: this.state.password,

                city: this.state.city,

                age: this.state.age,

                country: this.state.country,

                street: this.state.street,

                firstName: this.state.firstName,

                lastName: this.state.lastName,

                iWantToMake: this.state.iWantToMake,

                provinceState: this.state.provinceState,

                skills: this.state.skills,

                gender: this.state.gender,

                imLookingFor: ['Acting', 'Drawing', 'Music', 'Programming', 'Writing', 'Videography']

            }
        ).then(response => {


            console.log('Below is response then in handleRegistration');

            ///     console.log(response);

            let tokenPromise = () => {

                return new Promise((resolve, reject) => {

                    window.sessionStorage.setItem('x-auth', response.data);


                    if (window.sessionStorage.getItem('x-auth') !== null) {

                        axios.defaults.headers.common['x-auth'] = localStorage.getItem('x-auth');

                        resolve()

                    }
                    else {

                        reject('problem with line 506 of App.js');


                    }


                })


            };

            tokenPromise()

                .then(() => {

                    ////    window.location.assign('http://localhost:3000/find');


                    axios.get('http://localhost:8080/find')

                        .then(response => {

                            console.log('below is response.data in then of tokenPromise');

                            console.log(response.data);


                            let gotUsers = () => {

                                return new Promise((resolve, reject) => {

                                    if (response.data.length > 0) {

                                        resolve(response.data);

                                    }
                                    else {

                                        reject('Problem, see line 544');

                                    }

                                });


                            };


                            gotUsers().then((usersData) => {

                                console.log('below is usersData is....' + usersData);

                                console.log(usersData);

                                /////  window.location.assign('http://localhost:3000/find');

                                this.setState({usersNearby: usersData});


                            })


                        })

                        .catch(err => {

                            if (err) throw err

                        });


                });


            // this.setState({
            //
            //
            //     city: response.data.city,
            //
            //     street: response.data.street,
            //
            //     country: 'CA',
            //
            //     firstName: response.data.firstName,
            //
            //     lastName: response.data.lastName,
            //
            //     iWantToMake: response.data.iWantToMake,
            //
            //     skills: response.data.skills,
            //
            //     gender: response.data.gender,
            //
            //     provinceState: response.data.provinceState,
            //
            //     age: response.data.age,
            //
            //     discoveryPreferences: response.data.discoveryPreferences,
            //
            //     openNav: true,
            //
            //     showNav: 'message',
            //
            //     myId: response.data._id,
            //
            //     myCD: response.data.creationDate,
            //
            //     myToken: response.config.headers,
            //
            //     myLoc: response.data.loc
            //
            //
            // });


        });


    }


    //////////   Login Component ////////

    handleLogin(event) {

        event.preventDefault();


        axios.post('http://localhost:8080/login', {

            email: this.state.email,

            password: this.state.password


        }).then((response) => {


            console.log('Did it run?');

            console.log(response);


            let tokenPromise = () => {

                return new Promise((resolve, reject) => {

                    ///  axios.defaults.headers['x-auth'] = response.config.headers.

                    window.sessionStorage.setItem('x-auth', response.data);


                    ///TODO This line IS PIVOTAL YOU MUST PUT IT IN THE REGISTRATION ROUTE

                    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('x-auth');

                    this.setState({

                        incorrectForm: false,

                        myToken: response.data


                    });

                    if (window.sessionStorage.getItem('x-auth')) {

                        resolve(response.data)

                    }
                    else {

                        reject('problem with tokenPromise')

                    }


                })

            };

            tokenPromise().then((data) => {

                console.log('data is...' + data);

                axios({

                    url: 'http://localhost:8080/getMyInfo',

                    method: 'get',

                    headers: {

                        'x-auth': data

                    }

                }).then(response => {

                    this.setState({


                        city: response.data.city,

                        street: response.data.street,

                        country: 'CA',

                        firstName: response.data.firstName,

                        lastName: response.data.lastName,

                        iWantToMake: response.data.iWantToMake,

                        skills: response.data.skills,

                        gender: response.data.gender,

                        provinceState: response.data.provinceState,

                        age: response.data.age,

                        discoveryPreferences: response.data.discoveryPreferences,

                        currentConversationId: '',

                        isEmail: true,

                        isLoggedIn: true,

                        incorrectForm: false,

                        messageToSend: '',

                        openNav: true,

                        showNav: 'message',

                        myId: response.data._id,

                        myCD: response.data.creationDate,

                        myToken: response.config.headers,

                        myLoc: response.data.loc,

                        conversationOtherUserId: '',

                        conversationOtherUserName: '',

                        conversationOtherUserPic: ''


                    });


                })
                    .then(() => {


                        this.getAllUsers();


                    })


            });


        });


    }


    handlePasswordInput(event) {

        let enteredPassword = event.target.value;

        console.log(event.target.value);

        this.setState({password: enteredPassword});

        console.log(this.state)


    }

    handleEmailInput(event) {

        ///   let enteredEmail = event.target.value;

        ///document.getElementById('loginEmail');
        //
        let result = validator.isEmail(event.target.value);

        if (result) {

            this.setState({

                email: event.target.value,

                incorrectForm: false
            });

            console.log(this.state)

        }
        else {

            this.setState({incorrectForm: true})

        }

    }


    getAllUsers() {


        console.log('myId is....');

        console.log('myCD is....');


        axios.get('http://localhost:8080/find').then(response => {

            console.log("/find ran and it's response is below");

            console.log(response);

            this.setState({usersNearby: response.data})

        });


    }

    discoverUsers() {


        axios({

            url: '/discover',

            method: 'get',

            headers: this.state.myToken


        }).then(response => {

            this.setState({usersNearbyToDiscover: response.data})

        })

            .catch(err => {

                if (err) throw err

            })


    }

    handleFormInput(typeOfVale) {


        let valueOfElement = document.getElementById(`${typeOfVale}`).value;

        this.setState({typeOfValue: valueOfElement})


    }

    handleGenderInput(event) {

        this.setState({gender: event.target.value});

    }

    handleProvinceInput(event) {

        this.setState({provinceState: event.target.value})

    }

    handleCityInput(event) {

        this.setState({city: event.target.value})

    }

    handleAddressInput(event) {

        let enteredAddress = event.target.value;

        this.setState({street: enteredAddress});


    }

    handleAgeInput(event) {

        this.setState({age: event.target.value});


    }

    handleFirstNameInput(event) {

        this.setState({firstName: event.target.value});


    }

    handleLastNameInput(event) {

        this.setState({lastName: event.target.value});

    }


    getMyInfo() {


        this.getToken().then(token => {


            axios({

                url: '/getMyInfo',

                method: 'get',

                headers: {

                    'Content-Type': 'application/json',

                    'x-auth': token

                }


            }).then(response => {



                ///    console.log(response.config.headers[x-auth]);

                console.log(response);

                this.setState({


                    city: response.data.city,

                    street: response.data.street,

                    country: 'CA',

                    firstName: response.data.firstName,

                    lastName: response.data.lastName,

                    iWantToMake: response.data.iWantToMake,

                    skills: response.data.skills,

                    gender: response.data.gender,

                    provinceState: response.data.provinceState,

                    age: response.data.age,

                    discoveryPreferences: response.data.discoveryPreferences,

                    currentConversationId: '',

                    isEmail: true,

                    isLoggedIn: true,

                    incorrectForm: false,

                    messageToSend: '',

                    openNav: true,

                    showNav: 'message',

                    myId: response.data._id,

                    myCD: response.data.creationDate,

                    myToken: response.config.headers,

                    myLoc: response.data.myLoc


                });


            })

                .catch(err => {


                    if (err) throw err


                })


        });


    }


    checkFormAges(lowest, highest) {


        if (lowest > highest) {

            this.setState({incorrectForm: true})

        }


    }


    //


    render() {

        console.log(this.state);


        return (
            <div>
                <Router>
                    <Switch>


                        <Route exact path={'/'} render={() => {


                            return (


                                <Login isLoggedIn={this.state.isLoggedIn} handlePasswordInput={this.handlePasswordInput}
                                       handleEmailInput={this.handleEmailInput} handleLogin={this.handleLogin}/>



                            )


                        }}/>

                        <Route path={'/find'} render={() => {

                            return (


                                <Browse createConversation={this.createConversation} handleOpen={this.handleOpen} handleClose={this.handleClose} handleLogOut={this.handleLogOut} usersNearby={this.state.usersNearby}
                                        id={this.state.myId} creationDate={this.state.myCD}
                                        getAllUsers={this.getAllUsers} isLoggedIn={this.state.isLoggedIn}/>

                            )


                        }}


                        />

                        <Route path={'/register'} render={() => {

                            return (


                                <Register
                                    usersNearby={this.state.usersNearby}
                                    handleFirstNameInput={this.handleFirstNameInput}
                                    handleLastNameInput={this.handleLastNameInput}
                                    handleAddressInput={this.handleAddressInput}
                                    handleAgeInput={this.handleAgeInput} handleCityInput={this.handleCityInput}
                                    handleProvinceInput={this.handleProvinceInput}
                                    handleGenderInput={this.handleGenderInput} skills={this.state.skills}
                                    iWantToMake={this.state.iWantToMake} addSkill={this.addSkill}
                                    removeSkill={this.removeSkill} addArt={this.addArt} removeArt={this.removeArt}
                                    handleFormInput={this.handleFormInput}
                                    checkIfAllRegistrationFilled={this.checkIfAllRegistrationFilled}
                                    handlePasswordInput={this.handlePasswordInput}
                                    handleEmailInput={this.handleEmailInput}/>


                            )


                        }}/>

                        <Route path={'/message'} render={() => {


                            return (


                                <ChatBox currentConversationId={this.state.currentConversationId} messageToSend={this.state.messageToSend}  />



                            )




                        }} />


                    </Switch>
                </Router>

            </div>
        );
    }
}

export default App;
