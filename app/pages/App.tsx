import React from 'react';
import Index from './index';
import './App.css';

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };
  return (
    <div className="App">
      <div style={style}>
        <Index />
      </div>
    </div>
  );
}

export default App;
