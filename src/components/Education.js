import React, { Component } from "react";
import Edit from "./Edit";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [
        {
          degree: {
            id: "degree1",
            text: "Bachelor of Science in Business Administration",
            isInput: false,
          },
          university: {
            id: "university1",
            text: "XYZ University, Canberra",
            isInput: false,
          },
          uni_time: {
            id: "uni_time1",
            text: "Graduation Date: May 2018",
            isInput: false,
          },
          gpa: {
            id: "gpa1",
            text: "3.7/4.0",
            isInput: false,
          },
          course: {
            id: "course1",
            text: "Data Structures and Algorithms, Computer Networks, Operating Systems, Business Law",
            isInput: false,
          },
        },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
    this.setIsInput = this.setIsInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(e) {
    const { isEdit, rejectEdit } = this.props;
    if (isEdit) {
      rejectEdit();
      const id = e.target.id;
      const type = id.slice(0, -1);
      const index = Number(id[id.length - 1]);
      const elements = this.state.elements;
      const updatedElement = [...elements];
      updatedElement[index - 1][type].isInput = true;
      this.setState({ elements: updatedElement });
    }
  }

  setIsInput(e) {
    const { isEdit, canEdit } = this.props;
    if (!isEdit) {
      const id = e.target.previousElementSibling.id;
      const type = id.slice(0, -1);
      const index = Number(id[id.length - 1]);
      const elements = this.state.elements;
      const updatedElement = [...elements];
      updatedElement[index - 1][type].isInput = false;
      this.setState({ elements: updatedElement });
      canEdit();
    }
  }

  handleInputChange(e) {
    const id = e.target.id;
    const type = id.slice(0, -1);
    const index = Number(id[id.length - 1]);
    const elements = this.state.elements;
    const updatedElement = [...elements];
    updatedElement[index - 1][type].text = e.target.value;
    this.setState({ elements: updatedElement });
  }

  render() {
    const { elements } = this.state;
    return (
      <div className="education">
        <h3>Education</h3>
        {elements.map((element) => {
          const { degree, university, uni_time, gpa, course } = element;
          return (
            <div>
              <Edit
                id={degree.id}
                text={degree.text}
                handleClick={this.handleClick}
                handleInputChange={this.handleInputChange}
                setIsInput={this.setIsInput}
                isInput={degree.isInput}
              ></Edit>
              <div className="university-information">
                <Edit
                  id={university.id}
                  text={university.text}
                  handleClick={this.handleClick}
                  handleInputChange={this.handleInputChange}
                  setIsInput={this.setIsInput}
                  isInput={university.isInput}
                ></Edit>
                <Edit
                  id={uni_time.id}
                  text={uni_time.text}
                  handleClick={this.handleClick}
                  handleInputChange={this.handleInputChange}
                  setIsInput={this.setIsInput}
                  isInput={uni_time.isInput}
                ></Edit>
              </div>
              <div>
                <p>
                  <span>GPA: </span>
                  <Edit
                    id={gpa.id}
                    text={gpa.text}
                    handleClick={this.handleClick}
                    handleInputChange={this.handleInputChange}
                    setIsInput={this.setIsInput}
                    isInput={gpa.isInput}
                  ></Edit>
                </p>
                <p>
                  <span>Relevant courses: </span>
                  <Edit
                    id={course.id}
                    text={course.text}
                    handleClick={this.handleClick}
                    handleInputChange={this.handleInputChange}
                    setIsInput={this.setIsInput}
                    isInput={course.isInput}
                  ></Edit>
                </p>
              </div>
            </div>
          );
        })}
        {/* <div>
          <h4>Bachelor of Science in Business Administration</h4>
          <h4>
            XYZ University, Canberra <span>Graduation Date: May 2018</span>
          </h4>
          <div>
            <p>
              <span>GPA</span>: <span>3.7/4.0</span>
            </p>
            <p>
              <span>Relevant courses</span>:{" "}
              <span>
                Data Structures and Algorithms, Computer Networks, Operating
                Systems, Business Law{" "}
              </span>
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Education;
