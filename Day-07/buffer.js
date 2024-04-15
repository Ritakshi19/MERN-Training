const obj = new Buffer.from('ABCDEFGH');
// console.log(obj);
console.log(obj.toString());
obj.write('other');
console.log(obj.toString());



