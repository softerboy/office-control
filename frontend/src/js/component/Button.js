import React, { Component } from 'react'

export default class Button extends Component {

    onButtonClick = (e) => {
        alert("Hurray!!! Your Reactive app works!!!")
    }

    render = () => {
        return (
            <button onClick={this.onButtonClick}>Clickme for testing your React app</button>
        )
    }
}