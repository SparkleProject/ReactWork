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
    this.state ={
      properties: {
        showWeather:'',
        showClock:'',
        newsMenu:''
      },
    }
  }

  componentWillMount(){
    this._loadProperties();
  }

  _saveData(data){
    try {
      localStorage.setItem('properties', JSON.stringify(data))
    } catch (e) {
      localStorage.setItem('properties', `${data}`)
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
    this._loadProperties();
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
