const osc = require('osc');

const udpPort = new osc.UDPPort({
  localAddress: '0.0.0.0',
  localPort: 5000,
  metadata: true
});

// udpPort.on('error', error => {
//   console.log(error.message);
// });

udpPort.on('bundle', (oscBundle, timeTag, info) => {
  console.log('OSC bundle ', timeTag, ':', oscBundle);
  console.log('Remote info: ', info);
});

udpPort.on('message', oscMessage => {
  console.log(oscMessage);
});

// try {
//   let rawPacket;
//   const msg = osc.readPacket(rawPacket);
// } catch (error) {
//   console.log('Error: ', error.message);
// }

udpPort.open();
