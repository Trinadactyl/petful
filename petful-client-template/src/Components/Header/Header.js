import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 className='siteName'>Petful</h1>
      </div>
    );
  }
}
