import React, { Component } from 'react';

export default class Chrome extends Component {
  render() {
    return (
      <svg className="chrome" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="19" fill="#4CAF50"></circle>
        <path
          fill="#FFC107"
          d="M24 5v19l8 4-8.8 15h.8c10.5 0 19-8.5 19-19S34.5 5 24 5z"
        ></path>
        <path
          fill="#F44336"
          d="M16 28l8-13h16.7C37.5 9 31.2 5 24 5c-6.7 0-12.6 3.5-16 8.8L16 28z"
        ></path>
        <path fill="#DD2C00" d="M8 13.8L16 28l5-1"></path>
        <path fill="#F9A825" d="M40.6 15H24l-1.5 4.8"></path>
        <path fill="#558B2F" d="M23.2 43L32 28l-3.8-3.1"></path>
        <circle cx="24" cy="24" r="9" fill="#FFF"></circle>
        <circle cx="24" cy="24" r="7" fill="#2196F3"></circle>
      </svg>
    );
  }
}
