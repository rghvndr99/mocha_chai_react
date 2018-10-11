import React from "react";
import Main from "../src/components/Main.js";
import { configure, mount,shallow,render } from 'enzyme';
import chai,{ expect } from "chai";
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';


configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());
chai.use(require('chai-arrays'));

describe ("Main component",()=>{
    const wrapper=mount(<Main/>);
    const wraperInstance=wrapper.instance();
    const state=wraperInstance.state;
	it("should an object and not to be empty",()=>{          
		  expect(wrapper).
          to.be.a('object').
          to.not.be.blank();
	});
    it("should have Header",()=>{
       		 expect(wrapper.find('#headerid')).to.have.lengthOf(1);
	});
    it("checkbox status",()=>{ 
        const checkbox= wrapper.find('#checkboxchk');
        if(state.isSearchAcross){
         expect(checkbox).to.be.checked();
        }
        else {
         expect(checkbox).to.not.be.checked();
        }        
    });

    it("checkbox click event",()=>{
          const checkbox= wrapper.find('#checkboxchk');
          checkbox.simulate("change",'target':{'checked':state.isSearchAcross});
          expect(wrapper).to.have.state('isSearchAcross').equal(state.isSearchAcross);
    });
});
