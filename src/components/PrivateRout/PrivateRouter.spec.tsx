import * as React from 'react'
import { shallow } from 'enzyme'
import PrivateRouter from './PrivateRout';
import { MemoryRouter } from 'react-router-dom';

describe('<PrivateRouter />', ()=>{

    it('render <PrivateRouter />', ()=>{
        const props = {
            children: null,
            path: '/',
            isAuthorized: true
        }
        const wrapper = shallow(
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRouter {... props}/>
                </MemoryRouter>
        );
        expect(wrapper).toBeTruthy()
    })
})