import React from "react";
import Main from "../src/components/Main.js";
import { configure, mount,shallow,render } from 'enzyme';
import chai,{ expect } from "chai";
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe ("Main component",()=>{
	it("should an object",()=>{
          const wrapper=mount(<Main/>);
		 expect(wrapper).to.be.a('object');
	});
    it("should have class name",()=>{
          const wrapper=mount(<Main/>);
		 expect(wrapper.find('h1')).to.have.className('heading');
	});
});