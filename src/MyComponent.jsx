import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            otherData: props.data
        }
    }
  render() {

    return (
      <div>
        <div>This is my component.</div>
        <div> My data: {this.props.data} </div>
        <div>My State data: {this.state.data}</div>
      </div>
    );
  }
}

export default MyComponent;