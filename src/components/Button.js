import React, { Component } from 'react'
import '../App.css'

class Button extends Component {
    render() { 
        return (
            <button className={this.props.style}>
                {this.props.children}
            </button>
        )
    }
}
 
export default Button;