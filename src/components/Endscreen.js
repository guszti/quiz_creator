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
      <div style={{textAlign: "center"}}>
        <br />
        <h2 style={{fontFamily: 'helvetica'}}>Quiz has ended!</h2>
        <p style={{fontFamily: 'helvetica'}}>You've reached {final}%</p>
        <br />
        <button className="btn btn-danger float-left" style={{width: '45%'}} onClick={this.reset} >Create new quiz</button><button className="btn btn-info float-right" style={{width: '45%'}} onClick={this.retry}>Try this one again</button>
      </div>
    );
  }
}

  export default EndScreen;