const OSC = require('osc-js');
const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('message', data => {
  const msg = new OSC.Message();
  msg.unpack(data);
  console.log(msg.args);
});

socket.on('bundle', data => {
  const msg = new OSC.Bundle();
  msg.unpack(data);
  console.log(msg.args);
});

socket.bind(5000);
