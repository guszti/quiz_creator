import React from 'react';
import Endscreen from '../components/Endscreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Endscreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});