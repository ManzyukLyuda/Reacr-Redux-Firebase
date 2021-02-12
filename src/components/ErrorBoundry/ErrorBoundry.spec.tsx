import { mount } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';

describe('<ErrorBoundry />', () => {
    it('desplay Error Boundry', () => {
        const ErrorChild = ()=> null;
        const wrapper = mount(<ErrorBoundry><ErrorChild /></ErrorBoundry>);
        const error = new Error('test');
        expect(wrapper.find(ErrorBoundry).length).toBe(1);
        wrapper.find(ErrorChild).simulateError(error);
      })
})