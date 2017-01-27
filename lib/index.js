var uuid   = require('uuid'); // https://git.io/vDviE
var crypto = require('crypto');    // http://nodejs.org/api/crypto.html

module.exports = function(str) {
  if(!str || str.length < 1) { // no parameter supplied
    return uuid.v4();          // return node-uuid v4() uuid
  }
  else { // create a consistent (non-random!) UUID
    var hash = crypto.createHash('sha256').update(str.toString()).digest('hex').substring(0, 36);
    var chars = hash.split('');
    chars[8]  = '-';
    chars[13] = '-';
    chars[14] = '4';
    chars[18] = '-';
    chars[19] = '8';
    chars[23] = '-';
    hash = chars.join('');
    return hash;
  }
}
