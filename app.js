const dgram = require('dgram');

const s = dgram.createSocket('udp4');

s.on('message', (msg, rinfo) => {
  console.log(msg);
});

s.bind(7000);
