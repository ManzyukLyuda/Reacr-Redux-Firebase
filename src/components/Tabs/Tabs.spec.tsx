import * as React from 'react'
import { mount} from 'enzyme'
import Tabs from './Tabs';
import { MemoryRouter } from 'react-router-dom';


describe('<Tabs/>', () => {
    it('should renser Tabs', ()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['/']}>
                                <Tabs />
                            </MemoryRouter>);
        expect(wrapper).toBeTruthy()
    })

    it('Tabs should contain one ul', ()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['/']}>
                                    <Tabs />
                                </MemoryRouter>);
        expect(wrapper.find('ul').length).toBe(1)
    })

    it('Tabs should contain two items', ()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['/']}>
                                    <Tabs />
                                </MemoryRouter>);
        expect(wrapper.find('li').length).toBe(2)
    })

    it('Tabs should contain two links with corresponding titles', ()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['/']}>
                                    <Tabs />
                                </MemoryRouter>);
        expect(wrapper.find('a').length).toBe(2)
        expect(wrapper.find('a').at(0).first().text()).toBe("Sign in")
        expect(wrapper.find('a').at(1).first().text()).toBe("Sign up")
    })

    it('Tabs should contain two links with corresponding href ayribute', ()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['/']}>
                                    <Tabs />
                                </MemoryRouter>);
        expect(wrapper.find('[href="//signin"]').first().text()).toBe("Sign in");
        expect(wrapper.find('[href="//signup"]').first().text()).toBe("Sign up");
    })

    it('"Sign in" tab should have "selected" class if location is /signin', ()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['//signin']}>
                                    <Tabs />
                                </MemoryRouter>);

        expect(wrapper.find('[href="//signin"]').first().hasClass('selected')).toBeTruthy();
    })

    it('"Sign up" tab should have "selected" class if location is /signip', ()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['//signup']}>
                                    <Tabs />
                                </MemoryRouter>);
        
        expect(wrapper.find('[href="//signup"]').first().hasClass('selected')).toBeTruthy();
    })

    it('Click by Tab shoul change selected class on Tab', ()=>{
        const wrapper = mount(<MemoryRouter initialEntries={['/']}>
                                    <Tabs />
                                </MemoryRouter>);
        
        wrapper.find('a[href="//signin"]').simulate('click', { button: 0 });
        expect(wrapper.find('[href="//signin"]').first().hasClass('selected')).toBeTruthy();
        expect(wrapper.find('[href="//signup"]').first().hasClass('selected')).not.toBeTruthy();

        wrapper.find('a[href="//signup"]').simulate('click', { button: 0 });
        expect(wrapper.find('[href="//signup"]').first().hasClass('selected')).toBeTruthy();
        expect(wrapper.find('[href="//signin"]').first().hasClass('selected')).not.toBeTruthy();
    })


})