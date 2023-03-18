import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education">
        <h3>Education</h3>
        <div>
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
        </div>
      </div>
    );
  }
}

export default Education;