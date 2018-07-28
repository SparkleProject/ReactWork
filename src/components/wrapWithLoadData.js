import React, {Component} from 'react'

export default (WrappedComponent,name) =>{
  class LocalStorageActions extends Component {
    constructor(){
      super();
      this.state = {data: null}
    }

    componentWillMount(){
      let data = localStorage.getItem(name);
      try{
        //JSON parse may faild
        this.setState({data:JSON.parse(data)});
      }catch(e){
        //set with plan-text string
        this.setState({data})
      }
    }

    saveData(data){
      try {

        localStorage.setItem(name, JSON.stringify(data))
      } catch (e) {

        localStorage.setItem(name, `${data}`)
      }
    }
    deleteData(data){

    }

    render(){
      return(
        <WrappedComponent
          data = {this.state.data}
          saveData = {this.saveData.bind(this)}
          {...this.props}
        ></WrappedComponent>
      )
    }
  }
   return LocalStorageActions
}
