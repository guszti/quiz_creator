import React from 'react';
import QuestionForm from '../components/QuestionForm';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('form input', () => {
  test('typing', () => {
    let component = mount(<QuestionForm />);
    let input = component.find('input').at(0);
    input.instance().value = 'asd';
    input.simulate('change');

    expect(component.state().value).toEqual('asd');
  });
});
