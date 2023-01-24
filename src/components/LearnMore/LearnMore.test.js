import React from 'react';
import ReactDOM from 'react-dom';
import LearnMore from './LearnMore';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LearnMore />, div);
  ReactDOM.unmountComponentAtNode(div);
});