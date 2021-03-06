import React, { Component } from 'react';
import {Col, Row} from 'antd';
//import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import {NewsService} from './news_service'

class NewsBlockOnPC extends Component{


  constructor(){
    super();
    this.state = {
      news:'loding news ....',
    };
  }


  render(){
    const articles = this.props.articles;
    let newsList = [];
    this.props.totalResults>0
    ? articles.map((newsItem,index)=>{
      if(index === 0){
        newsList.push(
          <div key={index}>
            <Row>
              <a href={newsItem.url} target="_blank">
                <div className="block-headline">{newsItem.title}</div>
                <div>{newsItem.description}</div>
              </a>
            </Row>
            <div className="div-line"></div>
          </div>
        )
      }else if(index<5){
        newsList.push(
        <div className="news-img-list" key={index}>
          <Row>
            <a href={newsItem.url} target="_blank">
              <Row>
                <Col span={8}>
                  <img src={newsItem.urlToImage} alt="news_img"/>
                </Col>
                <Col span={16}>
                  <div className="news-img-title-right">{newsItem.title}</div>
                </Col>
              </Row>
            </a>
          </Row>
          <div className="div-line"></div>
        </div>
      )}
    })
    :'no news is found...';

    return(
      <div>
            { newsList }
      </div>

    )
  }
}

NewsBlockOnPC = NewsService(NewsBlockOnPC,'abc-news');
export default NewsBlockOnPC
