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
      <div className="searchbar-img w-full relative h-36 px-24 mb-12 flex justify-center items-center rounded">
        <Input changeHandler={this.changeHandler} clickHandler={this.clickHandler} isButton icon={<BsBriefcase />} placeholder='Title,companies,expertise or benefits' /> 
      </div>
    )
  }
}

export default SearchBar
