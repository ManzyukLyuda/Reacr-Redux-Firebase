import { mount } from 'enzyme';
import React from 'react';
import Spinner from './Spinner';
import { expect } from 'chai'

describe('<Spinner />', () => {
	it('desplay Spinner', () => {
		const child = <h1>Test</h1>;
		const wrapper = mount(<Spinner children={child} />);
		expect(wrapper).to.be.ok;
	});
	it('desplay Spinner', () => {
		const child = <h1>Test</h1>;
		const wrapper = mount(<Spinner children={child} />);
		expect(wrapper.find('h1').length).to.be.equal(1);
	});
});

