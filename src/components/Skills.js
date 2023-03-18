import React, { Component } from "react";

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>
                <span>Coding Languages</span>:{" "}
                <span>
                  Python, R, JavaScript, CSS/HTML, Node.js, React, SQL
                </span>
              </li>
              <li>
                <span>Tools & Packages</span>:{" "}
                <span>
                  Scikit-learn, Pandas, Matplotlib, Jupyter Notebook, Google
                  Cloud Platform, Tensorflow, Tableau, Dialogflow
                </span>
              </li>
              <li>
                <span>Machine Learning</span>:{" "}
                <span>Supervised/Unsupervised models, GPT-3, NLU, ChatGPT</span>
              </li>
              <li>
                <span>Statistical Testing</span>:{" "}
                <span>A/B Testing, Hypothesis Testing, Experimentation</span>
              </li>
              <li>
                <span>Qualitative Research Methods</span>:{" "}
                <span>
                  Human-centered Designs, Usability Testing, Surveys,
                  Interviews, Prototyping
                </span>
              </li>
            </ul>
          </div>
        );
    }
}

export default Skills;
