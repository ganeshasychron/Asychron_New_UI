import React, { Component } from "react";
import Header from "./shared/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default App;
