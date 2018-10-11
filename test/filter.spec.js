import React from "react";
import Filter from "../src/components/filter.js";
import colorList from "../mockdata/mock.js";
import { configure, mount,shallow,render } from 'enzyme';
import chai,{ expect } from "chai";
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';


configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());
chai.use(require('chai-arrays'));



describe("mockdata test",()=>{
    it("should be a valid array",()=>{
        expect(colorList).to.be.array().and.not.to.be.ofSize(0);
    })
    
});

describe("filter component",()=>{
     const wrapper=mount(<Filter isSearchAcross={true}/>);
     const wraperInstance=wrapper.instance();
     const state=wraperInstance.state;
     const props=wrapper.props();
     const txtbox=wrapper.find('.txt-filter');
    
    it("should an object and not to be empty",()=>{          
		  expect(wrapper).
          to.be.a('object').
          to.not.be.blank();
	});
    it("should have state object and its properties",()=>{
        expect(wrapper).to.have.state('colorList');
        expect(wrapper).to.have.state('filteredList').to.have.lengthOf(0);
    });
    it("should have textbox",()=>{
       		 expect(txtbox).to.have.lengthOf(1);
	});
    it("checking for props",()=>{
        expect(wrapper).to.have.props(['isSearchAcross']);
    })
    it("filter event for hexacode",()=>{                
                txtbox.simulate("change",{target:{value:'00'}});
                if(props.isSearchAcross){
                    expect(wrapper).to.have.state("filteredList").
                    to.be.array().and.
                    to.have.lengthOf(3);
                   }
                   else{
                    expect(wrapper).to.have.state("filteredList").
                    to.be.array().and.
                    to.have.lengthOf(0);
                   }
   });
  it("filter event for color name",()=>{
                txtbox.instance().value='b';
                txtbox.simulate("change");
                expect(wrapper).to.have.state("filteredList").
                to.be.array().and.
                to.have.lengthOf(2);
    });
 });