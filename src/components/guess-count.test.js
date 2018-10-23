import React from 'react';
import { shallow } from 'enzyme';
import { GuessCount } from './guess-count';

describe('<GuessCount />', () => {   //describe('<p>', () => {
    it('Renders GuessCount without crashing', () => {
        shallow(<GuessCount />);
    });


    it('Renders the guess count ', () => {
        const value = 6;
        const wrapper = shallow(<GuessCount guessCount={value} />);
        expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
        //let wrapper = shallow(<GuessCount guessCount={6} />);
        //expect(wrapper.contains(6)).toEqual(true);
    });
});