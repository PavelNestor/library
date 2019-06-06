const winston = require('winston');
const ENV = process.env.NODE_ENV;

function getLogger(module) {
  const path = module.filename.split('/').slice(-2).join('/');

  return new winston.loggers({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: ENV == 'development' ?
      })
    ]
  })
}