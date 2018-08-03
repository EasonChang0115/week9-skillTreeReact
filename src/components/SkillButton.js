import React, { Component } from 'react';

import styled from 'styled-components';

const SkillButtonBackground = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
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
  transition: .3s;
  &:before {
    content: '${props=> props.label}';
    font-size: 30px;
    font-weight: bold;
    text-shadow: 0px 1px 4px #0093FF;
    color: white;

    position: absolute;
    white-space: nowrap;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SkillButtonImage = styled.img`
  position: absolute;
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
  transition: transform .3s cubic-bezier(0.64, 2.46, 0.63, 0.52);
`;

const SkillButton = ({id, x, y, label, status, onClick, onMouseEnter}) => (
  <SkillButtonBackground 
    status={ status } 
    x={x} y={y}
    label={label}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
  >
    <SkillButtonImage src={require(`../assets/img_${id}.png`)} />
  </SkillButtonBackground>
);

export default SkillButton;
