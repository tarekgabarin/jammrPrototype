import React from 'react';
import Item from './Item';

class ShoppingCart extends React.Component{
    render(){

        let itemListJSX = this.props.inCart.map((item)=>{
            return (
                <Item item={ item } key={ item.id }/>
            );
        })

        return(
            <div>
                <h1> Shopping Cart </h1>
                { itemListJSX }
            </div>
        );
    }
}

export default ShoppingCart;