import React, { Component } from 'react'
import { connect } from "react-redux";

class Display extends Component {
    render() {
        return (
            <div className="display">
                <div className="inputDisplay">
                    {(this.props.value != 0) ? this.props.value : 0}
                </div>
                <div className="result">
                    <span className="samaDengan">=</span>{this.props.result}
                </div>
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.calculator.value,
        result: state.calculator.result
    }
}
 
export default connect(mapStateToProps)(Display);