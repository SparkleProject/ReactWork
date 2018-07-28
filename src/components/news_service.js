import React, {Component} from 'react'
import PropTypes from 'prop-types'


export const NewsService  = (WrappedComponent, sources)=>{
  class Service extends Component{
    static contextTypes = {
      baseUrl: PropTypes.object
    }

    constructor () {
     super()
     this.state = {
       baseUrl: 'https://newsapi.org/v2/top-headlines',
    }
   }

   getData =()=>{
     let fetchOptions = {
       method: 'GET'
     };
     //set source properties
     let data= this.props.data?this.props.data:sources;
     let apiKey ="8387e17c44564618a759c1f63fed10fb";
     let url = "";
     if(this.props.type && this.props.data){
         switch(this.props.type){
          case 'publisher':
            url = `${this.state.baseUrl}?sources=${data}&apiKey=${apiKey}`;
            break;
          case 'country':
            url = `${this.state.baseUrl}?country=${data}&apiKey=${apiKey}`;
            break;
       }
     }else{
       url = `${this.state.baseUrl}?sources=${data}&apiKey=${apiKey}`;
     }
     //console.log(url);

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

   componentWillMount () {
      this.getData();
    }


    render(){
      console.log('service data:',this.props.data);
      return <WrappedComponent {...this.props} {...this.state.newsProps} update={this.getData.bind(this)}/>
    }
  }

  return Service

}
