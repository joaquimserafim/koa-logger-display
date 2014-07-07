var format = require('util').format;


module.exports = display;

function display (logger) {
  console.log = function () {
    var args = Array.prototype.slice.call(arguments);
    process.stdout.write(new Date().toISOString() +
      '@' +
      format.apply(format, args)  +
      '\n');
  };

  return logger;
}
