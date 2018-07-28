import React, { Component } from 'react';
import {Tabs} from 'antd';
import {NewsService} from './news_service'

//const TabPane = Tabs.TabPane;

class NewsHeadlineList extends Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    const articles = this.props.articles;
    const headlinelist = []
    this.props.totalResults > 0
    ? articles.filter(newsItem=> newsItem !== null)
    .map((newsItem,index)=>{
        let duration = (Date.now()-new Date(newsItem.publishedAt))/(1000*3600);
        if(duration<1){
          duration = `${Math.round(duration*60)} minutes ago`;
        }else{
          duration = Math.round(duration);
          duration = `${duration} ${duration==='1'?'hour':'hours'} ago`;
        }
        headlinelist.push(
            <div key={index}>
                <a href={newsItem.url} target="_blank">
                  <div>
                    <div className="more-news-list"> {newsItem.title}</div>
                    <span className="duration-time">{duration}</span>
                  </div>
                </a>
                <div className="div-line"></div>
            </div>
        )
    })
    :headlinelist['loading....'];

    return(
      <div className="more-news">
        <div className="more-news-header">
          <span>More Headline</span>
        </div>
        <div className="div-line"></div>
        <div>
          {headlinelist}
        </div>
      </div>
    )
  }
}
NewsHeadlineList = NewsService(NewsHeadlineList, 'bbc-news');
export default NewsHeadlineList
