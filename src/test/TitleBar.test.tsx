import React from 'react';
import TitleBar from '../components/TitleBar';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TitleBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});