import React, { Component } from 'react';
import MyComponent from './MyComponent';

class MyOtherComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: 'dipesh',
            details: ['1','2','3']
        }
        this.myref = React.createRef();
    }
    handleClick(e) {
        console.log(e);
        this.setState({name: 'pranov'});
        this.myref.current.style.background = 'blue';
    }
  render() {
    return (
      <div>
        <div>This is my other component.</div>
        <div ref={this.myref}> {this.state.name} </div>
        <button onClick={(e) => this.handleClick(e) } >Click here </button>
        <MyComponent data={this.state.name} />
        {this.state.details.map( (el, ind) => (<div key={ind}>{el}</div>) )}
      </div>
    );
  }
}

export default MyOtherComponent;