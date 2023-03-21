import React, { Component } from "react";
import Edit from "./Edit";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [
        {
          id: "skill1",
          text: "Coding Languages: Python, R, JavaScript, CSS/HTML, Node.js, React, SQL",
          isInput: false,
        },
        {
          id: "skill2",
          text: "Tools & Packages: Scikit-learn, Pandas, Matplotlib, Jupyter Notebook, Google Cloud Platform, Tensorflow, Tableau, Dialogflow",
          isInput: false,
        },
        {
          id: "skill3",
          text: "Machine Learning: Supervised/Unsupervised models, GPT-3, NLU, ChatGPT",
          isInput: false,
        },
        {
          id: "skill4",
          text: "Statistical Testing: A/B Testing, Hypothesis Testing, Experimentation",
          isInput: false,
        },
        {
          id: "skill5",
          text: "Qualitative Research Methods: Human-centered Designs, Usability Testing, Surveys, Interviews, Prototyping",
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
  }

  render() {
    const { elements } = this.state;
    return (
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {elements.map((element) => {
            // <li>{element.text}</li>
            return (<Edit
              id={element.id}
              text={element.text}
              handleClick={this.handleClick}
              handleInputChange={this.handleInputChange}
              setIsInput={this.setIsInput}
              isInput={element.isInput}
            ></Edit>)
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
