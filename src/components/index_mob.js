import React, { Component } from 'react';
import HeaderOnMobile from './header_mob'
import FooterOnMobile from './footer_mob'
import {Tabs } from 'antd';
import '../css/mobile.css';
import NewsImgBlockOnMobile from './newsimgblock_mob'
import CarouselNewsBlock from './carouselnewsblock'
import LeftNewsImgBlock from './leftnewsimgblock'


//const users = require('../mock/users');
const TabPane = Tabs.TabPane;
//const FormItem = Form.Item;


export default class IndexMobile extends Component{

  render(){
    return(
      <div>
        <HeaderOnMobile></HeaderOnMobile>
        <div>
          <Tabs>
            <TabPane tab="GLOBAL" key="1">
              <CarouselNewsBlock></CarouselNewsBlock>
              <LeftNewsImgBlock></LeftNewsImgBlock>
              <NewsImgBlockOnMobile></NewsImgBlockOnMobile>

            </TabPane>
            <TabPane tab="local" key="2"></TabPane>
            <TabPane tab="global" key="3"></TabPane>
            <TabPane tab="subscribe" key="4"></TabPane>
          </Tabs>
        </div>
        <FooterOnMobile></FooterOnMobile>
      </div>
    )
  }
}
