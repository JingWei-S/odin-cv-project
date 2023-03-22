import React, { Component } from "react";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Others from "./components/Others";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = { edit: true };
    this.canEdit = this.canEdit.bind(this);
    this.rejectEdit = this.rejectEdit.bind(this);
  }

  // onDivClicked() {
  //   console.log('Name has been clicked');
  // }
  canEdit() {
    this.setState({ edit: true });
    // console.log(this.state.edit);
  }

  rejectEdit() {
    this.setState({ edit: false });
    console.log(this.state.edit);
  }

  render() {
    const { edit } = this.state;

    return (
      <div className="container">
        <div className="nav">Create Your CV</div>
        <div className="cv-template">
          <Contact isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <hr style={{ color: "rgb(20, 20, 20)" }} />
          <Summary isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <Skills isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <Work isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <Education isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <Others isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
        </div>
        <div className="footer">Made By Jing</div>
      </div>
    );
  }
}

export default App;
