// configuration for Winston logger
const winston = require('winston');

module.exports.logger = logger = new winston.Logger({
    transports: [
      new winston.transports.Console({
        level: 'debug',
        json: false,
        colorize: true,
        timestamp: true
      }),
    ],
    exitOnError: false,
    handleExceptions: true
});