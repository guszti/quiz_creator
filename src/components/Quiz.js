import React from 'react';
import GuessButton from './GuessButton';
import EndScreen from './Endscreen';

class Quiz extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        question_number: 0,
        score: 0,
        result: 0
      };
  
      this.submit_question = this.submit_question.bind(this);
      this.handle_guess = this.handle_guess.bind(this);
      this.retry_quiz = this.retry_quiz.bind(this);
    }
  
    handle_guess(id, guess){
      if(this.props.questions[this.state.question_number].answers[id].right === guess){
        this.setState({
          score: this.state.score + 1       
        }, () => {
          console.log(this.state.score);
        });
      }else{
        this.setState({
          score: this.state.score - 1
        }, () => {
          console.log(this.state.score);
        });
      }
    }
    
    check_if_correct(){
      let count = this.props.questions[this.state.question_number].answers.filter((item) => item.right === true);

      if(this.state.score === count.length){
        return 1;
      }

      return 0;
    }

    submit_question(e){
      e.preventDefault(); 

      this.setState({
        question_number: this.state.question_number + 1,
        result: this.state.result + this.check_if_correct(),
        score: 0
      });
    }

    retry_quiz(){
      this.setState({
        question_number: 0,
        score: 0,
        result: 0
      });
    }
  
    render(){
      return(
        <div className="container">
          {this.state.question_number < this.props.questions.length ?
            <form onSubmit={this.submit_question}>
              <h2>{this.props.questions[this.state.question_number].title}</h2>
              {this.props.questions[this.state.question_number].answers.map((answer, index) =>
                <GuessButton key={index} handle_guess={this.handle_guess} text={answer.text} id={index}/>
              )}
              <div>
                <input className="btn btn-primary" type="submit" value="Submit" />
              </div>
            </form>
          : 
            <EndScreen retry={this.retry_quiz} reset={this.props.reset} result={this.state.result} number_of_questions={this.props.questions.length} />
          }
        </div>
      );
    }
  }

  export default Quiz;