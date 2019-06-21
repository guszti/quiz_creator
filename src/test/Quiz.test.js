import React from 'react';
import Quiz from '../components/Quiz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});