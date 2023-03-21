import React, { Component } from "react";
import Edit from "./Edit";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        { id: "name", text: "Jing Wei", isInput: false },
        {
          id: "location",
          text: "Melbourne, Victoria, Australia",
          isInput: false,
        },
        { id: "email", text: "abced@unimelb.edu.au", isInput: false },
        { id: "number", text: "+61 0411111001", isInput: false },
        { id: "website", text: "https://github.com/roboto", isInput: false },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
    this.setIsInput = this.setIsInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(e) {
    const id = e.target.id;
    const elements = this.state.elements;
    const index = elements.findIndex((element) => element.id === id);
    const updatedElement = [...elements];
    updatedElement[index].isInput = true;
    this.setState({ elements: updatedElement });
  }

  setIsInput(e) {
    const id = e.target.previousElementSibling.id;
    const elements = this.state.elements;
    const index = elements.findIndex((element) => element.id === id);
    console.log(index);
    const updatedElement = [...elements];
    updatedElement[index].isInput = false;
    this.setState({ elements: updatedElement });
  }

  handleInputChange(e) {
    const id = e.target.id;
    const elements = this.state.elements;
    const index = elements.findIndex((element) => element.id === id);
    const updatedElement = [...elements];
    updatedElement[index].text = e.target.value;
    this.setState({ elements: updatedElement });
    console.log(index);
  }

  render() {
    const { elements } = this.state;
    // console.log(elements[0]);
    return (
      <div className="contact-info">
        <Edit
          id={elements[0].id}
          text={elements[0].text}
          handleClick={this.handleClick}
          handleInputChange={this.handleInputChange}
          setIsInput={this.setIsInput}
          isInput={elements[0].isInput}
        ></Edit>
        <div className="contact">
          <Edit
            id={elements[1].id}
            text={elements[1].text}
            handleClick={this.handleClick}
            handleInputChange={this.handleInputChange}
            setIsInput={this.setIsInput}
            isInput={elements[1].isInput}
          ></Edit>
          <Edit
            id={elements[2].id}
            text={elements[2].text}
            handleClick={this.handleClick}
            handleInputChange={this.handleInputChange}
            setIsInput={this.setIsInput}
            isInput={elements[2].isInput}
          ></Edit>
          <Edit
            id={elements[3].id}
            text={elements[3].text}
            handleClick={this.handleClick}
            handleInputChange={this.handleInputChange}
            setIsInput={this.setIsInput}
            isInput={elements[3].isInput}
          ></Edit>
          <Edit
            id={elements[4].id}
            text={elements[4].text}
            handleClick={this.handleClick}
            handleInputChange={this.handleInputChange}
            setIsInput={this.setIsInput}
            isInput={elements[4].isInput}
          ></Edit>
        </div>
      </div>
    );
  }
}

export default Contact;
