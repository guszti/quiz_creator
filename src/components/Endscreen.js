import React from 'react';

class EndScreen extends React.Component{
  constructor(props){
    super(props);

    this.reset = this.reset.bind(this);
  }

  reset(){
    this.props.reset();
  }

  render(){

    const final = this.props.result / this.props.number_of_questions * 100;

    return(
      <div>
        <h2>Quiz has ended!</h2>
        <p>You've reached {final}%</p>
        <br />
        <button onClick={this.reset} >Create new quiz</button><button>Try this one again</button>
      </div>
    );
  }
}

  export default EndScreen;