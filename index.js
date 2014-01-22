
module.exports = function(fn) {

  fn.addEventListener = function(ev, cb) {
    console.log('addEventListener',ev,cb);
  };

  return fn;
};
