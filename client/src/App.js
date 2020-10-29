import './App.css';
import React from "react";
import exampleCall from "./api/ExampleCall";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  async componentDidMount() {
    try {
      const serverData = await exampleCall();
      this.setState({data: serverData.data.response});
    } catch(err) {
      this.setState({data: "Could not connect to server"})
    }
  }

  render() {
    return(
      <div className="App">
        <h1>{this.state.data}</h1>
      </div>
    )
  }
};

export default App;
