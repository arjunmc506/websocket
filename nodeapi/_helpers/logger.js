// Firstly we'll need to import the fs library
var fs = require("fs");
const moment = require('moment');
const AppConfig = require('../_config/db-config.json');

// next we'll want make our Logger object available
// to whatever file references it.
var Logger = (exports.Logger = {});

createDir(AppConfig.log.path);

// Create 3 sets of write streams for the 3 levels of logging we wish to do
// every time we get an error we'll append to our error streams, any debug message
// to our debug stream etc...
var infoStream = fs.createWriteStream(`${AppConfig.log.path + moment().format("DDMMMYYYY")}_Info.txt`, {
  flags: "a",
});
// Notice we set the path of our log files in the first parameter of
// fs.createWriteStream. This could easily be pulled in from a config
// file if needed.
var errorStream = fs.createWriteStream(`${AppConfig.log.path + moment().format("DDMMMYYYY")}_Error.txt`, {
  flags: "a",
});
// createWriteStream takes in options as a second, optional parameter
// if you wanted to set the file encoding of your output file you could
// do so by setting it like so: ('logs/debug.txt' , { encoding : 'utf-8' });
var debugStream = fs.createWriteStream(`${AppConfig.log.path + moment().format("DDMMMYYYY")}_Debug.txt`, {
  flags: "a",
});

function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}
// Finally we create 3 different functions
// each of which appends our given messages to
// their own log files along with the current date as an
// iso string and a \n newline character

exports.Logger.info = function (msg) {
  var message =
    new Date().toString().substring(0, 25) + " : Info : " + msg + "\n";
  infoStream.write(message);
};

exports.Logger.debug = function (msg) {
  var message =
    new Date().toString().substring(0, 25) + " : Debug : " + msg + "\n";
  debugStream.write(message);
};

exports.Logger.error = function (msg) {
  var message =
    new Date().toString().substring(0, 25) + " : Error :" + msg + "\n";
  errorStream.write(message);
};
