import React from 'react';

export default class Form extends React.Component {
  render() {
    let { onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        {this.props.children}
      </form>
    );
  }
}