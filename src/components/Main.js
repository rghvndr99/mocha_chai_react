import React, { Component } from "react";
import Filter from './filter.js';
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            isSeachAcross:false
          }
          }
    handleCheck=(e)=>{
        this.setState({
            isSeachAcross:e.currentTarget.checked
        })
        
    }

  render() {
         return <div className="heading">
                 <h1 id="headerid">Filter Users</h1>
                 <input type="checkbox" id="checkboxchk" onChange={this.handleCheck.bind(this)} /> <span>Filter in all props</span>
                 
                 <Filter isSeachAcross={this.state.isSeachAcross}/>
            </div>
  }
}
export default Main;