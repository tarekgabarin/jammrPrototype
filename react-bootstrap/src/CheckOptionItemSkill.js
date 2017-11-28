import React, {Component} from 'react'

class CheckOptionItemSkill extends Component {



    render() {


        if (this.props.isChecked) {


            return (
                <div className="form-check">
                    <label className="form-check-label">
                        <input onChange={e => this.props.removeSkill(e) } className="form-check-input" type="checkbox"
                               value={`${this.props.skill}`} checked/> {this.props.skill}
                    </label>
                </div>

            )

        }

        else if (!this.props.isChecked){


            return (

            <div className="form-check">
                <label className="form-check-label">
                    <input onChange={e => this.props.addSkill(e) } className="form-check-input" type="checkbox"
                           value={`${this.props.skill}`}/> {this.props.skill}
                </label>
            </div>

            )

        }
    }




}

export default CheckOptionItemSkill