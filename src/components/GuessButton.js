import React from 'react';

class GuessButton extends React.Component{
    constructor(props){
      super(props);
      
      this.state = {is_marked: false};

      this.handle_click = this.handle_click.bind(this);
    }
  
    handle_click(e){
      e.preventDefault();

      this.setState({
        is_marked: !this.state.is_marked
      }, () => {
        this.props.handle_guess(this.props.id, this.state.is_marked);
      });           
    }
  
    render(){
      return(
        this.state.is_marked ? <button style={{backgroundColor:'Chartreuse'}} onClick={this.handle_click}>{this.props.text}</button> : <button onClick={this.handle_click}>{this.props.text}</button>
      );
    }
  }

  export default GuessButton;