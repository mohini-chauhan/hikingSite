import React from 'react';
import ReactDOM from 'react-dom';
import ContactUs from './ContactUs';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactUs />, div);
  ReactDOM.unmountComponentAtNode(div);
});