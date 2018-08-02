import React, { Component } from 'react';
import {Row, Col, Tabs, Carousel,Spin} from 'antd';
import NewsBlockOnPC from './newsblock_pc'
import {NewsService} from './news_service'
import NewsHeadlineList from './newsheadlinelist_pc'
import CarouselNewsBlock from './carouselnewsblock'
import MediaQuery from 'react-responsive'

class LeftNewsImgBlock extends Component{

  constructor(){
    super();
    this.state = {
      news:'loding ....',
    };
  }

  render(){
    const articles = this.props.articles;
    const order = this.props.order;
    const count = this.props.count;
    let counter = 0;
    let newsList = [];

    this.props.totalResults>0
    ? articles.filter((newsItem)=>newsItem.urlToImage !==''&& newsItem.urlToImage !== null && newsItem !== null)
      .map((newsItem,index)=>{
        if(index<10){
          newsList.push(
          <div className="news-img-list" key={index}>
            <Row type="flex">
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
    :newsList.push(<Spin  />);
    // if(order=='DESC') {
    //   newsList.reverse().splice(count,newsList.length-count);
    // }else{
    //   newsList.splice(count,newsList.length-count);
    // }

    return(
      <div>
            { newsList }
      </div>

    )
  }
}
LeftNewsImgBlock = NewsService(LeftNewsImgBlock, 'abc-news');
export default LeftNewsImgBlock
