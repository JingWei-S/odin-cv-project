import React, { Component } from "react";

class Others extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="others">
        <h3>Others</h3>
        <div>
          <h4>Awards</h4>
          <ul>
            <li>
              <span>Dean's List, XYZ University</span>{" "}
              <span>(Spring 2018)</span>
            </li>
            <li>
              <span>National Merit Scholarship Finalist</span>{" "}
              <span>(2017)</span>
            </li>
          </ul>
        </div>
        <div>
          <h4>Professional Membership</h4>
          <ul>
            <li>
              <span>Society for Human Resource Management</span> <span></span>
            </li>
            <li>
              <span>American Marketing Association</span> <span></span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Others;