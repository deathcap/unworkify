var work;

if (process.browser) {
  work = require('webworkify');
  console.log('Using webworkify');
} else {
  work = require('../');
  console.log('Using unworkify');
}

var w = work(require('./worker.js'));
w.addEventListener('message', function (ev) {
    console.log(ev.data);
});
