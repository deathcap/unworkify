
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = function(fn) {

  inherits(fn, EventEmitter);

  var self = new fn();

  self.addEventListener = function(ev, cb) {
    self.on(ev,cb);
  };

  global.postMessage = // unfortunately global for worker (no namespaces?)
  self.postMessage = function(msg) {
    self.emit('message', {data:msg});
  };

  return self;
};
