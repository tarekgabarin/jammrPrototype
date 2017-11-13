import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import ItemDetails from "./ItemDetails";
import ShoppingCart from "./ShoppingCart";

class App extends Component {

    constructor(){

        super();

        function Item (id, imgsrc, itemName, rating ){

            this.id = id;

            this.imgsrc = imgsrc;

            this.itemName = itemName;

            this.rating = rating;

        }

        let lst = [
                new Item('0', '0.jpeg', 'Iphone X', 2),
                new Item('1', '1.jpg', 'Samurai Sword', 5),
                new Item('2', '2.jpeg', 'Pasta Maker', 3.5),
                new Item('3', '3.jpg', 'USS Enterprise', 4.3),
                new Item('4', '4.jpeg', 'Millenium Falcon', 5),
            ];






        this.state = {

            numberOfIds: lst.length,

            items: lst,

            nextId: (lst.length - 1 ) + 1,

            inCart: [],





        }

        // bindings
        this.addToCart = this.addToCart.bind(this);

    }

    // add new item to cart
    addToCart(itemId){

        let inCart = this.state.inCart;

        inCart.push(this.state.items.find((item)=>item.id === itemId));

        this.setState({
            inCart: inCart,
        })
    }


  render() {
    return (
      <div>
          <Router>
              <div>
                  <NavBar numOfItems={ this.state.inCart.length }></NavBar>
                  <Switch>
                      <Route exact path="/" render={ ()=>{ return( <Home items={ this.state.items } /> ) } } />
                      <Route path="/cart" render={()=>{return( <ShoppingCart inCart={ this.state.inCart }/> )}}/>
                      <Route path="/details/:itemid" render={(props)=>{return( <ItemDetails item={ this.state.items.find((item)=>item.id === props.match.params.itemid) } addToCart={ this.addToCart } /> )}}/>
                  </Switch>
                  <div>
                      Shared code/footer?
                  </div>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
