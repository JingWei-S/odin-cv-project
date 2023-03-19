import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, text, handleClick, handleInputChange, isInput, setIsInput } = this.props;
    switch (type) {
      case "p":
        return isInput ? (
          <div>
            <input type="text" onChange={handleInputChange} />{" "}
            <button
              onClick={() => {
                this.setState({isInput: false});
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <p onClick={handleClick}>{text}</p>
        );
      case "h2":
        return isInput ? (
            <div>
            <input type="text" onChange={handleInputChange}/>
            <button
              onClick={setIsInput}
            >
              Save
            </button>
          </div>
        ) : (
          <h2 onClick={handleClick}>{text}</h2>
        );
      case "li":
        return <li onClick={handleClick}>{text}</li>;
      default:
    }
  }
}

export default Edit;
