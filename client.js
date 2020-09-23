
// const  setupInput  = require('./play.js').setupInput;
// console.log(setupInput);

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   return stdin;
// }

// console.log("setup:" + setupInput);
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function() {
  stdin.on('data', (data) => {
    if (data == '\u0003') {
    process.exit();
    }
    
    });
}

const { Console } = require('console');
const net = require('net');
const stdin = process.stdin;

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541


  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    // when a connection is established
    console.log("successfully connected to server");
    conn.write("Name: Ars");

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 100);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 150);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 200);

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
    const setupInput1 = setupInput();
    setupInput1.on('data', (data) => {
      

       console.log("the new data: " + data);
       conn.write(data);
    });
 
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
    console.log("It's got a sharp tongue, this server!");

  });


  return conn;
}

module.exports = { connect };