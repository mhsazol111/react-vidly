import React from 'react';
import './App.css';
import Movies from './components/movies';

function App() {
  return (
    <div className="App">
      <div className="main pt-5">
        <div className="container">
          <Movies />
        </div>
      </div>
    </div>
  );
}

export default App;
