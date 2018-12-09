import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import './Navigation.css'

class navigation extends Component {
  render() {
    return (
      <div className='nav'>
        <Link activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={210}
          duration={500}
          delay={0}>
          <button className='first-button'>
            About
        </button>
        </Link>
        <Element name="About" className="About" />
        <Link activeClass="active"
          to="SkillSection"
          spy={true}
          smooth={true}
          offset={210}
          duration={500}
          delay={0}>
          <button className='second-button'>
            Skills
        </button>
        </Link>
        <Element name="SkillSection" className="SkillSection" />
      </div>
    )
  }
}
export default navigation
