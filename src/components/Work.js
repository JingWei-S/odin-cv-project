import React, { Component } from "react";
import Edit from "./Edit";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [
        {
          title: {
            id: "title1",
            text: "Sales Associate",
            isInput: false,
          },
          company: {
            id: "company1",
            text: "ABC Company, Australia",
            isInput: false,
          },
          time: {
            id: "time1",
            text: "May 2018 - present",
            isInput: false,
          },
          resp: [
            {
              id: "resp1_work1",
              text: "Assisted customers in selecting and purchasing products",
              isInput: false,
            },
            {
              id: "resp2_work1",
              text: "Managed inventory and restocked shelves as needed",
              isInput: false,
            },
            {
              id: "resp3_work1",
              text: "Provided exceptional customer service to ensure satisfaction and repeat business",
              isInput: false,
            },
          ],
        },
        {
          title: {
            id: "title2",
            text: "Marketing Intern",
            isInput: false,
          },
          company: {
            id: "company2",
            text: "XYZ Corporation, Malaysia",
            isInput: false,
          },
          time: {
            id: "time2",
            text: "Jan 2018 - Apr 2018",
            isInput: false,
          },
          resp: [
            {
              id: "resp1_work2",
              text: "Conducted market research and analyzed data to identify trends and opportunities",
              isInput: false,
            },
            {
              id: "resp2_work2",
              text: "Assisted in the development and implementation of marketing campaigns",
              isInput: false,
            },
            {
              id: "resp3_work2",
              text: "Conducted competitive analysis and provided recommendations for improvement",
              isInput: false,
            },
          ],
        },
        {
          title: {
            id: "title3",
            text: "Administrative Assistant",
            isInput: false,
          },
          company: {
            id: "company3",
            text: "DEF Organization, Japan",
            isInput: false,
          },
          time: {
            id: "time3",
            text: "Aug 2017 - Dec 2017",
            isInput: false,
          },
          resp: [
            {
              id: "resp1_work3",
              text: "Managed scheduling and calendar for executive team members",
              isInput: false,
            },
            {
              id: "resp2_work3",
              text: "Coordinated travel arrangements and prepared expense reports",
              isInput: false,
            },
            {
              id: "resp3_work3",
              text: "Answered and directed phone calls and emails in a professional manner",
              isInput: false,
            },
          ],
        },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
    this.setIsInput = this.setIsInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(e) {
    const id = e.target.id;
    const type = id.slice(0, -1);
    const index = Number(id[id.length - 1]);
    const elements = this.state.elements;
    const updatedElement = [...elements];
    if (/resp\d+_work\d+/.test(id)) {
      // console.log(type)
      updatedElement[index-1].resp[id[4]-1].isInput = true;
    } else {
      updatedElement[index - 1][type].isInput = true;
    }
    this.setState({ elements: updatedElement });
  }

  setIsInput(e) {
    const id = e.target.previousElementSibling.id;
    const type = id.slice(0, -1);
    const index = Number(id[id.length - 1]);
    // console.log(type)
    const elements = this.state.elements;
    const updatedElement = [...elements];
    if (/resp\d+_work\d+/.test(id)) {
      // console.log(type)
      updatedElement[index-1].resp[id[4]-1].isInput = false;
    } else {
      updatedElement[index - 1][type].isInput = false;
    }
    this.setState({ elements: updatedElement });
  }

  handleInputChange(e) {
    // const id = e.target.id;
    // const elements = this.state.elements;
    // const index = elements.findIndex((element) => element.id === id);
    // const updatedElement = [...elements];
    // updatedElement[index].text = e.target.value;
    // this.setState({ elements: updatedElement });
    const id = e.target.id;
    const type = id.slice(0, -1);
    const index = Number(id[id.length - 1]);
    // console.log(type)
    const elements = this.state.elements;
    const updatedElement = [...elements];
    if (/resp\d+_work\d+/.test(id)) {
      // console.log(type)
      updatedElement[index-1].resp[id[4]-1].text = e.target.value;
    } else {
      updatedElement[index - 1][type].text = e.target.value;
    }
    this.setState({ elements: updatedElement });
  }

  render() {
    const { elements } = this.state;
    return (
      <div className="work-experience">
        <h3>Work Experience</h3>
        {elements.map((element) => {
          const { title, company, time, resp } = element;
          return (
            <div>
              {/* company title */}
              <Edit
                id={title.id}
                text={title.text}
                handleClick={this.handleClick}
                handleInputChange={this.handleInputChange}
                setIsInput={this.setIsInput}
                isInput={title.isInput}
              ></Edit>
              <div className="company-info">
                <Edit
                  id={company.id}
                  text={company.text}
                  handleClick={this.handleClick}
                  handleInputChange={this.handleInputChange}
                  setIsInput={this.setIsInput}
                  isInput={company.isInput}
                ></Edit>
                <Edit
                  id={time.id}
                  text={time.text}
                  handleClick={this.handleClick}
                  handleInputChange={this.handleInputChange}
                  setIsInput={this.setIsInput}
                  isInput={time.isInput}
                ></Edit>
              </div>
              <ul>
                {resp.map((r) => {
                  return (
                    <Edit
                      id={r.id}
                      text={r.text}
                      handleClick={this.handleClick}
                      handleInputChange={this.handleInputChange}
                      setIsInput={this.setIsInput}
                      isInput={r.isInput}
                    ></Edit>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Work;
