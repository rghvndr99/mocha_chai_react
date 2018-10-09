import React from "react";
import Main from "../src/components/Main.js";
import { configure, mount,shallow,render } from 'enzyme';
import chai,{ expect } from "chai";
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe ("Main component",()=>{
    const wrapper=mount(<Main/>);
	it("should an object and not to be empty",()=>{          
		  expect(wrapper).
          to.be.a('object').
          to.not.be.blank();
	});
    it("should have Header",()=>{
       		 expect(wrapper.find('#headerid')).to.have.lengthOf(1);
	});
    it("checkbox should be checked",()=>{
        expect(wrapper.find('#checkboxchk')).to.be.checked();
    })
});