import React, { Component } from 'react';
import { BrowserRouter as Router,Link } from "react-router-dom";
import MediaQuery from 'react-responsive'
import {
  Row,
  Col,
  Menu,
  Dropdown,
  Icon,
  Avatar,
  message,
  Checkbox,
  Form,
  Badge,
  Input,
  Button,
  Modal,
  Affix
} from 'antd';
import WeatherOnPC from './weather_pc'
import ClockOnPC from './clock_pc'


const mock = require('../mock/mock');

const FormItem = Form.Item;

class TopHeaderOnPC extends Component{
  constructor(){
    super();
    this.state = {
      //time : '',
      top: 0,
      //headList :'',
      //topcolor: 'red',
      current: 'GLOBAL',
      modalVisible: false,
      //action: 'login',
      isLogin: false,
      userName: '',
      userId: ''
    }
  }

  componentWillMount(){
    this._loginState();
    //this._loadProperties();
  }

  _loginState = () => {
        let isLogin = localStorage.getItem('isLogin');
        let userName = localStorage.getItem('userName');
        let userId = localStorage.getItem('userId');
        if (isLogin === 'true') {
           this.setState({ isLogin:true })
           this.setState({ userName:userName })
           this.setState({ userId:userId })
         }else{
           this.setState({ isLogin:false })
           this.setState({ userName:'' })
           this.setState({ userId:'' })
         }
        }

_setLoginState(user){
          //console.log(JSON.stringify(data));
          try {
            if(user){
              localStorage.setItem('isLogin', true);
              localStorage.setItem('userId', user.userid);
              localStorage.setItem('userName', user.username);
            }

          } catch (e) {
            localStorage.setItem('isLogin', false)
          }
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
      this.setState({
        modalVisible: false,
      });
    }

  handleCancel = (e) => {
      this.setState({
        modalVisible: false,
      });
    }

 handleSubmit = (e)=>{
   e.preventDefault();
   let formData = this.props.form.getFieldsValue();
   //mock the login verification on back-end
   for(let user of mock.MockUsers){
     if(user.username === formData.userName && user.password === formData.password){
        this.setState({isLogin: true});
        this.setState({userName: user.username});
        this.setState({userId: user.userid});
        this._setLoginState(user);
        this.setModalVisible(false);
        message.success('login success');
        return;
     }
   }
   //login failed
   this.setState({isLogin: false});
   this.setState({userName: ''});
   this._setLoginState(false);
   message.error('user name or password is incorrect.');
 }

 handleSignIn = (e)=>{
   this.showModal();
 }
 handleLogout = (e)=>{
   this.setState({isLogin: false});
   this.setState({userName: ''});
   this._setLoginState(false);
   localStorage.setItem('isLogin', false);
   localStorage.setItem('userId', '');
   localStorage.setItem('userName', '');
   message.info('you have logged out');
 }


  render(){
    const weathercomp = this.props.showWeather
    ? (<WeatherOnPC></WeatherOnPC>) : '';

    const clockcomp = this.props.showClock
    ? (<ClockOnPC></ClockOnPC>) : '';

    let {getFieldDecorator} = this.props.form;
    const userMenu = (

        <Menu>
          <Menu.Item>
            <Link to="/personal">
                <Icon type="setting"></Icon>&nbsp;&nbsp; Setting
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={this.handleLogout.bind(this)}>
              <Icon type="logout"></Icon>&nbsp;&nbsp; log out
            </a>
          </Menu.Item>
        </Menu>

    );
    const userShow = this.state.isLogin
      ?
      <div>
      <Dropdown overlay={userMenu}>
       <a target ="_blank">
        <Badge dot><Avatar icon="user" /></Badge>
        <MediaQuery query="(min-width: 1224px)">
        <div className="user-dropdown-btn">

                  Hi, &nbsp;&nbsp;
                  <span >{this.state.userName}</span>
                  &nbsp;&nbsp;
                  <Icon type="down" />

         </div>
         </MediaQuery>
         </a>
       </Dropdown>
       </div>
       :
       <Button icon="user" type="primary" ghost onClick={this.handleSignIn.bind(this)}>
          Sign in
       </Button>
    ;

    return(
      <div id="top-header" >
          <Affix offsetTop={this.state.top}>
              <div className="fix-top">
                <Row>
                  <Col span={2}>
                  </Col>
                  <Col span={1}>
                    <Link to="/">
                      <Icon
                        style={{'padding':10,fontSize: 24,}}
                        type="home"></Icon>
                      </Link>
                  </Col>
                  <Col span={8}>
                    {weathercomp}
                  </Col>
                  <Col span={5}>
                    {clockcomp}
                  </Col>
                  <Col span={6}>
                    <div className="user-button" >
                      {userShow}
                    </div>
                  </Col>
                  <Col span={2}>
                  </Col>
                </Row>
              </div>
            </Affix>
            <Modal
                title="Sing in"
                visible={this.state.modalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText="Close"
                cancelText="Cancel">
                <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                      <FormItem label="User Name">
                        {getFieldDecorator('userName', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                      </FormItem>
                      <FormItem label="Password">
                          {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                          )}
                      </FormItem>
                      <FormItem>

                        {getFieldDecorator('remember', {
                          valuePropName: 'checked',
                          initialValue: true,
                        })(
                          <Checkbox>Remember me</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" style={{float: 'right'}}>Log in</Button>
                      </FormItem>
                  </Form>
              </Modal>
      </div>

    )
  }
}

export default TopHeaderOnPC = Form.create({})(TopHeaderOnPC);
