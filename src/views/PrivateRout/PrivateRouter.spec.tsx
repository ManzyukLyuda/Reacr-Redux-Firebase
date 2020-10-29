import * as React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme'
import PrivateRouter from './PrivateRout';
import { MemoryRouter } from 'react-router-dom';

describe('<PrivateRouter />', ()=>{

    it('render <PrivateRouter />', ()=>{
        const props = {
            children: null,
            path: '/',
            isAutorixed: true
        }
        const wrapper = shallow(
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRouter {... props}/>
                </MemoryRouter>
        );
        expect(wrapper).to.be.ok
    })
})