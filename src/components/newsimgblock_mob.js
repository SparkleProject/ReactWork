import React, { Component } from 'react';
import {Row, Col, Tabs} from 'antd';
import {NewsService} from './news_service'

const TabPane = Tabs.TabPane;

class NewsImgBlockOnMobile extends Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    const articles = this.props.articles;
    const imgBlock = []
    this.props.totalResults > 0
    ? articles.filter((newsItem)=>newsItem.urlToImage !==''&& newsItem.urlToImage !== null && newsItem !== null)
    .map((newsItem,index)=>{
      if(index<8){
        let duration = (Date.now()-new Date(newsItem.publishedAt))/(1000*3600);
        if(duration<1){
          duration = `${Math.round(duration*60)} minutes ago`;
        }else{
          duration = Math.round(duration);
          duration = `${duration} ${duration==='1'?'hour':'hours'} ago`;
        }
        imgBlock.push(
          <Col md={6} sm={12} key={index}>
            <div  className="news-img-block">
              <a href={newsItem.url} target="_blank">
                <img src={newsItem.urlToImage} alt="news_img"/>
                <div>
                  <span className="news-img-title"> {newsItem.title}</span>
                  <span >{duration}</span>
                  <div>
                    {newsItem.description}
                  </div>
                </div>

              </a>
            </div>
          </Col>
        )
      }
    })
    :imgBlock['loading....'];

    return(
      <div className="news-img-container">

          <Row>
            <Col md={2}></Col>
              <Col md={20}>
                {imgBlock}
              </Col>
            <Col md={2}></Col>
          </Row>

      </div>
    )
  }
}
NewsImgBlockOnMobile = NewsService(NewsImgBlockOnMobile, 'bbc-news');
export default NewsImgBlockOnMobile
