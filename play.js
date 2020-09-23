const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();

// console.log(setupInput);



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