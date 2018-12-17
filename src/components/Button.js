import React, { Component } from 'react'
import { connect } from "react-redux";
import { addElem, clear, equal } from "../actions";
import { bindActionCreators } from "redux"

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOperator: false,
            elem: []
        }      
    }

    handleClick() {
        if (this.props.type === "digit") {
            console.log(this.props.children)
            this.props.addElem(this.props.value)
        }
        if (this.props.type === "operator") {
            this.props.addElem(this.props.value)
        }
        if (this.props.type === "clear") {
            this.props.clear()
        }
        if (this.props.type === "equal") {
            this.props.equal(this.props.elements)
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
        clear: clear,
        equal: equal
    }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Button);