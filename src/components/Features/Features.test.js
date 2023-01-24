import React from 'react';
import ReactDOM from 'react-dom';
import Features from './Features';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Features />, div);
  ReactDOM.unmountComponentAtNode(div);
});