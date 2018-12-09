import React, { Component } from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import DownIcon from '../components/DownIcon';
import { Link, Element } from 'react-scroll';
import Navigation from '../components/Navigation';

class Title extends Component {
  render() {
    return (
      <div>
        <Fullpage className="first">
          <Navigation />
          <h1>{data.title}</h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="iconWrapper">
            <SocialIcon url="https://github.com/mona94asgari" />
            <SocialIcon url="https://www.instagram.com/mrs_m0na/" />
          </div>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={210}
            duration={500}
            delay={0}>
            <DownIcon icon={data.icons.down} />
          </Link>
          <Element name="About" className="About" />
        </Fullpage>
      </div>
    )
  }
}
export default Title