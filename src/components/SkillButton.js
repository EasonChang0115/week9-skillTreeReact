import React, { Component } from 'react';

import styled from 'styled-components';

const SkillButtonBackground = styled.div`
  width: 104px;
  height: 104px;
  background-color: rgba(0, 147, 255, 0.35);
  border: 12px solid ${props => {
    switch(props.status) {
      case 'locked': 
        return 'rgba(92, 92, 92, 0.62)';
      case 'empty': 
        return 'rgba(255, 255, 255, 0.62)';
      case 'selected':
      default: 
        return 'rgba(87, 145, 255, 0.62)'
    }
  }};
  box-shadow: 0 3px 6px rgba(0, 147, 255, 0.44);
  border-radius: 39px;
  margin: 1em;
`;

const SkillButton = ({ status }) => (
  <SkillButtonBackground status={ status }/>
);

export default SkillButton;
