import React from 'react';
import GuessButton from './GuessButton';
import EndScreen from './Endscreen';

class Quiz extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        question_number: 0,
        score: 0
      };
  
      this.submit_question = this.submit_question.bind(this);
      this.handle_guess = this.handle_guess.bind(this);
    }
  
    handle_guess(id){
      console.log(this.props.questions[this.state.question_number].answers[id].text);
    }
  
    submit_question(e){
      e.preventDefault();
  
      this.setState({
        question_number: this.state.question_number + 1
      });
    }
  
    render(){
      return(
        <div>
          {this.state.question_number < this.props.questions.length ?
            <form onSubmit={this.submit_question}>
              <h2>{this.props.questions[this.state.question_number].title}</h2>
              {this.props.questions[this.state.question_number].answers.map((answer, index) =>
                <GuessButton key={index} handle_guess={this.handle_guess} text={answer.text} id={index}/>
              )}
              <input type="submit" value="Submit" />
            </form>
          : 
            <EndScreen score={this.state.score} />
          }
        </div>
      );
    }
  }

  export default Quiz;