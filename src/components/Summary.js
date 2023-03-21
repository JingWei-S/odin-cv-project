import React, { Component } from "react";
import Edit from "./Edit";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "summary",
      text: `Innovative researcher with 5 years of research experience across
      multiple countries and hands-on industry experience. Adept in AI
      Chatbots, Data Analysis, Model Development, and Machine Learning. A
      collaborative individual with strong communication and teamwork
      skills, demonstrated by working with cross-functional teams.`,
      isInput: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.setIsInput = this.setIsInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick() {
    this.setState({isInput: true});
  }

  setIsInput() {
    this.setState({ isInput: false });
  }

  handleInputChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const {id} = this.state;
    return (
      <div className="summary">
        <h3>Summary</h3>
        <Edit
          id={id}
          text={this.state.text}
          handleClick={this.handleClick}
          handleInputChange={this.handleInputChange}
          setIsInput={this.setIsInput}
          isInput={this.state.isInput}
        ></Edit>
      </div>
    );
  }
}

export default Summary;
