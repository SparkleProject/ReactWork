import React, { Component } from 'react';
import { Col} from 'antd';

export default class FooterOnMobile extends Component{

  render(){
    return(
      <div id="mobilefooter">
        <footer className="footer">
          <Col span={2}></Col>
          <Col span={20}>
            &copy; &nbsp;2018 Lintech. All Right Reserved.
          </Col>
          <Col span={2}></Col>
        </footer>
      </div>
    )
  }
}
