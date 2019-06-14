import React from 'react';
import ReactDOM from 'react-dom';
import QuizCreator from './App';
import { create, update } from 'react-test-renderer'
import { exportAllDeclaration } from '@babel/types';

describe('Starting the quiz', () =>{
    test('toggle button', () => {
  
      let tree = create(<QuizCreator />);
  
      let instance = tree.getInstance();
  
      expect(instance.state.running).toBe(false);
  
      instance.run_quiz();
  
      expect(instance.state.running).toBe(true);
  
      expect(tree.toJSON()).toMatchSnapshot();
    
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