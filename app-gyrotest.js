const Gyro = require('./Gyro');

var msg =
  '<Buffer 70 61 75 6c 2f 67 79 72 6f 00 00 00 2c 64 64 64 00 00 00 00 bf e5 c5 c0 00 00 00 00 40 0a 32 e0 00 00 00 00 40 11 32 58 00 00 00 00>';

Gyro.getA(msg);
Gyro.getB(msg);
Gyro.getC(msg);
