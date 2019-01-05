/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Landingpage from '../Landingpage';
import AddBook from '../AddBook';

it('renders Landingpage component without crashing', () => {
  shallow(<Landingpage />);
});

it('renders Login component without crashing', () => {
  shallow(<AddBook />);
});
