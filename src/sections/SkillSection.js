import React, { Component } from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import './SkillSection.css';
import TopIcon from '../components/TopIcon';
import { Link, Element } from 'react-scroll';

const PostsData = [
  {
    category: "React.Js",
    text: "ReactJS is a JavaScript library."
  },
  {
    category: "Java Script",
    text: "JS is a programming language."
  },
  {
    category: "HTML & CSS ",
    text: "Hypertext Markup Language."
  }
]
class SkillSection extends Component {
  constructor() {
    super();
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({ posts: PostsData });
  }
  render() {
    return (
      <div>
        <Fullpage className="third">
          <h1>{data.sections[1].title}</h1>
          <div className="app-card-list">
            {
              Object.keys(this.state.posts).map(
                key => <Card key={key}
                  index={key}
                  details={this.state.posts[key]} />
              )
            }
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={260}
              duration={500}
              delay={0}>
              <TopIcon icon={data.icons.top} />
            </Link>
            <Element className="SkillSection" />
          </div>
        </Fullpage>
      </div>
    );
  }
}
class CardHeader extends Component {
  render() {
    const { category } = this.props;
    return (
      <header>
        <h3>{category}</h3>
      </header>
    )
  }
}
class CardBody extends Component {
  render() {
    return (
      <div>
        <p style={{ fontSize: '12px' }}>{Date()}</p>
        <p className="body-content">{this.props.text}</p>
      </div>
    )
  }
}
class Card extends Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.details.category} />
        <CardBody text={this.props.details.text} />
      </article>
    )
  }
}
export default SkillSection