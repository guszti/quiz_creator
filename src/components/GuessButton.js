import React from 'react';
import '../App.css';

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
        this.state.is_marked ? <div><button className="btn btn-success" style={{width: "100%",height: "90px"}} onClick={this.handle_click}>{this.props.text}</button><br /><br /></div> : <div><button className="btn btn-secondary" style={{width: "100%",height: "90px"}} onClick={this.handle_click}>{this.props.text}</button><br /><br /></div>
      );
    }
  }

  export default GuessButton;