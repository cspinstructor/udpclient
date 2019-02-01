const nodeMuse = require('node-muse');
const OSC = nodeMuse.OSC;

const Muse = nodeMuse.connect(
  '127.0.0.1',
  5000
).Muse;

Muse.on('connected', () => {
  console.log('connected');
});
