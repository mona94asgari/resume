import React, { Component } from 'react';
import './App.css';
import Title from './sections/Title';
import About from './sections/About';
import SkillSection from './sections/SkillSection';
import SnowStorm from 'react-snowstorm';
import ThemeSwitching from './ThemeSwitching';

class App extends Component {
  render() {
    return (
      <div>
        <ThemeSwitching />
        <SnowStorm />
        <Title />
        <About />
        <SkillSection />
      </div>
    );
  }
}

export default App;