var format = require('util').format;
var chalk = require('chalk');

module.exports = display;

function display (logger) {

  var colors = {
    'ERROR': chalk.red,
    'WARN': chalk.yellow,
    'INFO': chalk.green,
    'LOG': chalk.green
  };
  
  ['log', 'info', 'warn', 'error'].forEach(function (k) {
    console[k] = function () {
      if ('log' === k)
        k = 'INFO';

      var args = Array.prototype.slice.call(arguments);

      var log = format.apply(format, args);
      var method = colors[k.toUpperCase()](k.toUpperCase());

      process.stdout.write(
        format('%s %s %s\n', 
          new Date().toISOString(),
          method, 
          log));
    };
  });

  return logger;
}
