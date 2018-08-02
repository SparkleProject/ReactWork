import React, { Component } from 'react';
import {Row, Col, Tabs,Spin} from 'antd';
import {NewsService} from './news_service'

const TabPane = Tabs.TabPane;

class NewsImgBlock extends Component{
  constructor(){
    super();

  }



  render(){

    const articles = this.props.articles;
    const imgBlock = []
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
        imgBlock.push(
          <Col md={6} sm={12} key={index}>
            <div  className="news-img-block">
              <a href={newsItem.url} target="_blank">
                <img src={newsItem.urlToImage} alt="news_img"/>
                <div>
                  <span className="news-img-title"> {newsItem.title}</span>
                  <span >{duration}</span>
                  <div className="news-img-desc">
                    {newsItem.description}
                  </div>
                </div>
              </a>
            </div>
          </Col>
        )

    })
    :imgBlock.push(<Spin/>);

    return(
      <div className="news-img-container">
        <Tabs>
          <TabPane tab ={this.props.title} key='1'>
            <Row type="flex">
                {imgBlock}
            </Row>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
NewsImgBlock = NewsService(NewsImgBlock);
export default NewsImgBlock
