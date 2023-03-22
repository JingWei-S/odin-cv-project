import React, { Component } from "react";
import Edit from "./Edit";

class Others extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [
        {
          item: {
            id: "item1",
            text: "Awards",
            isInput: false,
          },
          list: [
            {
              id: "li1_item1",
              text: "Dean's List, XYZ University (Spring 2018)",
              isInput: false,
            },
            {
              id: "li2_item1",
              text: "National Merit Scholarship Finalist (2017)",
              isInput: false,
            },
          ],
        },
        {
          item: {
            id: "item2",
            text: "Professional Membership",
            isInput: false,
          },
          list: [
            {
              id: "li1_item2",
              text: "Society for Human Resource Management",
              isInput: false,
            },
            {
              id: "li2_item2",
              text: "American Marketing Association",
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
    if (/li\d+_item\d+/.test(id)) {
      console.log(updatedElement[index - 1].list)
      updatedElement[index - 1].list[id[2] - 1].isInput = true;
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
    if (/li\d+_item\d+/.test(id)) {
      // console.log(type)
      updatedElement[index - 1].list[id[2] - 1].isInput = false;
    } else {
      updatedElement[index - 1][type].isInput = false;
    }
    this.setState({ elements: updatedElement });
  }

  handleInputChange(e) {
    const id = e.target.id;
    const type = id.slice(0, -1);
    const index = Number(id[id.length - 1]);
    // console.log(type)
    const elements = this.state.elements;
    const updatedElement = [...elements];
    if (/li\d+_item\d+/.test(id)) {
      // console.log(type)
      updatedElement[index - 1].list[id[2] - 1].text = e.target.value;
    } else {
      updatedElement[index - 1][type].text = e.target.value;
    }
    this.setState({ elements: updatedElement });
  }

  render() {
    const { elements } = this.state;
    return (
      <div className="others">
        <h3>Others</h3>
        {elements.map((element) => {
          const { item, list } = element;
          return (
            <div>
              <Edit
                id={item.id}
                text={item.text}
                handleClick={this.handleClick}
                handleInputChange={this.handleInputChange}
                setIsInput={this.setIsInput}
                isInput={item.isInput}
              ></Edit>
              <ul>
                {list.map((li) => {
                  return (
                    <Edit
                      id={li.id}
                      text={li.text}
                      handleClick={this.handleClick}
                      handleInputChange={this.handleInputChange}
                      setIsInput={this.setIsInput}
                      isInput={li.isInput}
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

export default Others;
