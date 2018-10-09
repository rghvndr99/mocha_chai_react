import React, { Component } from "react";
class Filter extends Component {
    constructor(props){
        super(props);
         this.state={
             colorList:[
                    {
                        color: "red",
                        value: "#f00"
                    },
                    {
                        color: "green",
                        value: "#0f0"
                    },
                    {
                        color: "blue",
                        value: "#00f"
                    },
                    {
                        color: "cyan",
                        value: "#0ff"
                    },
                    {
                        color: "magenta",
                        value: "#f0f"
                    },
                    {
                        color: "yellow",
                        value: "#ff0"
                    },
                    {
                        color: "black",
                        value: "#000"
                    }
              ],
             filteredList:[]
           }
          }
    handleFilter=(e)=>{
        let currentElement=e.target.value;
        let {colorList}=this.state;
        let {isSeachAcross}=this.props;
        let newFilteredColor=colorList.filter((item)=>{
            return isSeachAcross?(item.color.indexOf(currentElement)>-1 ||item.value.indexOf(currentElement)>-1):(item.color.indexOf(currentElement)>-1);
        });
        
        this.setState({
            filteredList:newFilteredColor
        });
    }

    
  render() {
      const {filteredList,colorList}=this.state;
      let {isSeachAcross}=this.props;
      const colorlistarr=filteredList.length?filteredList:colorList;
      const ListOfFilteredColor=colorlistarr.map((item)=>{
              const itemVal=isSeachAcross?(item.color+' '+item.value): item.color;
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