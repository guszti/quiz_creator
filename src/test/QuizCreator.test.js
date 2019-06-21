import React from 'react';
import QuizCreator from '../components/QuizCreator';
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuizCreator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Starting the quiz', () =>{
    test('toggle button', () => {
  
      let component = create(<QuizCreator />);
  
      let instance = component.getInstance();
  
      expect(instance.state.running).toBe(false);
  
      instance.run_quiz();
  
      expect(instance.state.running).toBe(true);
      
    });
  });

describe('Saving a question', () => {
    test('click save', () => {

      let component = create(<QuizCreator />);

      let instance = component.getInstance();

      instance.add_title('asd');

      instance.add_answer('asd');

      instance.add_answer('asd');

      instance.mark_answer(true, 0);

      instance.save_question();

      expect(instance.state.questions.length).toBe(1);

    });
});

test('adding title', () => {

  let component = create(<QuizCreator />);
  
  let instance = component.getInstance();

  instance.add_title('some title');

  expect(instance.state.title).toBe('some title');

});

test('adding answer', () => {

  let component = create(<QuizCreator />);
  
  let instance = component.getInstance();

  instance.add_answer('an answer');

  expect(instance.state.answers[0].text).toBe('an answer');

});

test('mark correct answer', () => {

  let component = create(<QuizCreator />);

  let instance = component.getInstance();

  instance.add_answer('an answer');

  expect(instance.state.answers[0].right).toBe(false);

  instance.mark_answer(true, 0);

  expect(instance.state.answers[0].right).toBe(true);

});