import React, { Component } from "react";
import Edit from "./Edit";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "h2",
      text: "Jing Wei",
      isInput: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.setIsInput = this.setIsInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(e) {
    console.log(e.target);
    this.setState({
      isInput: true,
    });
  }

  setIsInput(e) {
    // console.log(e.target);
    this.setState({
      isInput: false,
    });
  }

  handleInputChange(e) {
    console.log(e.target.value)
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="contact-info">
        <Edit
          type="h2"
          text={this.state.text}
          handleClick={this.handleClick}
          handleInputChange={this.handleInputChange}
          setIsInput={this.setIsInput}
          isInput={this.state.isInput}
        ></Edit>
        {/* <h2 onClick={this.props.onDivClicked}>{this.props.name}</h2> */}
        <div className="contact">
          <p>Melbourne, Victoria, Australia</p>
          <p>abced@unimelb.edu.au</p>
          <p>+61 0411111001</p>
          <p>https://github.com/roboto</p>
        </div>
      </div>
    );
  }
}

export default Contact;
