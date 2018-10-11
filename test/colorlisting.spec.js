import React from "react";
import ColorListing from "../src/components/colorlisting.js";
import { configure, mount,shallow,render } from 'enzyme';
import chai,{ expect } from "chai";
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';


configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());
chai.use(require('chai-arrays'));

describe("Color List component",()=>{
     const wrapper=mount(<ColorListing colorObj="red"/>);
    const props=wrapper.props();
    it("should an object and not to be empty",()=>{          
		  expect(wrapper).
          to.be.a('object').
          to.not.be.blank();
	});
    
    it("checking for props",()=>{
        expect(wrapper).to.have.props(['colorObj']);
    });
    
    it("check for returning li element",()=>{
                expect(wrapper.text()).to.contain(props.colorObj);
                expect(wrapper.find('.colorname')).to.have.lengthOf(1);
            });
 });