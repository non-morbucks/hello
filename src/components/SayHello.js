import React, { Component } from 'react';

class SayHallo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
            <h1>Hello ,{this.props.name}</h1>
            <p>Age , {this.props.age}</p>
            </div>
        );
    }
}

export default SayHallo;