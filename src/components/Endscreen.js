import React from 'react';

class EndScreen extends React.Component{
  constructor(props){
    super(props);

    this.reset = this.reset.bind(this);
    this.retry = this.retry.bind(this);
  }

  reset(){
    this.props.reset();
  }

  retry(){
    this.props.retry();
  }

  render(){

    const final = this.props.result / this.props.number_of_questions * 100;

    return(
      <div>
        <h2>Quiz has ended!</h2>
        <p>You've reached {final}%</p>
        <br />
        <button onClick={this.reset} >Create new quiz</button><button onClick={this.retry}>Try this one again</button>
      </div>
    );
  }
}

  export default EndScreen;