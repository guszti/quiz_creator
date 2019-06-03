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
      questions: [],
    }

    this.add_title = this.add_title.bind(this);
    this.add_answer = this.add_answer.bind(this);
    this.save_question = this.save_question.bind(this);
    this.mark_answer = this.mark_answer.bind(this);
  }

  add_title(title){
    this.setState({
      title: title
    });
  }

  add_answer(answer){
    const new_answer = {
      text: answer,
      right: false
    };

    this.setState({
      answers: this.state.answers.concat([new_answer])
    });
  }

  save_question(){
    this.setState({
      questions: this.state.questions.concat([{'title': this.state.title, 'answers': this.state.answers}]),
      title: '',
      answers: []
    }, () => {console.log(this.state.questions);});    
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
                  <td>
                    {(a.right === true) ? <p style={{color:'green'}}><b>{a.text}</b></p> : a.text} 
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
