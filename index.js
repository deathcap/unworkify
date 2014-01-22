
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = function(fn) {

  inherits(fn, EventEmitter);

  var self = new fn();

  fn.prototype.addEventListener = function(ev, cb) {
    self.on(ev,cb);
    //console.log('addEventListener',ev,cb);
  };

  global.postMessage = // unfortunately global for worker (no namespaces?)
  fn.prototype.postMessage = function(msg) {
    self.emit('message', {data:msg});
    //console.log('postMessage',msg);
  };

  return self;
};
