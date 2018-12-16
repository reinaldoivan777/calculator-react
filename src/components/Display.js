import React, { Component } from 'react'
import '../App.css'

class Display extends Component {
    render() { 
        return (
            <div className="display">
                {this.props.input}
                <hr/>
            </div>
        )
    }
}
 
export default Display;