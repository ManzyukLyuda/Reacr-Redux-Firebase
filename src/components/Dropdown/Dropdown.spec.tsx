import { mount, shallow } from 'enzyme';
import React from 'react';
import Dropdown from './Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import { expect } from 'chai';
import TestStoreWrapper from "../../../test/StoreWrapper"





describe('<Dropdown />', () => {
    it('desplay Dropdown', () => {
        const props = {
            onSelect: () => null,
            users: []
        }
        const wrapper = shallow(<TestStoreWrapper>
                                    <Dropdown {... props} />
                                </TestStoreWrapper>);
       
        expect(wrapper.find(Dropdown).length).to.be.ok;
      })

    //   it('shouldn"t desplay Dropdown.Toggle if users list is empty', () => {
    //     const props = {
    //         onSelect: () => null,
    //         users: []
    //     }
    //     const wrapper = mount(<TestStoreWrapper>
    //                                 <Dropdown {... props} />
    //                             </TestStoreWrapper>);
    //     console.log(wrapper.debug())
    //     expect(wrapper.find(Dropdown).length).to.be.ok;
    //     expect(wrapper.find('.btn-circle.btn').length).to.equal(0)
    //   })

    //   it('should desplay Dropdown.Toggle if users list not empty', () => {
    //     const props = {
    //         onSelect: () => null,
    //         users: ['test@user.com']
    //     }
    //     const wrapper = mount(<TestStoreWrapper>
    //                                 <Dropdown {... props} />
    //                             </TestStoreWrapper>);

    //     expect(wrapper.find(Dropdown).length).to.be.ok;
    //     expect(wrapper.find('.btn.btn-circle').length).to.equal(1)
    //   })

    //   it('should desplay DropdownMenu', () => {
    //     const props = {
    //         onSelect: () => null,
    //         users: ['test@user.com']
    //     }
    //     const wrapper = mount(<TestStoreWrapper>
    //                                 <Dropdown {... props} />
    //                             </TestStoreWrapper>);

    //     expect(wrapper.find(Dropdown).length).to.be.ok;
    //     expect(wrapper.find(DropdownMenu).length).to.equal(1)
    //   })

      it('calls dropdownOnChange()', () => {
        const props = {
            users: ['test@user.com', 'user@user.com'],
            onSelect: jest.fn()
        }

        const wrapper = mount(<TestStoreWrapper>
                                    <Dropdown {... props} />
                                </TestStoreWrapper>);
        wrapper.find(Dropdown).prop('onSelect')('test@user.com');
    
        expect(props.onSelect.mock.calls.length).to.be.equal(1)
        expect(props.onSelect.mock.calls[0][0]).to.be.equal('test@user.com')
      })
})