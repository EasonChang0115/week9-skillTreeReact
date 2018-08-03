import React, { Component } from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import Title from './Title';
import SkillTree from './SkillTree';
import Dialog from './Dialog';

import '../styles/index.css';

class App extends Component {
  state = {
    info: {
      label: '安安',
      content: '我是Mono喵，接下來將你領略UI的變換。喵。'
    }
  }
  showInfo = (skill) => {
    this.setState({
      info: skill
    })
  }
  render() {
    const { info } = this.state;
    let footerImgSrc = require(`../assets/img_footer@2x.png`);
    let hexCatImgSrc = require(`../assets/img_hexcat@2x.png`);
    let roketImgSrc = require(`../assets/img_rocket.png`);
    
    return (
        <Router>
          <div className="App">
            <div className="img-footer" style={{backgroundImage: `url('${footerImgSrc}')`}}></div>
            <Title />
            <SkillTree showInfo={this.showInfo} />
            <Dialog {...info} />
            <div className="img-hex-cat" style={{backgroundImage: `url('${hexCatImgSrc}')`}}></div>
            <div className="img-roket" style={{backgroundImage: `url('${roketImgSrc}')`}}></div>
          </div>
        </Router>
    );
  }
}

export default App;
