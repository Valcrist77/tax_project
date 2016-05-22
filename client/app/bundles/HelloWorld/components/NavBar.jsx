import React from 'react';

export default class NavBar extends React.Component {
  render(){
    return(
      <div className='nav-bar'>
        <div className='title'>
          {this.props.title}
        </div>
      </div>
    );
  }
}