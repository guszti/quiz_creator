import React from 'react';
import GuessButton from '../components/GuessButton';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GuessButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});