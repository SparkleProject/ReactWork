import React, { Component } from 'react';
import HeaderOnPC from './header_pc'
import FooterOnPC from './footer_pc'
import NewsContainerOnPC from './newscontainer_pc'
import NewsImgBlock from './newsimgblock_pc'
import TopHeaderOnPC from './topheader_pc'
import LeftNewsImgBlock from './leftnewsimgblock'
import {Row, Col} from 'antd'
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
      count:'4'
    }


    const option_leftimgblock ={
      type:'publisher',
      data:map[1],
      count:'4'
    }

    return(
      <div>
        <Row>
          <Col span="2"></Col>
          <Col span="20">
            <Row>
              {this.state.category}
              <Col span="24"> <NewsImgBlock {...option_newsimgblock}></NewsImgBlock></Col>

            </Row>
          </Col>
          <Col span="2"></Col>
        </Row>



      </div>
    )
  }
}
