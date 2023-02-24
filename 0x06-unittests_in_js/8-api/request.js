const req = require('request');

const get = (url) => new Promise((resolve, reject) => {
  req.get(url, (err, res, body) => {
    if (err) reject(err);
    else resolve(body);
  });
});

module.exports = get;
