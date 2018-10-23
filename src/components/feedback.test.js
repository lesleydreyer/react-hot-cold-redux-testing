import React from 'react';
import { shallow } from 'enzyme';
import { Feedback } from '../components/feedback';


describe('<Feedback />', () => {
    it('Renders Feedback without crashing', () => {
        shallow(<Feedback />);
    });
    it('Renders feedback', () => {
        let wrapper = shallow(<Feedback feedback={'test feedback'} />);
        expect(wrapper.contains('test feedback')).toEqual(true);
    })
});