import React, { Component } from 'react';
import './ThemeSwitching.css';

class ThemeSwitching extends Component {
  constructor(props) {
    super(props);
    this.css = `html { filter:hue-rotate(120deg) }`;
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    return (
      <div className='theme'>
        <button
          aria-pressed={this.state.active}
          onClick={this.toggle}>
          Color Me:
        <span>
            {this.state.active ? 'on' : 'off'}
          </span>
        </button>
        <style media={this.state.active ? 'screen' : 'none'}>
          {this.state.active ? this.css : this.css}
        </style>
      </div>
    );
  }
}
export default ThemeSwitching;