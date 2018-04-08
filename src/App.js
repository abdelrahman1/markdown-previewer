import React, { Component } from "react";
import marked from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      markdown: `### hello, This is Markdown Live Preview`,
      preview: marked(`### hello, This is Markdown Live Preview`)
    };
  }

  handleTextAreaChange = e => {
    this.setState({
      markdown: e.target.value,
      preview: marked(e.target.value)
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 style={{ textAlign: "center", color: "white" }}>
            Markdown Live Previewer
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <textarea
                onChange={this.handleTextAreaChange}
                className="form-control"
                rows="23"
                value={this.state.markdown}
              />
            </div>
            <div className="col-md-6">
              <div
                dangerouslySetInnerHTML={{ __html: this.state.preview }}
                className="marked"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
