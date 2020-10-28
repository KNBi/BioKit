import './App.css';
import React from "react";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    const fetchServerData = async () => {
      try {
        const serverResponse = await axios.get("http://localhost:5000/");
        this.setState({data: serverResponse.data.response});
      } catch(err) {
        // console.error(err);
      }
    };
    fetchServerData();
  }

  render() {
    return(
      <div className="App">
        <h1>{this.state.data !== "" ? this.state.data : "Could not connect to server"}</h1>
      </div>
    )
  }
};

export default App;
