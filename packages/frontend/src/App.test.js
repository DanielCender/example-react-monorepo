import React from 'react';
import App from './App';

test('Should render correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
