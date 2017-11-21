import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CustomNav from './CustomNav'

import MessageComponent from './MessageComponent'

import Register from './Register'

import MyAccount from './MyAccount'

import Login from './Login'



import SetPreferences from './SetPreferences'

class App extends Component {

  constructor(){

    super();

    ////  <MessageComponent userId={this.state.userId} messages={this.state.messages} />

    this.state = {

      messages: [

          {text: 'To be fair, you have to have a very high IQ to understand Rick and Morty. The humour is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer’s head. There’s also Rick’s nihilistic outlook, which is deftly woven into his characterisation- his personal philosophy draws heavily from Narodnaya Volya literature, for instance.', sentAt: '12:33:52 PM', sentBy: 1},

          {text: 'The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realise that they’re not just funny- they say something deep about LIFE. As a consequence people who dislike Rick & Morty truly ARE idiots- of course they wouldn’t appreciate, for instance, the humour in Rick’s existential catchphrase “Wubba Lubba Dub Dub,” which itself is a cryptic reference to Turgenev’s Russian epic Fathers and Sons.', sentAt: '12:35:54 PM', sentBy: 2},

          {text: 'To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer\'s head. There\'s also Rick\'s nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily fromNarodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they\'re not just funny- they say something deep about LIFE. As a consequence people who dislike Rick and Morty truly ARE idiots- of course they wouldn\'t appreciate, for instance, the humour in Rick\'s existencial catchphrase "Wubba Lubba Dub Dub," which itself is a cryptic reference to Turgenev\'s Russian epic Fathers and Sons I\'m smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon\'s genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have a Rick and Morty tattoo. And no, you cannot see it. It\'s for the ladies\' eyes only- And even they have to demonstrate that they\'re within 5 IQ points of my own (preferably lower) beforehand.', sentAt: '12:52:54 PM', sentBy: 1},

          {text: 'To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer\'s head. There\'s also Rick\'s nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily fromNarodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they\'re not just funny- they say something deep about LIFE. As a consequence people who dislike Rick and Morty truly ARE idiots- of course they wouldn\'t appreciate, for instance, the humour in Rick\'s existencial catchphrase "Wubba Lubba Dub Dub," which itself is a cryptic reference to Turgenev\'s Russian epic Fathers and Sons I\'m smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon\'s genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have a Rick and Morty tattoo. And no, you cannot see it. It\'s for the ladies\' eyes only- And even they have to demonstrate that they\'re within 5 IQ points of my own (preferably lower) beforehand.', sentBy: 2}

      ],

     userId: 1

    }


  }




  render() {
    return (
      <div>
       <Login/>
      </div>
    );
  }
}

export default App;
