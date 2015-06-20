import React from 'react';

export default class MyWidget extends React.Component {
  render() {
    return (
      <p>
        <a href="#" onClick={this._handleClick}>Hello</a>, 
        I am a React component that has been <tt>babelified > reactified > browserified</tt>
      </p>
    );
  }
  _handleClick() {
    console.log('click');
  }
}
