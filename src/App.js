import React, { Component } from 'react';

export default class App extends Component 
{
  constructor()
  {
    super();
    
    this.state = { msg: '' }
  }

  componentDidMount()
  {
    this.callApi();
  }

  render()
  {  
    if (this.state.msg)
    {
      return <div>Message: {this.state.msg}</div>;
    }
    else 
    {
      return <div>No message</div>;
    }
  }

  async callApi()
  {
    const response = await fetch(`/api/negotiate`);
    let { text } = await response.json();
    this.setState({ msg: text });
  }
}