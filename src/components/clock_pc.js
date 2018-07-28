import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import {Icon} from 'antd'

export default class ClockOnPC extends Component{

  constructor(){
    super();
    this.state = {
      time:'',
      timeInt:''
    };
  }
  componentWillMount(){
    let intval = setInterval(
      ()=>this.setState({time: new Date().toLocaleString('en-NZ',{hour12: false,})})
      , 1000);
    this.setState({timeInt:intval});
  }

  componentwillUnmount(){
    clearInterval(this.state.timeInt);
  }

  render(){

    return(
      <MediaQuery query="(min-width: 1224px)">
      <div className="clock-container">
        <div className="clock-pad" >
          <Icon type="clock-circle-o"></Icon>
        </div>
        <div className="clock-now">{this.state.time}</div>
      </div>
      </MediaQuery>
    )
  }
}
