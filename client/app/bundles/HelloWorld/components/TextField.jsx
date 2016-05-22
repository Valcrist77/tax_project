import React from 'react';

export default class TextField extends React.Component {
  render() {
    let { name } = this.props;

    return (
      <div>
        <input type="text" name={name}/>
      </div>
    );
  }
}