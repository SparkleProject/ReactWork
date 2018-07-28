import React, { Component } from 'react';
import {Row, Col, Menu,Card,Icon,Switch,Select,Button} from 'antd';

const Option = Select.Option;
const mock = require('../mock/mock');
export default class MenuSettingOnPC extends Component{
  constructor(){
    super();
    this.state = {
      userNickName:'Eric',
      properties: {
        showWeather:'',
        showClock:'',
        newsMenu:''
      },
    };
  }

  componentWillMount(){
    this._loadProperties();
  }

  _saveData(data){
    console.log(JSON.stringify(data));
    try {
      localStorage.setItem('properties', JSON.stringify(data))
    } catch (e) {
      localStorage.setItem('properties', `${data}`)
    }
  }

  _loadProperties () {
  	    let properties = localStorage.getItem('properties');
  	    if (properties) {
  	      properties = JSON.parse(properties)
  	      this.setState({ properties })
  	    }
    	}
  handleOnChange =()=>{


  }


  handleMenuChange=(value)=>{
      let items = value.toString().split(",");
      let properties = {...this.state.properties,newsMenu:items}
      this.setState ({properties});
      this._saveData(properties);
  }

  render(){
    const children = [];
    for (let item of mock.MockMenuOption) {
      children.push(<Option key={item}>{item}</Option>);
    }

    return(
            <Card title="News Setting"
            style={{height:200,marginBottom: 16}}
            >
              <div id="news-setting">
                <div>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={19}>
                        <Row>
                          <Col md={6}>  <h3> News Menu:</h3></Col>
                          <Col md={1}> </Col>
                          <Col md={17}>
                          <Select
                              mode="multiple"
                              size={'default'}
                              placeholder="Please select"
                              defaultValue={this.props.menus}
                              onChange={this.handleMenuChange.bind(this)}
                              style={{ width: '100%' }}
                              >
                              {children}
                            </Select>
                            <br />
                          </Col>
                        </Row>
                      </Col>
                    <Col md={2}></Col>
                    <Col md={2}>

                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
    )
  }
}
