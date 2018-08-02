import React, {Component} from 'react'
import PropTypes from 'prop-types'
const mock = require('../mock/mock');

export const NewsService  = (WrappedComponent, sources)=>{
  class Service extends Component{
    static contextTypes = {
      baseUrl: PropTypes.object
    }

    constructor () {
     super()
     this.state = {
       baseUrl: mock.MockSourceAPI.apiUrl,
       key:mock.MockSourceAPI.apiKey
    }
   }
   componentWillMount () {
      this.getData();
    }

   getData =()=>{
     let fetchOptions = {
       method: 'GET'
     };
     //set source properties, only used for demostraionthe.
     // For security, api key should be not embeded in clint side!!
     // an back end api server is highly recomented and apend API key on back end servier.
     let data= this.props.data?this.props.data:sources;
     let url = "";
     if(this.props.type && this.props.data){
         switch(this.props.type){
          case 'publisher':
            url = `${this.state.baseUrl}?sources=${data}&apiKey=${this.state.key}`;
            break;
          case 'country':
            url = `${this.state.baseUrl}?country=${data}&apiKey=${this.state.key}`;
            break;
       }
     }else{
       url = `${this.state.baseUrl}?sources=${data}&apiKey=${this.state.key}`;
     }

     //set result filter
     let order = new String(this.props.order).toUpperCase();
     let count = this.props.count;
     let newsProps = {}
     fetch(url,fetchOptions)
       .then(response=>response.json())
       .then(json=>{
         newsProps = json;
         if(order==='DESC') {
           newsProps.articles.reverse().splice(count,newsProps.articles.length-count);
         }else{
           newsProps.articles.splice(count,newsProps.articles.length-count);
         }
         this.setState({newsProps})
       })
       .catch(error=>console.log(error));
   }


    render(){
      console.log('service data:',this.props.data);
      return <WrappedComponent {...this.props} {...this.state.newsProps} update={this.getData.bind(this)}/>
    }
  }

  return Service

}
