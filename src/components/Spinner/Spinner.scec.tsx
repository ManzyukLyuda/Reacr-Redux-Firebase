import { mount } from 'enzyme';
import React from 'react';
import Spinner from './Spinner';
import { expect } from 'chai'

describe('<ErrorBoundry />', () => {
    it('desplay Error Boundry', () => {
        const wrapper = mount(<Spinner />);
        expect(wrapper).to.be.ok;
      })
})