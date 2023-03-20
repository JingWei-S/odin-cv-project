import React, { Component } from "react";
import Edit from "./Edit";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        { id: "name", type: "h2", text: "Jing Wei", isInput: false },
        {
          id: "location",
          type: "p",
          text: "Melbourne, Victoria, Australia",
          isInput: false,
        },
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
    console.log(index);
  }

  setIsInput(e) {
    const id = e.target.previousElementSibling.id;
    const elements = this.state.elements;
    const index = elements.findIndex((element) => element.id === id);
    console.log(index);
    const updatedElement = [...elements];
    updatedElement[index].isInput = false;
    this.setState({ elements: updatedElement });
    // console.log(e.target);
    // this.setState({
    //   isInput: false,
    // });
  }

  handleInputChange(e) {
    // console.log(e.target.value);
    // this.setState({ text: e.target.value });
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
        {/* <h2 onClick={this.props.onDivClicked}>{this.props.name}</h2> */}
        <div className="contact">
          <Edit
            id={elements[1].id}
            text={elements[1].text}
            handleClick={this.handleClick}
            handleInputChange={this.handleInputChange}
            setIsInput={this.setIsInput}
            isInput={elements[1].isInput}
          ></Edit>
          {/* <p>Melbourne, Victoria, Australia</p> */}
          <p>abced@unimelb.edu.au</p>
          <p>+61 0411111001</p>
          <p>https://github.com/roboto</p>
        </div>
      </div>
    );
  }
}

export default Contact;
