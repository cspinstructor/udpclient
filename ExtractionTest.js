const baUtil = require('byte-array-util');
const hex2ascii = require('hex2ascii');

let prevGyro, currentGyro;

extractGyroData = (msg, offset) => {
  msg = baUtil.toHexString(msg);
  let num = msg.substring(40, msg.length);
  let b = num.substr(offset, 8);
  let t = Buffer(b, 'hex').readFloatBE(0);

  if (t !== undefined) {
    return t.toFixed(1);
  }
};

getData = msg => {
  msg = baUtil.toHexString(msg);
  return hex2ascii(msg);
};

getGyroStream = msg => {
  msg = baUtil.toHexString(msg);
  ascii = hex2ascii(msg);

  if (ascii.indexOf('gyro') >= 0) {
    prevGyro = ascii;
    return ascii;
  } else {
    //return prevGyro;
  }
};

getZ = msg => {
  return extractGyroData(msg, 0);
};

getX = msg => {
  return extractGyroData(msg, 16);
};

getY = msg => {
  return extractGyroData(msg, 32);
};

module.exports = {
  getZ: getZ,
  getX: getX,
  getY: getY,
  getData,
  getGyroStream
};
