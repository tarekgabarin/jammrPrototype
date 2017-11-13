import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Item extends Component {

    render() {

        return (
            <Link to={"/details/" + this.props.item.id}  className="uk-button uk-button-default">
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        <img src={ "/images/" + this.props.item.imgsrc} alt=""/>
                    </div>
                    <div className="uk-card-body">
                        <div className="uk-card-title">{ this.props.item.itemName }</div>
                        <div> { this.props.item.rating } </div>
                    </div>
                </div>
            </Link>

        )

    }


}

export default Item