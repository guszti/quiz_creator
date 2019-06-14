import React from 'react';
import './App.css';

class Answer extends React.Component{
  constructor(props){
    super(props);

    this.state = {is_checked: false};

    this.handle_check = this.handle_check.bind(this);
  }

  handle_check(e){
    this.setState({
      is_checked: !this.state.is_checked
      },
      () => {this.props.mark_answer(this.state.is_checked, this.props.index);}
    );
  }

  render(){
    return(
        <li key={this.props.index}>
          {this.props.a}<input type='checkbox' onChange={this.handle_check} />
        </li>
    );
  }
}

class QuestionForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {value: ''}

    this.handle_change = this.handle_change.bind(this);
    this.handle_title = this.handle_title.bind(this);
    this.handle_answer = this.handle_answer.bind(this);
  }

  handle_change(e){
    this.setState({
      value: e.target.value
    });
  }

  handle_title(e){
    e.preventDefault();
    if(this.state.value !== ''){
      this.props.add_title(this.state.value);
    }
  }

  handle_answer(e){
    e.preventDefault();
    if(this.state.value !== ''){
      this.props.add_answer(this.state.value);
    }
  }

  render(){
    const question = (     
      <div>
        <form onSubmit={this.handle_title}>
          <input type='text' value={this.state.value} onChange={this.handle_change} />
          <input type='submit' value='Add a question!' />
        </form>
      </div>
    );

    const answer = (     
      <div>
        <form onSubmit={this.handle_answer}>
          <input type='text' value={this.state.value} onChange={this.handle_change} />
          <input type='submit' value='Add an answer!' />
        </form>
      </div>
    );

    return(
      <div>
        {this.props.t === '' ? question : answer}
      </div>
    );
  }
}

class EndScreen extends React.Component{
  render(){
    return(
      <div>
        <h2>Quiz has ended!</h2>
        <p>You've reached {this.props.score}%</p>
        <br />
        <button>Create new quiz</button><button>Try this one again</button>
      </div>
    );
  }
}

class GuessButton extends React.Component{
  constructor(props){
    super(props);

    this.handle_click = this.handle_click.bind(this);
  }

  handle_click(e){
    e.preventDefault();
    this.props.handle_guess(this.props.id);
  }

  render(){
    return(
      <button onClick={this.handle_click}>{this.props.text}</button>
    );
  }
}

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

class QuizCreator extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      answers: [],
      questions: [],
      running: false
    }

    this.add_title = this.add_title.bind(this);
    this.add_answer = this.add_answer.bind(this);
    this.save_question = this.save_question.bind(this);
    this.mark_answer = this.mark_answer.bind(this);
    this.run_quiz = this.run_quiz.bind(this);
  }

  add_title(title){
    this.setState({
      title: title
    });
  }

  add_answer(answer){
    const new_answer = {
      text: answer,
      right: false,
      guess: false
    };

    this.setState({
      answers: this.state.answers.concat([new_answer])
    });
  }

  save_question(){
    let ans = this.state.answers.filter((item) => item.right === true);

    if(ans.length > 0){
      this.setState({
        questions: this.state.questions.concat([{'title': this.state.title, 'answers': this.state.answers}]),
        title: '',
        answers: []
      }, () => {console.log(this.state.questions);});
    }else{
      alert('Mark at least one good answer!');
    }
  }

  mark_answer(m, i){
    let new_list = this.state.answers;
    new_list[i].right = m;

    this.setState({
      answers: new_list
    });
    console.log(this.state.answers);
  }

  run_quiz(){
    this.setState({
      running: true
    });
  }

  render(){

    const save = (
        <button onClick={this.save_question}>save question</button>
    );

    const run = (
      <button onClick={this.run_quiz}>begin quiz</button>
    );

    return(
      this.state.running ? <Quiz questions={this.state.questions} /> :
      <div>
        {this.state.questions.length >= 1 ? run : ''}
        <h1>{this.state.title}</h1>
        <QuestionForm t={this.state.title} add_title={this.add_title} add_answer={this.add_answer} />
        <ul>
          {this.state.answers.map((a, i) =>
            <Answer a={a.text} key={i} index={i} mark_answer={this.mark_answer} />
          )}
        </ul>
        {this.state.answers.length >= 2 ? save : ''}
        {this.state.questions.map((item, i) => 
        <div key={i}>
          <br />
          <br/>
          <hr />
          <table>
            <tbody>
              <tr><th>{item.title}</th></tr>
              {item.answers.map((a, j) => 
                <tr key={j}>
                  {(a.right === true) ? <td style={{backgroundColor:'Chartreuse'}}><b>{a.text}</b></td> : <td>{a.text}</td>}
                </tr>
              )}
            </tbody>
          </table>
          </div>
        )}
      </div>
    );
  }
}

function App() {
  return (
    <QuizCreator />
  );
}

export default QuizCreator;