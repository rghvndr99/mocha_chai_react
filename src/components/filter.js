import React, { Component } from "react";
import colorList from "../../mockdata/mock.js";
class Filter extends Component {
    constructor(props){
        super(props);
         this.state={
             colorList:colorList,
             filteredList:[],
             isFromSearch:false
           }
          }
    handleFilter=(e)=>{
        let currentElement=e.target.value;
        let {colorList}=this.state;
        let {isSearchAcross}=this.props;
        let newFilteredColor=colorList.filter((item)=>{
            return isSearchAcross?(item.color.indexOf(currentElement)>-1 ||item.value.indexOf(currentElement)>-1):(item.color.indexOf(currentElement)>-1);
        });
        
        this.setState({
            filteredList:newFilteredColor,
            isFromSearch:true
        });
    }

    
  render() {
      const {filteredList,colorList,isFromSearch}=this.state;
      let {isSearchAcross}=this.props;
      const colorlistarr=isFromSearch?filteredList:colorList;
      const ListOfFilteredColor=colorlistarr.map((item)=>{
     const itemVal=isSearchAcross?(item.color+' '+item.value): item.color;
          return <li key={item.value}>{itemVal}</li>
      });
         return <div>
                  <input type="text" className="txt-filter" placeholder="search" onChange={this.handleFilter.bind(this)} />
                  <ul>
          {ListOfFilteredColor}
                  </ul>
               </div>
  }
}
export default Filter;