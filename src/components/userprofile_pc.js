import React, { Component } from 'react';
import {Row, Col, Menu,Card,Icon,Switch,Select} from 'antd';


export default class UserProfileOnPC extends Component{
  constructor(){
    super();
    this.state = {
      userNickName:'Eric',
    };
  }

  render(){
    return(
        <Card>
          <Row>
            <Col md={8}></Col>
            <Col md={8}>
              <img src={require('../images/generic-avatar.jpeg')} alt="avatar"/>
            </Col>
            <Col md={8}></Col>
          </Row>
          <div className="div-line"></div>
          <div className="personal-profile">
            <span> {this.state.userNickName}</span>
          </div>
        </Card>
    )
  }

}
