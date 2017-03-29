import except from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CouserForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {}, saving:saving, error: {},
        onSave: () => { },
        onChange: () => { }
    }
    let renderer = TestUtils.createRenderer();
    renderer.render(<CouserForm {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}
describe(' CourseForm vis react Test Utils', () => {
    it('render form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');
        let [h1] = output.props.children;
        except(h1.type).toBe('h1');
    });
});

it('save button is labeled "save " when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.childern[5];
    expect(submitButton.props.value).toBe('saving....');
})