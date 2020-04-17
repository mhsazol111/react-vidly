import React from 'react';
import './App.css';
import Movies from './components/movies';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main p-2">
              <Movies />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
