import React, {Component} from 'react';

import ItemsList from './ItemsList';

class Home extends Component {


    render(){

        return(
            <div className={'uk-container'}>
                <h1> Homepage </h1>
                <ItemsList items={ this.props.items }/>

            </div>
        );
    }
}

export default Home;


