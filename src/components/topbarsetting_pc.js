import React, { Component } from 'react';
import {Row, Col, Menu,Card,Icon,Switch,Select} from 'antd';


export default class TopBarSettingOnPC extends Component{
  constructor(){
    super();
    this.state = {
      isLogin:'',
      userId:'',
      userName:'',
      properties: {
        showWeather:true,
        showClock:true,
        newsMenu:''
      },
    }
  }

    componentWillMount(){
      let isLogin = this._loginState();
      if(isLogin){
        this._loadProperties();
      }
    }

    _saveData(data){
      console.log('saving properties...',JSON.stringify(data));
      try {
        localStorage.setItem('properties', JSON.stringify(data))
      } catch (e) {
        localStorage.setItem('properties', `${data}`)
      }
    }

    _loadProperties () {

    	    let properties = localStorage.getItem('properties');
          console.log('properties:',properties);
    	    if (properties) {
    	      properties = JSON.parse(properties)
    	      this.setState({ ...this.state,properties})
    	    }
      	}

    _loginState = ()=> {
        	let isLogin = localStorage.getItem('isLogin');
        	if (isLogin === 'true') {
        	   this.setState({ isLogin:true });
             this.setState({ userId:localStorage.getItem('userId') });
             this.setState({ userName:localStorage.getItem('userName')});
             return true;
           }else{
             this.setState({ isLogin:false });
             this.setState({ userId:'' });
             this.setState({ userName:''});
             return false;
           }
          }

    handleOnChange =(key,value)=>{
          let properties = {};
          switch(key){
            case 'WEATHER':
              properties = { ...this.state.properties, showWeather: value }
              break;
            case 'CLOCK':
              properties = { ...this.state.properties, showClock: value }
              break;
            default:
              properties = { ...this.state.properties}
          }

          this.setState ({...this.state,properties});
          this._saveData(properties);
          this.props.update();
        }

  render(){
    return(
            <Card  title="Top Bar Setting"

              style={{height:200,marginTop: 12}}
                >
                <div id="topbar-setting">
                  <div>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={15}>
                          <Row>
                            <Col md={12}>  <h3> Realtime Weather :</h3></Col>
                            <Col md={6}> </Col>
                            <Col md={6}><Switch checked={this.state.properties.showWeather} onChange={this.handleOnChange.bind(this,'WEATHER')} /></Col>
                          </Row>
                          <div className="div-line"></div>
                          <Row>
                            <Col md={12}>  <h3>Local Time :</h3></Col>
                            <Col md={6}> </Col>
                            <Col md={6}><Switch checked={this.state.properties.showClock} onChange={this.handleOnChange.bind(this,'CLOCK')} /></Col>
                          </Row>
                        </Col>
                      <Col md={8}></Col>
                    </Row>
                  </div>
                </div>
              </Card>
    )
  }
}
