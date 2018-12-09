import React, { Component } from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import DownIcon from '../components/DownIcon';
import { Link, Element } from 'react-scroll';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h2>{data.sections[0].title}</h2>
          <div className="paragraphs">
            {data.sections[0].items.map(p => {
              return (
                <p style={{ fontSize: '30px' }}>
                  {p.contents}
                </p>
              );
            }
            )
            }
          </div>
          <div>
            <Link
              activeClass="active"
              to="SkillSection"
              spy={true}
              smooth={true}
              offset={260}
              duration={500}
              delay={0}>
              <DownIcon icon={data.icons.down} />
            </Link>
            <Element name="SkillSection" className="SkillSection" />
          </div>
        </Fullpage>
      </div>
    )
  }
}
export default About
