const dgram = require('dgram');
const s = dgram.createSocket('udp4');
const Gyro = require('./Gyro');
const Eeg = require('./Eeg');
//const ExtractionTest = require('./ExtractionTest');

var str;

s.on('message', (msg, rinfo) => {
  //console.log('X: ', Gyro.getX(msg), ' Y:', Gyro.getY(msg));
  //console.log(Gyro.getGyroASCII(msg));
  //console.log(Eeg.getEegASCII(msg));
  //console.log(Eeg.getEegStream(msg));
  //console.log(Eeg.extractEegData(msg, 0));
  //console.log(Eeg.extractEegData(msg, 40));

  console.log(
    'Eeg0: ',
    Eeg.getEeg0(msg),
    ' Eeg1: ',
    Eeg.getEeg1(msg),
    'Eeg2: ',
    Eeg.getEeg2(msg),
    'Eeg3: ',
    Eeg.getEeg3(msg)
  );
});

s.bind(7000);
