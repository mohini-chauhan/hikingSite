import React from 'react';
import ReactDOM from 'react-dom';
import Extras from './Extras';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Extras />, div);
  ReactDOM.unmountComponentAtNode(div);
});