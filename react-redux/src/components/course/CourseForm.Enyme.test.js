import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {}, saving: saving, error: {},
        onSave: () => {},
        onChange: () => {}
    };
    return shallow(<courseForm {...props} />);
}
describe('CourseForm via Enzyme', () => {
    it('render form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqaul('Manage Course');
    });
     
     it('save button is labeled "save" when not saving',() => {
         const wrapper = setup(false);
         expect(wrapper.find('input').props().value).toBe('save');
     });

      it('save button is labeled "saving..."when saving',() => {
         const wrapper = setup(true);
         expect(wrapper.find('input').props().value).toBe('saving...');
     });
});