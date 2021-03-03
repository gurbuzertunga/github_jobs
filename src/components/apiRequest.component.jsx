import React, { Component } from 'react'
import axios from 'axios';

export default class Request extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // async componentDidMount() {
  //   try {
  //     await fetch('http://example.com/movies.json')
  //     .then((response) => {
  //       console.log(response.json());
  //     return response.json();
  //     })
  //   .then((data) => {
  //   console.log(data);
  //   });
  //     // const response = await axios.get('https://remotive.io/api/remote-jobs?category=software-dev')
  //     // console.log(response);    
  //   } catch (error) {
  //      console.log(error); 
  //   }
  // }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
