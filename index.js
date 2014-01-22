
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = function(fn) {

  inherits(fn, EventEmitter);
  console.log('fn', fn);

  fn.prototype.addEventListener = function(ev, cb) {
    this.on(ev,cb);
    console.log('addEventListener',ev,cb);
  };

  global.postMessage = // unfortunately global for worker (no namespaces?)
  fn.prototype.postMessage = function(msg) {
    console.log('postMessage',msg);
  };

  return new fn();
};
