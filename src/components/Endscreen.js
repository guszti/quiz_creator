import React from 'react';

class EndScreen extends React.Component{
    render(){

      const final = this.props.result / this.props.number_of_questions * 100;

      return(
        <div>
          <h2>Quiz has ended!</h2>
          <p>You've reached {final}%</p>
          <br />
          <button>Create new quiz</button><button>Try this one again</button>
        </div>
      );
    }
  }

  export default EndScreen;