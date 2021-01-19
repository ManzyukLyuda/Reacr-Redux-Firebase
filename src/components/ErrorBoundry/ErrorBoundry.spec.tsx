import { mount } from 'enzyme';
import React from 'react';
import ErrorBoundry from './Error-boundry';
import { expect } from 'chai'

describe('<ErrorBoundry />', () => {
    it('desplay Error Boundry', () => {
        const ErrorChild = ()=> null;
        const wrapper = mount(<ErrorBoundry><ErrorChild /></ErrorBoundry>);
        const error = new Error('test');
        expect(wrapper.find(ErrorBoundry).length).to.equal(1);
        wrapper.find(ErrorChild).simulateError(error);
      })
})