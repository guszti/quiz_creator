import React from 'react';
import Endscreen from '../components/Endscreen';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Endscreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});