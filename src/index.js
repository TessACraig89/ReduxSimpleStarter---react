import React from 'react';
import ReactDOM from 'react-dom';
// Create a new componenet. This component should produce
// some html
const App = function() {
  return <div>Hi!</div>;
}
// Take this componenets generatied HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />);
