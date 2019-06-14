import React from 'react';

class Answer extends React.Component{
  constructor(props){
    super(props);

    this.state = {is_checked: false};

    this.handle_check = this.handle_check.bind(this);
  }

  handle_check(e){
    this.setState({
      is_checked: !this.state.is_checked
      },
      () => {this.props.mark_answer(this.state.is_checked, this.props.index);}
    );
  }

  render(){
    return(
        <li key={this.props.index}>
          {this.props.a}<input type='checkbox' onChange={this.handle_check} />
        </li>
    );
  }
}

export default Answer;