import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="nav">Create Your CV</div>
        <div className="cv-template">
          <div className="contact-info">
            <h2>Your Name</h2>
            <div className="contact">
              <p>Melbourne, Victoria, Australia</p>
              <p>abced@unimelb.edu.au</p>
              <p>+61 0411111001</p>
              <p>https://github.com/roboto</p>
            </div>
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <p>
              Innovative researcher with 5 years of research experience across
              multiple countries and hands-on industry experience. Adept in AI
              Chatbots, Data Analysis, Model Development, and Machine Learning.
              A collaborative individual with strong communication and teamwork
              skills, demonstrated by working with cross-functional teams.
            </p>
          </div>
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
          <div className="work-experience">
            <h3>Work Experience</h3>
            <div>
              <h4>Sales Associate</h4>
              <h4>
                ABC Company, Australia <span>May 2018 - present</span>
              </h4>
              <ul>
                <li>Assisted customers in selecting and purchasing products</li>
                <li>Managed inventory and restocked shelves as needed</li>
                <li>
                  Provided exceptional customer service to ensure satisfaction
                  and repeat business
                </li>
              </ul>
            </div>
            <div>
              <h4>Marketing Intern</h4>
              <h4>
                XYZ Corporation, Malaysia <span>Jan 2018 - Apr 2018</span>
              </h4>
              <ul>
                <li>
                  Conducted market research and analyzed data to identify trends
                  and opportunities
                </li>
                <li>
                  Assisted in the development and implementation of marketing
                  campaigns
                </li>
                <li>
                  Conducted competitive analysis and provided recommendations
                  for improvement
                </li>
              </ul>
            </div>
            <div>
              <h4>Administrative Assistant</h4>
              <h4>
                DEF Organization, Japan <span>Aug 2017 - Dec 2017</span>
              </h4>
              <ul>
                <li>
                  Managed scheduling and calendar for executive team members
                </li>
                <li>
                  Coordinated travel arrangements and prepared expense reports
                </li>
                <li>
                  Answered and directed phone calls and emails in a professional
                  manner
                </li>
              </ul>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div>
              <h4>Bachelor of Science in Business Administration</h4>
              <h4>
                XYZ University, Canberra <span>Graduation Date: May 2018</span>
              </h4>
              <div>
                <p><span>GPA</span>: <span>3.7/4.0</span></p>
                <p><span>Relevant courses</span>: <span>Data Structures and Algorithms, Computer Networks, Operating Systems, Business Law </span></p>
              </div>
            </div>
          </div>
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
                  <span>Society for Human Resource Management</span>{" "}
                  <span></span>
                </li>
                <li>
                  <span>American Marketing Association</span> <span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">Made By Jing</div>
      </div>
    );
  }
}

export default App;
