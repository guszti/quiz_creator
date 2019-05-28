import React from 'react';
import './App.css';

class Answer extends React.Component{
  render(){
    return(
        this.props.a
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
          <input type='submit' value='Create title' />
        </form>
      </div>
    );

    const answer = (     
      <div>
        <form onSubmit={this.handle_answer}>
          <input type='text' value={this.state.value} onChange={this.handle_change} />
          <input type='submit' value='Create question' />
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

class Questions extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      answers: [],
      questions: []
    }

    this.add_title = this.add_title.bind(this);
    this.add_answer = this.add_answer.bind(this);
    this.save_question = this.save_question.bind(this);
  }

  add_title(title){
    this.setState({
      title: title
    });
  }

  add_answer(answer){
    this.setState({
      answers: this.state.answers.concat([answer])
    });
  }

  save_question(){
    this.setState({
      questions: this.state.questions.concat([{'title': this.state.title, 'answers': this.state.answers}]),
      title: '',
      answers: []
    }, () => {console.log(this.state.questions);});    
  }

  run_quiz(){
    alert('quiz begun')
  }

  render(){

    const save = (
        <button onClick={this.save_question}>save question</button>
    );

    const run = (
      <button onClick={this.run_quiz}>begin quiz</button>
    );

    return(
      <div>
        {this.state.questions.length >= 4 ? run : ''}
        <h1>{this.state.title}</h1>
        <QuestionForm t={this.state.title} add_title={this.add_title} add_answer={this.add_answer} />
        <ul>
          {this.state.answers.map((a, i) =>
            <li key={i}>
              <Answer a={a} />
            </li>
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
                  <td>
                    <Answer a={a} /> 
                  </td>
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
    <Questions />
  );
}

export default App;
