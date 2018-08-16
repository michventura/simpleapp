import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <section className="header">
          <h1>This is the header area</h1>
        </section>
        <section className="body">
          <h1>This is the content</h1>
        </section>
        <section className="footer">
          <h1>This is the footer area</h1>
        </section>
      </div>
    );
  }
}

export default App;
