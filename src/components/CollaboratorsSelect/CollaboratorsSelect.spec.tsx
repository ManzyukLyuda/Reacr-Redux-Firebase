import * as React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import CollaboratorsSelect from './CollaboratorsSelect';
import TestStoreWrapper from '../../../test/StoreWrapper';
import Dropdown from '../Dropdown/Dropdown';

const props = {
	todo: {
		id: 'tets',
		name: 'test',
		description: 'test',
		completed: false,
		assignedTo: 'user@tets.com',
		collaborators: ['tets2'],
	},
};

describe('<CollaboratorsSelect />', () => {
	it('render <CollaboratorsSelect />', () => {
		const wrapper = shallow(
			<TestStoreWrapper>
				<CollaboratorsSelect {...props} />
			</TestStoreWrapper>
		);
		expect(wrapper).to.be.ok;
	});
	it('render <Dropdown /> if has collaborators to add', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<CollaboratorsSelect {...props} />
			</TestStoreWrapper>
		);
		expect(wrapper.find(Dropdown).length).to.be.equal(1);
	});
	it('render no <Dropdown /> if has no collaborators to add', () => {
		const props = {
			todo: {
				id: 'tets',
				name: 'test',
				description: 'test',
				completed: false,
				assignedTo: 'user@tets.com',
				collaborators: ['tets2', 'tets1'],
			},
		};
		const wrapper = mount(
			<TestStoreWrapper>
				<CollaboratorsSelect {...props} />
			</TestStoreWrapper>
		);
		expect(wrapper.find(Dropdown).length).to.be.equal(1);
	});
});
