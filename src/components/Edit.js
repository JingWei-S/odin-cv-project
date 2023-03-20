import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      text,
      handleClick,
      handleInputChange,
      isInput,
      setIsInput,
    } = this.props;
    console.log(id);
    switch (id) {
      case "location":
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>Save</button>
          </div>
        ) : (
          <p id={id} onClick={handleClick}>
            {text}
          </p>
        );
      case "name":
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>Save</button>
          </div>
        ) : (
          <h2 id={id} onClick={handleClick}>
            {text}
          </h2>
        );
      case "li":
        return <li onClick={handleClick}>{text}</li>;
      default:
    }
  }
}

export default Edit;
