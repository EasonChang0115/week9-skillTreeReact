import React, { Component } from 'react';

import styled from 'styled-components';

const TitleBlockStyle = styled.div`
  width: 100%;
  display: flex;
  padding: 90px 170px 0px;
  box-sizing: border-box;
`;

const TitleStyle1 = styled.h1`
  margin: 0;
  color: white;
  text-shadow: 0px 3px 7px #0093FF;
  font-size: 70px;
  letter-spacing: 10px
`;

const TitleStyle2 = styled.h1`
  margin: 0;
  color: white;
  text-shadow: 0px 3px 7px #0093FF;
  font-size: 65px;
`;


const TitleImage = styled.img`
  position: absolute;
  top: -60px;
`;

const Title = () => (
  <TitleBlockStyle>
    <div style={{paddingTop: '20px'}}>
      <TitleImage src={require(`../assets/img_planet.png`)}></TitleImage>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', marginLeft: '300px'}} >
      <TitleStyle1>介面設計師轉職之路</TitleStyle1>
      <TitleStyle2>UI Designer Road Map</TitleStyle2>
    </div>
  </TitleBlockStyle>
);


export default Title;