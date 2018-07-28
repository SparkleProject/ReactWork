import React, { Component } from 'react';
import { Row} from 'antd';

export default class HeaderOnMobile extends Component{
  constructor(){
    super();
    this.state = {
      current: 'GLOBAL'
    }
  }
  render(){
    return(
      <div id="mobileheader">
        <header>
          <Row>
              <a href="/" className="logo">
                <img  src={require('../images/news_logo.png')} alt="logo"/>
                <span>NewsCube</span>
              </a>
          </Row>
        </header>
      </div>
    )
  }
}
