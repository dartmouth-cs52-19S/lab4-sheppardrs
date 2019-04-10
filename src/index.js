import $ from 'jquery';
import './style.scss';

let secs = 0;
setInterval(() => {
  secs += 1;
  $('#main').html(`You've been on this page for ${secs} seconds.`);
}, 1000);
