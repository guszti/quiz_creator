import React from 'react';
import QuestionForm from '../components/QuestionForm';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
 
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('form input', () => {
  test('typing', () => {
    let component = mount(<QuestionForm />);
    let input = component.find('input').at(0);
    input.instance().value = 'asd';
    input.simulate('change');

    expect(component.state().value).toEqual('asd');
  });
});
