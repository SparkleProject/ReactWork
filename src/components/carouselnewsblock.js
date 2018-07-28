import React, { Component } from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import NewsBlockOnPC from './newsblock_pc'
import {NewsService} from './news_service'
import NewsHeadlineList from './newsheadlinelist_pc'
import MediaQuery from 'react-responsive'


class CarouselNewsBlock extends Component{

  constructor(){
    super();
    this.state = {};
  }


  render(){
    const settings ={
      dots :true,
      infinite: true,
      speed: 500,
      slidesToShow:1,
      autoplay:true
    }

    const articles = this.props.articles;
    let newsList = []
    this.props.totalResults > 0
    ? articles.filter((newsItem)=>newsItem.urlToImage !==''&& newsItem.urlToImage !== null && newsItem !== null)
    .map((newsItem,index)=>{
      let duration = (Date.now()-new Date(newsItem.publishedAt))/(1000*3600);
      if(duration<1){
        duration = `${Math.round(duration*60)} minutes ago`;
      }else{
        duration = Math.round(duration);
        duration = `${duration} ${duration==='1'?'hour':'hours'} ago`;
      }
      newsList.push(
        <div key={index}>
          <a href={newsItem.url} target="_blank">
            <img src={newsItem.urlToImage} alt="news_pic"/>
            <MediaQuery query='(min-device-width: 1224px)'>
            <div className= "img-headline">
              <h2>{newsItem.title}</h2>
              <div>
                <span className="duration-time"> {duration} </span>
                <span className="articleHeader-author">{newsItem.author}</span>
              </div>
            </div>
            </MediaQuery>
          </a>
        </div>
      )
    })
    :newsList['loading....'];

    return(
      <div className="carousel">
        <Carousel {...settings}>
            {newsList}
        </Carousel>
      </div>
    )
  }
}
CarouselNewsBlock = NewsService(CarouselNewsBlock, 'abc-news');
export default CarouselNewsBlock
