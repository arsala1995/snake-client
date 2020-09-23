const { connect } = require('./client');

// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   handleUserInput();
//   return stdin;
// }

// const handleUserInput = function() {
//   stdin.on('data', (data) => {
//     if (data == '\u0003') {
//     process.exit();
//     }
    
//     });
// }
 console.log('Connecting ...');

connect();
// console.log(setupInput);
// module.exports = { setupInput };


// module.exports = setupInput;


// setupInput1.on('data', (data) => {
//   if (data == "\u0003") {
//         process.exit();
//         }

//         else if{

//         }
//    console.log("the new data: " + data);
//    conn.write(data);
// });