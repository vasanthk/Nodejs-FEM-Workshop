// Exposes a function called "info" which prints the date and a logging string.

exports.info = function (str) {
  console.log(new Date() + ': ' + str);
};