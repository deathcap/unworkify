
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = function(fn) {

  inherits(fn, EventEmitter);
  console.log('fN',fn);

  fn.addEventListener = function(ev, cb) {
    this.on(ev, cb);
    console.log('addEventListener',ev,cb);
  };

  return fn;
};
