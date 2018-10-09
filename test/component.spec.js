import React from "react";
import Main from "../src/components/Main.js";
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ("Main component",()=>{
	it("should an object",()=>{
          const wrapper=mount(<Main/>);
		 expect(wrapper.find('.test')).to.have.length(0);
	});
});