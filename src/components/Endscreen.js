import React from 'react';

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

  export default EndScreen;