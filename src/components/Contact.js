import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact-info">
        <h2>Your Name</h2>
        <div className="contact">
          <p>Melbourne, Victoria, Australia</p>
          <p>abced@unimelb.edu.au</p>
          <p>+61 0411111001</p>
          <p>https://github.com/roboto</p>
        </div>
      </div>
    );
  }
}

export default Contact;
