import React from 'react';
import Quiz from './Quiz';
import QuestionForm from './QuestionForm';
import Answer from './Answer';
import TitleBar from './TitleBar'

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
      this.reset_quiz = this.reset_quiz.bind(this);
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

    reset_quiz(){
      this.setState({
        running: false,
        questions: []
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
        <div>
          <TitleBar />
          {this.state.running ? <Quiz questions={this.state.questions} reset={this.reset_quiz} /> :
          <div class="container">
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
          </div>}
        </div>
      );
    }
  }

  export default QuizCreator;