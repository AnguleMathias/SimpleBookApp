import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <div className="App container">
        <h1>Welcome to Book Shelf</h1>
        <p>
          Click <Link to="add-book">here</Link> to add book
        </p></div>
      </div>
    );
  }
}

export default App;
