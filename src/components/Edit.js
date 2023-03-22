import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, text, handleClick, handleInputChange, isInput, setIsInput } =
      this.props;
    // console.log(/^skill\d+$/.test(id));
    switch (true) {
      case /^item\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <h4 id={id} onClick={handleClick}>
            {text}
          </h4>
        );
    
        case /^degree\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <h4 id={id} onClick={handleClick}>
            {text}
          </h4>
        );

      case /li\d+_item\d+/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <li id={id} onClick={handleClick}>
            {text}
          </li>
        );

      case /^university\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <h4 id={id} onClick={handleClick}>
            {text}
          </h4>
        );

      case /^gpa\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <span id={id} onClick={handleClick}>
            {text}
          </span>
        );

      case /^course\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <span id={id} onClick={handleClick}>
            {text}
          </span>
        );

      case /^uni_time\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <span id={id} onClick={handleClick}>
            {text}
          </span>
        );

      case /^title\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>Save</button>
          </div>
        ) : (
          <h4 id={id} onClick={handleClick}>
            {text}
          </h4>
        );

      case /^company\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <h4 id={id} onClick={handleClick}>
            {text}
          </h4>
        );

      case /^time\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <span id={id} onClick={handleClick}>
            {text}
          </span>
        );

      case /resp\d+_work\d+/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <li id={id} onClick={handleClick}>
            {text}
          </li>
        );

      case /^skill\d+$/.test(id):
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <li id={id} onClick={handleClick}>
            {text}
          </li>
        );
      case id === "location":
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <div id={id} onClick={handleClick}>
            {text}
          </div>
        );
      case id === "summary":
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <p id={id} onClick={handleClick}>
            {text}
          </p>
        );
      case id === "number":
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <p id={id} onClick={handleClick}>
            {text}
          </p>
        );
      case id === "email":
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <p id={id} onClick={handleClick}>
            {text}
          </p>
        );
      case id === "website":
        return isInput ? (
          <div>
            <input id={id} type="text" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <p id={id} onClick={handleClick}>
            {text}
          </p>
        );
      case id === "name":
        return isInput ? (
          <div>
            <input id={id} type="text" placeholder="Your Name" onChange={handleInputChange} />
            <button onClick={setIsInput}>✔️</button>
          </div>
        ) : (
          <h2 id={id} onClick={handleClick}>
            {text}
          </h2>
        );
      default:
    }
  }
}

export default Edit;
