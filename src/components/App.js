import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexPC from './index_pc'
import IndexMobile from './index_mob'
import PersonalOnPC from './personal_pc'
import MediaQuery from 'react-responsive'
import CustomizeNewsOnPC from './customizenews_pc'
import TopHeaderOnPC from './topheader_pc'
import '../css/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userId: '',
      userName: '',
      isLogin: false,
      properties: {
        showWeather: true,
        showClock: false,
        newsMenu: []
      },
    };
  }

  componentWillMount(){
    //localStorage.setItem('isLogin', this.state.isLogin)
    //localStorage.setItem('properties', JSON.stringify(this.state.properties))
    let userName = localStorage.getItem('userName');
    if(userName === null || (typeof userName === "undefined")){
        this._setDefault();
    }
  }

  _setDefault = ()=>{
    localStorage.setItem('properties', JSON.stringify(this.state.properties))
    localStorage.setItem('userId', this.state.userId)
    localStorage.setItem('userName', this.state.userName)
    localStorage.setItem('isLogin', this.state.isLogin)
  }


  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <IndexPC></IndexPC>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <IndexMobile></IndexMobile>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
