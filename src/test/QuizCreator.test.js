import React from 'react';
import ReactDOM from 'react-dom';
import QuizCreator from '../components/QuizCreator';
import { create, update } from 'react-test-renderer'
import { exportAllDeclaration } from '@babel/types';

describe('Starting the quiz', () =>{
    test('toggle button', () => {
  
      let tree = create(<QuizCreator />);
  
      let instance = tree.getInstance();
  
      expect(instance.state.running).toBe(false);
  
      instance.run_quiz();
  
      expect(instance.state.running).toBe(true);
      
    });
  });

describe('Saving a question', () => {
    test('click save', () => {

      let tree = create(<QuizCreator />);

      let instance = tree.getInstance();

      instance.add_title('asd');

      instance.add_answer('asd');

      instance.add_answer('asd');

      instance.mark_answer(true, 0);

      instance.save_question();

      expect(instance.state.questions.length).toBe(1);

    });
});