import React, { Component } from 'react';
import HeaderOnPC from './header_pc'
import FooterOnPC from './footer_pc'
import NewsContainerOnPC from './newscontainer_pc'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PersonalOnPC from './personal_pc'
import NewsPage from './newspage'
import TopHeaderOnPC from './topheader_pc'

import LeftNewsImgBlock from './leftnewsimgblock'

export default class IndexPC extends Component{
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

  render(){
    const PersonalPage = (props) => {
      return (
        <PersonalOnPC
          update={this.handleTopBarUpdate.bind(this)}
          {...props}
        />
      );
    }

    return(
      <div>
        <Router>
          <div>
            <TopHeaderOnPC
              showWeather={this.state.properties.showWeather}
              showClock={this.state.properties.showClock}></TopHeaderOnPC>
            <Route exact path="/" component={NewsPage} />
            <Route path="/personal" render={PersonalPage} />
          </div>
        </Router>
        <FooterOnPC></FooterOnPC>
      </div>
    )
  }
}
