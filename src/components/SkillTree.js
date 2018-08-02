import React, { Component } from 'react';

import SkillButton from './SkillButton';

class SkillTree extends Component {
  render() {
    return (
      <div>
        <SkillButton status='locked'/>
        <SkillButton status='empty'/>
        <SkillButton status='selected'/>        
      </div>
    )
  }
}

export default SkillTree;
