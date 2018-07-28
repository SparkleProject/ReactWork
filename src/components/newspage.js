import React, { Component } from 'react';
import HeaderOnPC from './header_pc'
import FooterOnPC from './footer_pc'
import NewsContainerOnPC from './newscontainer_pc'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PersonalOnPC from './personal_pc'
import CustomizeNewsOnPC from './customizenews_pc'
import TopHeaderOnPC from './topheader_pc'

import LeftNewsImgBlock from './leftnewsimgblock'

export default class NewsPage extends Component{

  constructor(){
    super();
    this.state = {
      userNickName:'Eric',
      category:'',
    };
  }


  handleClickMenu = (key)=>{
    console.log('click key:',key);
    this.setState({category:key});
  }

  render(){

    console.log('newspage...',this.state.category);

    const CustomizeNews = (props)=>{
      return(
        <CustomizeNewsOnPC
          category={this.state.category}
          {...props}>
        </CustomizeNewsOnPC>
      )
    }

    return(
      <div>
        <Router>
          <div>
            <HeaderOnPC clickMenu={this.handleClickMenu.bind(this)}></HeaderOnPC>
            <Route exact path="/" component={NewsContainerOnPC} />
            <Route exact path="/customize/:category" render={CustomizeNews} />
          </div>
        </Router>
      </div>
    )
  }
}
