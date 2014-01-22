
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = function(fn) {

  inherits(fn, EventEmitter);

  fn.prototype.addEventListener = function(ev, cb) {
    this.on(ev,cb);
  };

  var self = new fn();

  global.postMessage = // unfortunately global for worker (no namespaces?)
  self.postMessage = function(msg) {
    self.emit('message', {data:msg});
  };

  return self;
};
