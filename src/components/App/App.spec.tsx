import  { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import { expect } from 'chai'

describe('<App />', () => {
    it('render App', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).to.be.ok;
      })
})