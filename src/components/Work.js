import React, { Component } from "react";

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        );
    }
}

export default Work;