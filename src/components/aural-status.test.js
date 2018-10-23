import React from 'react';
import { shallow } from 'enzyme';
//THIS IS THE NAMED EXPORT (INSTEAD OF THE DEFAULT EXPORT BELOW) 
//WHICH CONTAINS THE UNCONNECTED COMPONENT
import { AuralStatus } from '../components/aural-status';
//THIS IS THE DEFAULT EXPORT USED BEFORE REDUX WAS ADDED//import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {   //describe('<p>', () => {
    it('Renders AuralStatus without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Renders aural update', () => {
        let wrapper = shallow(<AuralStatus auralStatus={'test status'} />);
        expect(wrapper.contains('test status')).toEqual(true);
    })
});