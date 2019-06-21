import React from 'react';
import GuessButton from '../components/GuessButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GuessButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});