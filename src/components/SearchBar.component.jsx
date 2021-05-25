import { BsBriefcase } from "react-icons/all";
import Input from "../ui-kits/Input";


import React, { Component } from 'react'

class SearchBar extends Component {
  state = {inputText: ''};

  clickHandler = () => {
    this.props.filterJob(this.state.inputText);
  }

  changeHandler = (e) => {
    this.setState({
      inputText: e.target.value,
    })
  }
  
  render() {
    return (
      <>
      <div className="searchbar-img w-full relative h-36 md:px-24 px-4 mb-12 flex justify-center items-center rounded">
        <Input changeHandler={this.changeHandler} clickHandler={this.clickHandler} isButton icon={<BsBriefcase />} placeholder='Search...' /> 
      </div>
      <div className="bg-red-600 w-12 h-12">

      </div>
      </>
    )
  }
}

export default SearchBar
