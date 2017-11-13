import React from 'react';

class ItemDetails extends React.Component{
    render(){
        return(

            <div className="uk-container">

                <div className="columns">

                    <div className="column uk-card is-two-fifths">
                        <div className="uk-card-default uk-card-body uk-width-1-2@m">
                            <img src={ "/images/" + this.props.item.imgsrc} alt=""/>
                        </div>
                    </div>

                    <div className="column is-info">
                        <h3 className="uk-card-title">{ this.props.item.itemName }</h3>
                        <button className="uk-button uk-button-default" onClick={ ()=>{ this.props.addToCart(this.props.item.id) } }> Add to Cart </button>
                    </div>

                </div>


            </div>



        );
    }
}

export default ItemDetails;