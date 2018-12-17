import React, { Component } from 'react'
import { connect } from "react-redux";

class Display extends Component {
    render() {
        return (
            <div className="display">
                <div className="result">
                    {(this.props.value != 0) ? this.props.value : 0}
                </div>
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.calculator.value
    }
}
 
export default connect(mapStateToProps)(Display);