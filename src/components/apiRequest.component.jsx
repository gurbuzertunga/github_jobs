import React, { Component } from 'react'
import axios from 'axios';

export default class Request extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://remotive.io/api/remote-jobs?category=software-dev')
      console.log(response);    
    } catch (error) {
       console.log(error); 
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
