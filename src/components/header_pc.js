import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Row,
  Col,
  Menu,
  Dropdown,
  Icon,
//  Tabs,
  message,
  Checkbox,
  Form,
  Input,
  Button,
  Modal,
  Affix
} from 'antd';
import WeatherOnPC from './weather_pc'
import ClockOnPC from './clock_pc'
import TopHeaderOnPC from './topheader_pc'

const mock = require('../mock/mock');

//const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class HeaderOnPC extends Component{
  constructor(){
    super();
    this.state = {
      time : '',
      top: 0,
      headList :'',
      topcolor: 'red',
      current: 'GLOBAL',
      modalVisible: false,
      action: 'login',
      isLogin: false,
      userNickName: 'Eric',
      userId: 0
    }
  }

  componentWillMount(){
    this.loadHeadList();
  }

  loadHeadList = ()=>{
    let properties = localStorage.getItem('properties');
    if (properties) {
      properties = JSON.parse(properties)
      this.setState({ properties })
    }
    let items = properties.newsMenu;

    let headMenu = [];
    for(let item of items){
      const to = `/customize/${item.toUpperCase()}`;
      headMenu.push(
        <Menu.Item key={item.toUpperCase()}>
          <Link to={to} ><Icon type="appstore" />{item.toUpperCase()}</Link>
        </Menu.Item>
      )
    }
    this.setState({headList:headMenu})
  }


  setModalVisible(value){
    this.setState({
      modalVisible: value,
    });
  }

  showModal = () => {
      this.setModalVisible(true);
    }

  handleOk = (e) => {
      //console.log(e);
      this.setState({
        modalVisible: false,
      });
    }

  handleCancel = (e) => {
      //console.log(e);
      this.setState({
        modalVisible: false,
      });
    }

 handleSubmit = (e)=>{
   e.preventDefault();
   let formData = this.props.form.getFieldsValue();
   for(let user of mock.MockUsers){
     if(user.username === formData.userName && user.password === formData.password){
        this.setState({isLogin: true});
        this.setState({userNickName: user.username});
        this.setModalVisible(false);
        message.success('login success');
        break;
     }
   }
 }

 handleClick = (e)=>{
   if(e.id === 'register'){
     this.setState({current:'register'});
     this.showModal();
   }else{
     this.setState ({
       current: e.key
     });
     this.props.clickMenu(e.key);
   }
 }

 handleSignIn = (e)=>{
   this.showModal();
 }


  render(){
    return(
      <div id="pcheader" >
        <header>

          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <a href="/" className="logo">
                <img  src={require('../images/news_logo.png')} alt="logo"/>
                <MediaQuery query="(min-width: 1224px)">
                  <span className="logo-text">NewsCube</span>
                </MediaQuery>
              </a>
            </Col>
            <Col span={16}>
              <Menu selectedKeys={[this.state.current]} mode="horizontal" onClick={this.handleClick.bind(this)}>
                <Menu.Item key="GLOBAL">
                  <Link to="/"><Icon type="global" />GLOBAL</Link>
                </Menu.Item>
                {this.state.headList}
              </Menu>
            </Col>
            <Col span={2}></Col>
          </Row>
        </header>
      </div>
    )
  }
}

export default HeaderOnPC = Form.create({})(HeaderOnPC);
