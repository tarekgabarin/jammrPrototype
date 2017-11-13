import React, {Component} from 'react'

import Item from './Item'

class ItemsList extends Component {

    render(){

        let itemsJSX = this.props.items.map(item=>{
           return (
                <Item item={ item } key={ item.id }/>
           );
        });

        return (

            <div className="uk-flex">

                { itemsJSX }

            </div>

        )

    }


}


export default ItemsList
