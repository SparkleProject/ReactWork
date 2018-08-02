import React, { Component } from 'react';
import {Row, Col, Menu,Card,Icon,Switch,Select} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import wrapWithLoadData from './wrapWithLoadData'
import TopHeaderOnPC from './topheader_pc'
import MenuSettingOnPC from './menusetting_pc'
import UserProfileOnPC from './userprofile_pc'
import TopBarSettingOnPC from './topbarsetting_pc'

const Option = Select.Option;

const { Meta} = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class PersonalOnPC extends Component{
  constructor(){
    super();
    this.state = {
      userId: '',
      userNickName: '',
      isLogin: '',
      properties: {
        showWeather: '',
        showClock: '',
        newsMenu: ''
      },
    };
  }

  componentWillMount(){
    this._loginState();
    this._loadProperties();
  }

  _saveData(data){
    try {
      localStorage.setItem('properties', JSON.stringify(data))
    } catch (e) {
      localStorage.setItem('properties', `${data}`)
    }
  }
  _loginState = () => {
        let isLogin = localStorage.getItem('isLogin');
        let userName = localStorage.getItem('userName');
        let userId = localStorage.getItem('userId');
        if (isLogin) {
           this.setState({ isLogin:true })
           this.setState({ userNickName:userName })
           this.setState({ userId:userId })
         }else{
           this.setState({ isLogin:false })
         }
        }

  _loadProperties () {
  	    let properties = localStorage.getItem('properties');
  	    if (properties) {
  	      properties = JSON.parse(properties)
  	      this.setState({ properties })
  	    }
    	}


  handleTopBarUpdate = ()=>{
    this.props.update();
  }



  render(){

    return(

      <div className="user-container">
        <Row>
          <Col md={2}>
          </Col>
          <Col md={5}>
            <div className="dashboard-title">
              <span>Dashboard</span>
            </div>
            <div className="personal-container">
              <UserProfileOnPC></UserProfileOnPC>
            </div>
            <div className="customize-menu">
            <Menu
                  onClick={this.handleClick}

                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  >
                  <SubMenu key="sub1" title={<span><Icon type="setting" /><span>Setting</span></span>}>
                    <Menu.Item key="1">
                      My Dashboard
                    </Menu.Item>
                    <Menu.Item key="2">
                      Edit Profile
                    </Menu.Item>
                    <Menu.Item key="3">
                      Change Password
                    </Menu.Item>
                  </SubMenu>
              </Menu>
            </div>
          </Col>
          <Col md={15}>
            <div className="personal-setting">
              <MenuSettingOnPC menus={this.state.properties.newsMenu}></MenuSettingOnPC>
              <TopBarSettingOnPC update = {this.handleTopBarUpdate.bind(this)}></TopBarSettingOnPC>
            </div>

          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    )
  }
}

export default PersonalOnPC
