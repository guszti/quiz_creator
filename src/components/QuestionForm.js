import React from 'react';

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
            <input className="form-control" style={{width: '100%'}} type='text' value={this.state.value} onChange={this.handle_change} />
            <input className="btn btn-danger" style={{width: '100%'}} type='submit' value='Add a question!' />
          </form>
        </div>
      );
  
      const answer = (     
        <div>
          <form onSubmit={this.handle_answer}>
            <input className="form-control" style={{width: '100%'}} type='text' value={this.state.value} onChange={this.handle_change} />
            <input className="btn btn-info" style={{width: '100%'}} type='submit' value='Add an answer!' />
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

  export default QuestionForm;