import React from 'react';
import Quiz from '../components/Quiz';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quiz questions={[{title: 'asd', answers: ['asd']}]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});