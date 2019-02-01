const hex2ascii = require('hex2ascii');

var msg =
  '70 61 75 6c 2f 67 79 72 6f 00 00 00 2c 64 64 64 00 00 00 00 bf e5 c5 c0 00 00 00 00 40 0a 7f 70 00 00 00 00 40 10 fc c0 00 00 00 00';

var msg2 =
  '<Buffer 70 61 75 6c 2f 67 79 72 6f 00 00 00 2c 64 64 64 00 00 00 00 bf e5 c5 c0 00 00 00 00 40 0a 32 e0 00 00 00 00 40 11 32 58 00 00 00 00>';

var hex =
  '7061756C2F6779726F0000002C64646400000000BFE4564000000000400B27E00000000040110C1000000000';

var msg3 = msg2.substring(35, msg2.length);

//var num = msg2.substring(68, msg2.length);

var num = hex.substring(40, hex.length);

console.log(num);

var a = num.substr(0, 8);
var b = num.substr(16, 8);
var c = num.substr(32, 8);

// const s = a.replace(/\s/g, '');
// const t = b.replace(/\s/g, '');
// const u = c.replace(/\s/g, '');

console.log(a);
console.log(b);
console.log(c);

// console.log(s);
// console.log(t);
// console.log(u);

console.log(Buffer(a, 'hex').readFloatBE(0));
console.log(Buffer(b, 'hex').readFloatBE(0));
console.log(Buffer(c, 'hex').readFloatBE(0));

//var str = hex2ascii(num);

//console.log(Buffer('40113258', 'hex').readFloatBE(0));

// console.log(parseFloat('0xbfe5c5c0'));
