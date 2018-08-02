import React, { Component } from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import NewsBlockOnPC from './newsblock_pc'
import {NewsService} from './news_service'
import NewsHeadlineList from './newsheadlinelist_pc'
import CarouselNewsBlock from './carouselnewsblock'
import MediaQuery from 'react-responsive'
import TopHeadlineText from './topheadlinetext'
import LeftNewsImgBlock from './leftnewsimgblock'
import NewsImgBlock from './newsimgblock_pc'


class NewsContainerOnPC extends Component{

  constructor(){
    super();
    this.state = {};
  }


  render(){

    const option_leftcontainer_carousel ={
      type:'publisher',
      data:'bbc-news',
      count:'10'
    }
    const option_leftcontainer_bottom ={
      type:'publisher',
      data:'cnn',
      count:'4'
    }

    const option_rightcontainer_headline ={
      type:'publisher',
      data:'abc-news',
      count:'1'
    }

    const option_rightcontainer_block ={
      type:'publisher',
      data:'abc-news',
      order:'DESC',
      count:'8'
    }

    const option_headlinelist ={
      type:'publisher',
      data:'buzzfeed',
      count:'5'
    }

    const option_newsImgBlock_1 ={
      type:'country',
      data:'nz',
      title:'New Zealand',
      count:'8'
    }
    const option_newsImgBlock_2 ={
      type:'publisher',
      data:'nbc-news',
      title:'NBC News',
      count:'8'
    }

    return(
      <div className="newscontainer">
        <Row>
          <Col md={2}></Col>
          <Col md={20}>
            <Row>
              <Col md={9} sm={24}>
                <div className="leftcontainer">
                  <CarouselNewsBlock {...option_leftcontainer_carousel}></CarouselNewsBlock>
                  <div>
                    <Row>
                       <LeftNewsImgBlock {...option_leftcontainer_bottom}></LeftNewsImgBlock>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md={9} sm={24}>
                <div className="rightcontainer">
                  <TopHeadlineText {...option_rightcontainer_headline}></TopHeadlineText>
                  <LeftNewsImgBlock {...option_rightcontainer_block}></LeftNewsImgBlock>
                </div></Col>
              <Col md={6} sm={24}>
                <NewsHeadlineList {...option_headlinelist}></NewsHeadlineList>
              </Col>
            </Row>
            <Row>
              <NewsImgBlock {...option_newsImgBlock_1}></NewsImgBlock>
            </Row>
            <Row>
              <NewsImgBlock {...option_newsImgBlock_2}></NewsImgBlock>
            </Row>

          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    )
  }
}

export default NewsContainerOnPC
