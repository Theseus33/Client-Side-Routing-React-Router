import React, { Component } from 'react';

class Dog extends Component {
    componentDidMount() {
        console.log("Dog Did Mount!");
    }
    componentWillUnmount() {
        console.log("Dog will unmount!");
    }
    render() {
        console.log("Dog Render");
        return (
            <div className='Dog'>
                <h1>Dog!!!</h1>
                <h3>This Dog is named {this.props.name}</h3>
                <img src='https://i.imgur.com/nnhQbpY.jpg' />
            </div>
        );
    }
}

export default Dog;