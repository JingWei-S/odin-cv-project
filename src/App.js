import React, { Component } from "react";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Others from "./components/Others";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  download() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        // document.body.appendChild(canvas); 
        const imgData = canvas.toDataURL('image/png', 1.0);
        // console.log(imgData)
        const pdf = new jsPDF({
          unit: "mm",
          format: "a2"
        });
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // console.log(pdf)
        // pdf.output('dataurlnewwindow');
        pdf.save("download_cv.pdf");
      })
    ;
  }

  render() {
    const { edit } = this.state;

    return (
      <div className="container">
        <div className="nav">
          <p>Create Your CV</p>
          <button id="download" onClick={this.download}>Download</button>
        </div>
        <div id="divToPrint" className="cv-template">
          <Contact isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <hr style={{ color: "rgb(20, 20, 20)" }} />
          <Summary isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <Skills isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <Work isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <Education isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
          <Others isEdit={edit} canEdit={this.canEdit} rejectEdit={this.rejectEdit}/>
        </div>
        {/* <div className="footer">Made By Jing</div> */}
      </div>
    );
  }
}

export default App;
