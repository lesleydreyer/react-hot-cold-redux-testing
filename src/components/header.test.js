import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {   //describe('<p>', () => {
    it('Renders Header without crashing', () => {
        shallow(<Header />);
    });

});