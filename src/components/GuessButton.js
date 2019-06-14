import React from 'react';

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

  export default GuessButton;