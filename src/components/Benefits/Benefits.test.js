import React from 'react';
import ReactDOM from 'react-dom';
import Benefits from './Benefits';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Benefits />, div);
  ReactDOM.unmountComponentAtNode(div);
});