import React, { Component } from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import NewsBlockOnPC from './newsblock_pc'
import {NewsService} from './news_service'
import NewsHeadlineList from './newsheadlinelist_pc'
import CarouselNewsBlock from './carouselnewsblock'
import MediaQuery from 'react-responsive'

class TopHeadlineText extends Component{

  constructor(){
    super();
    this.state = {
      news:'loding ....',
    };
  }

  render(){
    const articles = this.props.articles;
    let text = [];
    this.props.totalResults>0
    ? articles.map((newsItem,index)=>{
        text.push(
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
    })
    :'no news is found...';

    return(
      <div>
        { text }
      </div>
    )
  }
}
TopHeadlineText = NewsService(TopHeadlineText, 'abc-news');
export default TopHeadlineText
