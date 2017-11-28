import React, {Component} from 'react'

class CheckOptionItemArt extends Component {



    render() {


        if (this.props.isChecked) {


            return (
                <div className="form-check">
                    <label className="form-check-label">
                        <input onChange={(e) => this.props.addArt(e)} className="form-check-input" type="checkbox"
                               value={`${this.props.art}`} checked/> {this.props.art}
                    </label>
                </div>

            )

        }

        else if (!this.props.isChecked){


            return (

            <div className="form-check">
                <label className="form-check-label">
                    <input onChange={(e) => this.props.removeArt(e)} className="form-check-input" type="checkbox"
                           value={`${this.props.art}`}/> {this.props.art}
                </label>
            </div>

            )

        }
    }




}

export default CheckOptionItemArt