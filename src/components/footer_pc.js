import React, { Component } from 'react';
import { Col,Row} from 'antd';

export default class FooterOnPC extends Component{

  render(){
    return(
      <div id="pcfooter" >
        <footer >
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <span>
                &copy; &nbsp;2018 All Right Reserved.&nbsp;
                <a href="https://newsapi.org/s/google-news-api">Powered by NewsAPI.org.</a>
              </span>
            </Col>
            <Col span={2}></Col>
          </Row>
        </footer>
      </div>
    )
  }
}
