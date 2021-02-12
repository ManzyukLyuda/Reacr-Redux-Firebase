import  { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
    it('render App', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeTruthy();
      })
})