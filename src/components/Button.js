import React, { Component } from 'react'
import { connect } from "react-redux";
import { addElem, addOperator, clear, equal, negate } from "../actions";
import { bindActionCreators } from "redux"

class Button extends Component {
    constructor(props) {
        super(props)  
    }

    handleClick() {
        if (this.props.type === "digit") {
            this.props.addElem(this.props.value)
        }
        if (this.props.type === "operator") {
            this.props.addOperator(this.props.value)
        }
        if (this.props.type === "clear") {
            this.props.clear()
        }
        if (this.props.type === "equal") {
            this.props.equal(this.props.elements)
        }
        if (this.props.type === "negate") {
            this.props.negate()
        }

    }

    render() { 
        return (
            <button className={this.props.style} onClick={this.handleClick.bind(this)}>
                {this.props.children}
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
        elements: state.calculator.value
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addElem: addElem,
        addOperator, addOperator,
        clear: clear,
        equal: equal,
        negate, negate
    }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Button);