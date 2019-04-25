import $ from 'jquery';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

let secs = 0;
setInterval(() => {
  secs += 1;
  $('#main').html(`You've been on this page for ${secs} seconds.`);
}, 1000);
