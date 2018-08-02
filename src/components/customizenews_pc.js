import React, { Component } from 'react';
import HeaderOnPC from './header_pc'
import FooterOnPC from './footer_pc'
import NewsContainerOnPC from './newscontainer_pc'
import NewsImgBlock from './newsimgblock_pc'
import TopHeaderOnPC from './topheader_pc'
import LeftNewsImgBlock from './leftnewsimgblock'
import {Row, Col} from 'antd'
import NewsHeadlineList from './newsheadlinelist_pc'
const mock = require('../mock/mock');

export default class CustomizeNewsOnPC extends Component{
  constructor(){
    super();
    this.state ={
      category:'',
    }
  }

  componentWillMount(){
    this.setState({category:this.props.category});
  }




  render(){


    let category =  this.props.category;
    let map = mock.MockCategoryMapping[category];

    const option_newsimgblock ={
      type:'publisher',
      data:map[0],
      count:'8',
      title: this.state.category
    }


    const option_leftimgblock_1 ={
      type:'publisher',
      data:map[1],
      count:'8'
    }
    const option_leftimgblock_2 ={
      type:'publisher',
      data:map[2],
      count:'8'
    }

    const option_headlinelist ={
      type:'publisher',
      data:map[3],
      count:'8'
    }

    return(
      <div>
        <Row>
          <Col span="2"></Col>
          <Col span="20">
            <Row>
              <Col span="24">
                <NewsImgBlock {...option_newsimgblock}></NewsImgBlock>
              </Col>
            </Row>
            <Row>
              <Col md="8" sm="24">
                <LeftNewsImgBlock {...option_leftimgblock_1}></LeftNewsImgBlock>
              </Col>
              <Col md="8" sm="24">
                <LeftNewsImgBlock {...option_leftimgblock_2}></LeftNewsImgBlock>
              </Col>
              <Col md="8" sm="24">
                <NewsHeadlineList {...option_headlinelist}></NewsHeadlineList>
              </Col>
            </Row>

          </Col>
          <Col span="2"></Col>
        </Row>

      </div>
    )
  }
}
