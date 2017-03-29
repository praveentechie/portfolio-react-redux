/*import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {},
        allAuthors: {},
        onSave: () => {},
        onChange: () => {},
        saving: saving, 
        error: {}
    };

    //{course, allAuthors, onSave, onChange, saving, errors}
    // shallow tests only for one level deeper
    return shallow(<CourseForm {...props} />);
}
describe('CourseForm via Enzyme', () => {
    it('render form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqaul('Manage Course');
    });
     describe('CourseForm via Enzye', () => {
    it('renders form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });
     it('save button is labeled "save" when not saving',() => {
         const wrapper = setup(false);
         expect(wrapper.find('input').props().value).toBe('save');
     });

      it('save button is labeled "saving..."when saving',() => {
         const wrapper = setup(true);
         expect(wrapper.find('input').props().value).toBe('saving...');
     });
});*/

import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    const props = {
        course: {}, saving: saving, errors: {},
        onSave: () => { },
        onChange: () => { }
    };

    return shallow(<CourseForm {...props} />);
}
describe('CourseForm via Enzye', () => {
    it('renders form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });

});

