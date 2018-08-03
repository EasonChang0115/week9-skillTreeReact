import React, { Component } from 'react';

import styled from 'styled-components';

const DialogBlock = styled.div`
  margin: 80px 210px;
  width: 1100px;
  background-color: white;
  border: 8px solid #0093FF;
  border-radius: 70px;
  display: flex;
  padding: 40px 70px 40px;
  .cat-img {
    width: 220px;
    height: 360px;
    position: absolute;
    top: -60px;
    left: -120px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .img-block {
    width: 220px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .info {
    margin-left: 18px;
    width: calc(100% - 220px);
    h1 {
      margin: 0;
      margin-bottom: 15px;
      font-size: 32px;
      font-weight: bold;
      color: #505050;
    }
    span {
      font-size: 32px;
      color: #7B7B7B;
    }
  }
`;


const Dialog = ({ label, content, id }) => {
  let catImgSrc = require(`../assets/img_monocat@2x.png`);
  let imgSrc = '';
  if (id) {
    imgSrc = require(`../assets/img_${id}@2x.png`);
  }
  return <DialogBlock>
    <div className="cat-img" style={{backgroundImage: `url('${catImgSrc}')`}}></div>
    <div className="img-block" style={{backgroundImage: `url('${imgSrc}')`}}></div>
    <div className="info">
      <h1>{label}</h1>
      <span>{content}</span>
    </div>
  </DialogBlock>
};

export default Dialog;
