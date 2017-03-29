import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ManageCoursePage from './ManageCoursePage';
// describe('Manage Course Page', () => {
//     it('set error message when trying to save empty title', () => {
//         // mount is render and test whole dom
//         // This approch is usefull when testing redux connect related code like mapStateToprops 
//        const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);
//     });
// });