import React, { Component } from "react";
import Filter from './filter.js';
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            isSearchAcross:false
          }
        this.handleCheck=this.handleCheck.bind(this);
          }
    handleCheck=(e)=>{
        this.setState({
              isSearchAcross:e.currentTarget.checked
        })        
    }

  render() {
         return <div className="heading">
                 <h1 id="headerid">Filter Colors</h1>
                 <input type="checkbox" checked={this.state.isSearchAcross} id="checkboxchk" onChange={this.handleCheck} /> <span>Filter in all props</span>
                 
                 <Filter isSearchAcross={this.state.isSearchAcross}/>
            </div>
  }
}
export default Main;