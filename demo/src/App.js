import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecorderPage from "./pages/recorder/RecorderPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RecorderPage />
        <Footer />
      </div>
    );
  }
}

export default App;
